
import { useParams, Link } from "react-router-dom";
import { routes } from "../data/routes";
import { ArrowLeft, MapPin, Bus, BusFront } from "lucide-react";

export default function RouteDetails() {
  const { id } = useParams();
  const route = routes.find((r) => r.id === id);

  if (!route) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <p className="text-lg font-semibold text-gray-700">Route not found 🚫</p>
        <Link
          to="/"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    );
  }

  const start = route.stops[0].name;
  const end = route.stops[route.stops.length - 1].name;
  const TransportIcon = route.transportType === "BRT" ? BusFront : Bus;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-blue-700 mb-6 hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" /> Back
        </Link>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {start} → {end}
            </h1>
            <p className="text-gray-600 mt-1">
              <TransportIcon
                size={18}
                className="inline mr-2 text-green-600"
              />
              <span className="font-semibold text-green-700">
                {route.transportType}
              </span>{" "}
              • ₦{route.fare}
            </p>
          </div>

          <div className="text-right">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              Lagos Route
            </span>
          </div>
        </div>

        {/* Stops */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Stops Along the Route
          </h3>
          <div className="space-y-3">
            {route.stops.map((stop, index) => (
              <div
                key={stop.id}
                className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <MapPin size={18} className="text-blue-600" />
                <span className="font-medium text-gray-800">{stop.name}</span>
                {index === 0 && (
                  <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    Start
                  </span>
                )}
                {index === route.stops.length - 1 && (
                  <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Destination
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link
            to={`/map/${route.id}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View on Map
          </Link>
        </div>
      </div>
    </div>
  );
}
