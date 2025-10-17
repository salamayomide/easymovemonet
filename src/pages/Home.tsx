import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import RouteList from "../components/RouteList";
import RouteMap from "../components/RouteMap";
import { routes } from "../data/routes";
import { findPlan, type PlanResult } from "../utils/findRoute";
import type { Stop } from "../types/route";

export default function Home() {
  const [plan, setPlan] = useState<PlanResult | null>(null);

  // collect all unique stops for the search suggestions
  const allStops: Stop[] = useMemo(() => {
    const stopMap = new Map<string, Stop>();
    for (const route of routes) {
      for (const stop of route.stops) {
        if (!stopMap.has(stop.id)) stopMap.set(stop.id, stop);
      }
    }
    return Array.from(stopMap.values());
  }, []);

  const handleSearch = (startName: string, endName: string) => {
    const start = allStops.find(
      (s) => s.name.toLowerCase() === startName.trim().toLowerCase()
    );
    const end = allStops.find(
      (s) => s.name.toLowerCase() === endName.trim().toLowerCase()
    );

    if (!start || !end) {
      alert("⚠️ Please select valid stops from the suggestions.");
      return;
    }

    const result = findPlan(routes, start.id, end.id);
    setPlan(result);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center pt-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-700 via-blue-600 to-orange-500 bg-clip-text text-transparent">
          Easymove — Lagos Route Finder
        </h1>
        <p className="text-gray-600 mt-2">
          Enter your start and destination (e.g. “Ikorodu” to “Ajah”)
        </p>
      </div>

      <SearchBar stops={allStops} onSearch={handleSearch} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RouteList plan={plan} />
        <RouteMap plan={plan} />
      </div>
    </div>
  );
}
