import Weather from "@/components/Weather";
import { getResolvedLatLong } from "@/libs/location-info";

export default async function PageWeather({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);

  return (
    <>
      <Weather lat={lat} lon={lon} />
    </>
  );
}
