import { getLocationData } from "@/libs/location-info";
import LocationSwitcher from "./LocationSwitcher";

const LocationInfo = async ({ location, lat, lon }) => {
  const { continent, countryName, city } = await getLocationData(lat, lon);
  return (
    <>
      <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
              {continent || (
                <>
                  No Such District{" "}
                  <span className="fw-bold text-red-500">${location}</span>
                  Found.....
                </>
              )}
            </h2>
            <LocationSwitcher />
          </div>
          <p className="text-lg text-[#C4C4C4] lg:text-xl">
            {countryName || "Unknown Country"} | {city || "Unknown City"}
          </p>
          <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
            <span>{new Date().toLocaleTimeString()}</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
