import type { PlanResult } from "../utils/findRoute";
import { Link } from "react-router-dom";
import type { Leg } from "../utils/findRoute";

interface Props {
  plan: PlanResult | null;
}

export default function RouteList({ plan }: Props) {
  if (!plan) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-gray-700">
          No route selected
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Search a start and destination to see step-by-step public transport
          plans.
        </p>
      </div>
    );
  }

  const renderLeg = (leg: Leg, idx: number) => (
    <div
      key={idx}
      className="p-3 rounded-lg border border-gray-100 bg-gradient-to-r from-white to-green-50"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-md font-semibold">{leg.route.name}</div>
          <div className="text-sm text-gray-600">
            {leg.route.transportType} • ₦{leg.route.fare}
          </div>
        </div>
        <div className="text-right text-sm text-gray-600">
          {leg.from.name} → {leg.to.name}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-xl shadow space-y-4">
      {plan.type === "direct" && (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-green-700">Direct route</h3>
            <div className="text-sm text-gray-600">
              Estimated time:{" "}
              <span className="font-semibold">{plan.totalTime}m</span>
            </div>
          </div>

          <div className="space-y-3">
            {plan.legs.map((leg, i) => renderLeg(leg, i))}
          </div>

          <div className="mt-3 flex justify-between items-center">
            <div className="text-lg font-semibold">
              Total fare: ₦{plan.totalFare}
            </div>
            <Link
              to={`/route/${plan.legs[0].route.id}`}
              className="text-white bg-blue-600 px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        </>
      )}

      {plan.type === "one-transfer" && (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-orange-600">
              1 transfer required
            </h3>
            <div className="text-sm text-gray-600">
              Transfer at{" "}
              <span className="font-semibold">{plan.transferAt.name}</span>
            </div>
          </div>

          <div className="space-y-3">
            {plan.legs.map((leg, i) => renderLeg(leg, i))}
          </div>

          <div className="mt-3 flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-600">Estimated time</div>
              <div className="text-lg font-semibold">
                {plan.totalTime} minutes
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Total fare</div>
              <div className="text-lg font-semibold">₦{plan.totalFare}</div>
            </div>
          </div>
        </>
      )}

      {plan.type === "two-transfer" && (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-red-600">
              2 transfers required
            </h3>
            <div className="text-sm text-gray-600">
              Transfers: {plan.transfersAt.map((t) => t.name).join(" → ")}
            </div>
          </div>

          <div className="space-y-3">
            {plan.legs.map((leg, i) => renderLeg(leg, i))}
          </div>

          <div className="mt-3 flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-600">Estimated time</div>
              <div className="text-lg font-semibold">
                {plan.totalTime} minutes
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Total fare</div>
              <div className="text-lg font-semibold">₦{plan.totalFare}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
