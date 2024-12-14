import Weather from "@/components/Weather";
import { delay } from "@/libs/delay";
import { getResolvedLatLong } from "@/libs/location-info";

export default async function PageWeather({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
  await delay(2400);

  return (
    <>
      <Weather lat={lat} lon={lon} />
    </>
  );
}
