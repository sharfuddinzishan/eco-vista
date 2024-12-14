import Wind from "@/components/Wind";
import { delay } from "@/libs/delay";
import { getResolvedLatLong } from "@/libs/location-info";

export default async function PageWind({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
  await delay(2000);

  return (
    <>
      <Wind lat={lat} lon={lon} />
    </>
  );
}
