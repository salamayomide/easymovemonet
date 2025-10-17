
import { useState } from "react";
import type { Stop } from "../types/route";

interface Props {
  stops: Stop[];
  onSearch: (startName: string, endName: string) => void;
}

export default function SearchBar({ stops, onSearch }: Props) {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const suggestions = (q: string) =>
    q.length === 0 ? [] : stops.filter((s) => s.name.toLowerCase().includes(q.toLowerCase())).slice(0, 8);

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-3">
      <div className="flex-1">
        <label className="text-sm text-gray-600">Start</label>
        <input
          list="start-suggestions"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g., Ikorodu Garage"
        />
        <datalist id="start-suggestions">
          {suggestions(start).map((s) => (
            <option key={s.id} value={s.name} />
          ))}
        </datalist>
      </div>

      <div className="flex-1">
        <label className="text-sm text-gray-600">Destination</label>
        <input
          list="end-suggestions"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="e.g., Ajah"
        />
        <datalist id="end-suggestions">
          {suggestions(end).map((s) => (
            <option key={s.id} value={s.name} />
          ))}
        </datalist>
      </div>

      <div className="flex items-end">
        <button
          onClick={() => onSearch(start, end)}
          className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg shadow"
        >
          Find Route
        </button>
      </div>
    </div>
  );
}
