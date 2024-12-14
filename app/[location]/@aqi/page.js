import AQI from "@/components/AQI";
import { getResolvedLatLong } from "@/libs/location-info";

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const { lat, lon } = await getResolvedLatLong(location, latitude, longitude);
  return <AQI lat={lat} lon={lon} />;
};

export default AQIPage;
