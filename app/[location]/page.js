import LocationInfo from "@/components/LocationInfo";
import { getResolvedLatLong } from "@/libs/location-info";

export default async function PageLocation({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
  return (
    <>
      <LocationInfo location={location} lat={lat} lon={lon} />
    </>
  );
}
