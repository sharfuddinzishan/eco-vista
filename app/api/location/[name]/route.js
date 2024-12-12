import { getLocationByName } from "../location-utils";

export async function GET(request, { params: { name } }) {
  const locationData = getLocationByName(name);
  return Response.json(locationData);
}
