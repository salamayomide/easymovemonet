
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";
import type { PlanResult } from "../utils/findRoute";
import "leaflet/dist/leaflet.css";

// fix icons for many bundlers
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: import("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: import("leaflet/dist/images/marker-icon.png"),
  shadowUrl: import("leaflet/dist/images/marker-shadow.png"),
});

interface Props {
  plan: PlanResult | null;
}

export default function RouteMap({ plan }: Props) {
  const center: [number, number] = [6.5244, 3.3792];

  if (!plan) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-gray-600">Map will show route here after searching.</p>
        <div className="mt-4 h-80 bg-gray-100 rounded" />
      </div>
    );
  }

  // build polylines and markers from legs
  const polylines: [number, number][][] = [];
  const markers: { pos: [number, number]; label: string }[] = [];

  plan.legs.forEach((leg) => {
    const fromIndex = leg.route.stops.findIndex((s) => s.id === leg.from.id);
    const toIndex = leg.route.stops.findIndex((s) => s.id === leg.to.id);
    const segment = leg.route.stops.slice(Math.min(fromIndex, toIndex), Math.max(fromIndex, toIndex) + 1)
      .map((s) => [s.latitude, s.longitude] as [number, number]);
    polylines.push(segment);
    markers.push({ pos: [leg.from.latitude, leg.from.longitude], label: leg.from.name });
    markers.push({ pos: [leg.to.latitude, leg.to.longitude], label: leg.to.name });
  });

  const mapCenter = markers.length ? markers[0].pos : center;

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h4 className="font-semibold mb-3">Map Preview</h4>
      <MapContainer center={mapCenter} zoom={11} style={{ height: 420, width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {polylines.map((line, i) => (
          <Polyline key={i} positions={line} />
        ))}
        {markers.map((m, i) => (
          <Marker key={i} position={m.pos}>
            <Popup>{m.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
