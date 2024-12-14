import Wind from "@/components/Wind";
import { getResolvedLatLong } from "@/libs/location-info";

export default async function PageWind({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);

  return (
    <>
      <Wind lat={lat} lon={lon} />
    </>
  );
}
