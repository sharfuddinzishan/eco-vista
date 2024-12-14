import AQI from "@/components/AQI";
import { delay } from "@/libs/delay";
import { getResolvedLatLong } from "@/libs/location-info";

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
  await delay(1200);
  return <AQI lat={lat} lon={lon} />;
};

export default AQIPage;
