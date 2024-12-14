import ct from "countries-and-timezones";

export const getTimeZones = (countryCode) => {
  const country = ct.getCountry(countryCode);
  const timeZone = country && country.timezones ? country.timezones[0] : null;
  // Get the time based on timezone or system time
  const currentTime = timeZone
    ? new Date().toLocaleTimeString("en-US", { timeZone })
    : new Date().toLocaleTimeString("en-US");

  const currentDate = timeZone
    ? new Date().toLocaleDateString("en-US", { timeZone })
    : new Date().toLocaleDateString("en-US");

  return { currentTime, currentDate };
};
