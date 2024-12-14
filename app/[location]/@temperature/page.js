import Temperature from "@/components/Temperature";
import { delay } from "@/libs/delay";
import { getResolvedLatLong } from "@/libs/location-info";

export default async function PageTemperature({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
  await delay(500);
  return (
    <>
      <Temperature lat={lat} lon={lon} />
    </>
  );
}
