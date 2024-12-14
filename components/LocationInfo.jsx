import { getLocationData } from "@/libs/location-info";
import { getTimeZones } from "@/libs/timezones";
import LocationSwitcher from "./LocationSwitcher";

const LocationInfo = async ({ location, lat, lon }) => {
  const { continent, countryName, city, countryCode } = await getLocationData(
    lat,
    lon
  );
  const { currentTime, currentDate } = getTimeZones(countryCode);
  return (
    <>
      <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
              {continent || (
                <span className="text-sm">
                  No Search&nbsp;
                  <span className="fw-bold text-red-500">{location}</span>
                  &nbsp;Found.....
                </span>
              )}
            </h2>
            <LocationSwitcher />
          </div>
          <p className="text-lg text-[#C4C4C4] lg:text-xl">
            {countryName || "Unknown Country"} | {city || "Unknown City"}
          </p>
          <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
            <span>{currentTime}</span>
            <span>{currentDate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
