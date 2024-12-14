export const getWeatherData = async (lat, lon) => {
  try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await result.json();
    const extractData = data?.weather[0];
    return extractData || {};
  } catch (e) {
    console.error(e.message);
    return {};
  }
};

export const getWindData = async (lat, lon) => {
  try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await result.json();
    const extractData = data?.wind;
    return extractData || {};
  } catch (e) {
    console.error(e.message);
    return {};
  }
};
export const getTemperatureData = async (lat, lon) => {
  try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`
    );
    const data = await result.json();
    const extractData = data?.main;
    return extractData || {};
  } catch (e) {
    console.error(e.message);
    return {};
  }
};

export const getAqiData = async (lat, lon) => {
  try {
    const result = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await result.json();
    const extractData = data?.list?.[0] || {};
    return extractData || {};
  } catch (e) {
    console.error(e.message);
    return {};
  }
};
