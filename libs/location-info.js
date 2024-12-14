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
    const response = await fetch(`api/location`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

// export const getLocationLatLong = async (locationName) => {
//   try {
//     const response = await fetch(
//       `http:localhost:3000/api/location/${encodeURIComponent(locationName)}`
//     );
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.error(e.message);
//   }
// };

export const getLocationLatLong = async (locationName) => {
  try {
    const isProduction = process.env.NEXT_PUBLIC_VERCEL_URL;
    const url = isProduction
      ? `https://${
          process.env.NEXT_PUBLIC_VERCEL_URL
        }/api/location/${encodeURIComponent(locationName)}`
      : `http://localhost:3000/api/location/${encodeURIComponent(
          locationName
        )}`;

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
