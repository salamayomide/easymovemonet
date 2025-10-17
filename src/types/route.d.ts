export interface Stop {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  type: string;
}

export interface Route {
  travelTime: boolean;
  id: string;
  name: string;
  transportType: string;
  fare: number;
  stops: Stop[];
}
