import { districts } from "@/libs/districts";

export const getLocations = () => {
  return districts.data;
};

export const getLocationByName = (location) => {
  if (!location) return null;
  const getLocation = districts.data.find(
    (district) => district.location.toLowerCase() === location.toLowerCase()
  );
  return getLocation || {};
};
