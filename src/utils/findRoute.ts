
import type { Route,Stop } from "../types/route";


export type Leg = {
  route: Route;
  from: Stop;
  to: Stop;
};

export type PlanDirect = {
  type: "direct";
  legs: Leg[];
  totalFare: number;
  totalTime: number; // minutes
};

export type PlanOneTransfer = {
  type: "one-transfer";
  legs: Leg[]; // [leg1, leg2]
  transferAt: Stop;
  totalFare: number;
  totalTime: number;
};

export type PlanTwoTransfer = {
  type: "two-transfer";
  legs: Leg[]; // [leg1, leg2, leg3]
  transfersAt: Stop[]; // [firstTransfer, secondTransfer]
  totalFare: number;
  totalTime: number;
};

export type PlanResult = PlanDirect | PlanOneTransfer | PlanTwoTransfer | null;

/**
 * Helper: sum travelTime; if route.travelTime missing, estimate using stops length * avg 3.5min
 */
function estimateRouteTime(route: Route, fromId: string, toId: string) {
  const fromIndex = route.stops.findIndex((s) => s.id === fromId);
  const toIndex = route.stops.findIndex((s) => s.id === toId);
  if (fromIndex === -1 || toIndex === -1 || fromIndex > toIndex) return 0;
  const stopsCount = toIndex - fromIndex;
  if (route.travelTime && route.stops.length > 1) {
    // scale travelTime proportional to segment length
    const perSegment = route.travelTime / (route.stops.length - 1);
    return Math.round(perSegment * stopsCount);
  }
  // fallback estimate: 3.5 minutes per hop
  return Math.round(stopsCount * 3.5);
}

/**
 * findPlan - finds best plan between startId and endId
 */
export function findPlan(routes: Route[], startId: string, endId: string): PlanResult {
  // normalize existence check
  const routesWithStop = (stopId: string) => routes.filter((r) => r.stops.some((s) => s.id === stopId));

  // 1) Direct route (same route includes both stops in correct order)
  for (const r of routes) {
    const fromIdx = r.stops.findIndex((s) => s.id === startId);
    const toIdx = r.stops.findIndex((s) => s.id === endId);
    if (fromIdx !== -1 && toIdx !== -1 && fromIdx <= toIdx) {
      const leg: Leg = {
        route: r,
        from: r.stops[fromIdx],
        to: r.stops[toIdx],
      };
      const totalFare = r.fare;
      const totalTime = estimateRouteTime(r, startId, endId);
      return { type: "direct", legs: [leg], totalFare, totalTime };
    }
  }

  // 2) One-transfer (A contains start, B contains end, and they share a common stop X)
  const startRoutes = routesWithStop(startId);
  const endRoutes = routesWithStop(endId);

  for (const a of startRoutes) {
    for (const b of endRoutes) {
      if (a.id === b.id) continue;
      // find a stop in a that is also in b and in correct directional order
      for (const shared of a.stops) {
        if (!b.stops.some((s) => s.id === shared.id)) continue;

        const aFrom = a.stops.findIndex((s) => s.id === startId);
        const aShared = a.stops.findIndex((s) => s.id === shared.id);
        const bShared = b.stops.findIndex((s) => s.id === shared.id);
        const bTo = b.stops.findIndex((s) => s.id === endId);

        if (aFrom === -1 || aShared === -1 || bShared === -1 || bTo === -1) continue;
        if (aFrom <= aShared && bShared <= bTo) {
          const leg1: Leg = { route: a, from: a.stops[aFrom], to: a.stops[aShared] };
          const leg2: Leg = { route: b, from: b.stops[bShared], to: b.stops[bTo] };
          const totalFare = a.fare + b.fare;
          const totalTime = estimateRouteTime(a, leg1.from.id, leg1.to.id) + estimateRouteTime(b, leg2.from.id, leg2.to.id) + 4; // +4min for transfer
          return { type: "one-transfer", legs: [leg1, leg2], transferAt: shared, totalFare, totalTime };
        }
      }
    }
  }

  // 3) Two-transfers (A -> B -> C)
  // brute-force over all route combos; keep first valid found
  for (const a of startRoutes) {
    for (const b of routes) {
      if (a.id === b.id) continue;
      // find common X between a and b
      const commonAB = a.stops.find((sa) => b.stops.some((sb) => sb.id === sa.id));
      if (!commonAB) continue;

      for (const c of endRoutes) {
        if (b.id === c.id) continue;
        const commonBC = b.stops.find((sb) => c.stops.some((sc) => sc.id === sb.id));
        if (!commonBC) continue;

        // indices for ordering
        const aFrom = a.stops.findIndex((s) => s.id === startId);
        const aCommon = a.stops.findIndex((s) => s.id === commonAB.id);
        const bCommonAB = b.stops.findIndex((s) => s.id === commonAB.id);
        const bCommonBC = b.stops.findIndex((s) => s.id === commonBC.id);
        const cCommon = c.stops.findIndex((s) => s.id === commonBC.id);
        const cTo = c.stops.findIndex((s) => s.id === endId);

        if ([aFrom, aCommon, bCommonAB, bCommonBC, cCommon, cTo].some((i) => i === -1)) continue;

        if (aFrom <= aCommon && bCommonAB <= bCommonBC && cCommon <= cTo) {
          const leg1: Leg = { route: a, from: a.stops[aFrom], to: a.stops[aCommon] };
          const leg2: Leg = { route: b, from: b.stops[bCommonAB], to: b.stops[bCommonBC] };
          const leg3: Leg = { route: c, from: c.stops[cCommon], to: c.stops[cTo] };
          const totalFare = a.fare + b.fare + c.fare;
          const totalTime =
            estimateRouteTime(a, leg1.from.id, leg1.to.id) +
            estimateRouteTime(b, leg2.from.id, leg2.to.id) +
            estimateRouteTime(c, leg3.from.id, leg3.to.id) +
            6; // two transfers overhead
          return { type: "two-transfer", legs: [leg1, leg2, leg3], transfersAt: [commonAB, commonBC], totalFare, totalTime };
        }
      }
    }
  }

  return null;
}
