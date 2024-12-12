import { getLocations } from "./location-utils";

export async function GET(request) {
  const locationsData = getLocations();
  return Response.json(locationsData);
}
