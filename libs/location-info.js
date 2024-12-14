export const getLocationData = async (lat, lon) => {
  if (!lat || !lon) {
    return {};
  }
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
    return {};
  }
};

export const getLocationLatLongList = async () => {
  try {
    const url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/location`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

export const getLocationLatLong = async (locationName) => {
  try {
    const url = `https://${
      process.env.NEXT_PUBLIC_VERCEL_URL
    }/api/location/${encodeURIComponent(locationName)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Fetch error:", e.message);
  }
};

export const getResolvedLatLong = async (location, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatlong = await getLocationLatLong(location);

  if (locationLatlong?.latitude && locationLatlong?.longitude) {
    const lat = locationLatlong.latitude;
    const lon = locationLatlong.longitude;

    return { lat, lon };
  } else {
    return {};
  }
};
