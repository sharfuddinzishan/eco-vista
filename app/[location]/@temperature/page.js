import Temperature from "@/components/Temperature";
import { getResolvedLatLong } from "@/libs/location-info";

export default async function PageTemperature({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);

  return (
    <>
      <Temperature lat={lat} lon={lon} />
    </>
  );
}
