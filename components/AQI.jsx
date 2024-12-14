import { getAqiData } from "@/libs/weather-info";
import Image from "next/image";
import Card from "./Card";

const AQI = async ({ lat, lon }) => {
  const { main, components } = await getAqiData(lat, lon);
  const getAQIRating = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very poor";
    }
  };
  return (
    <>
      <Card>
        <h6 className="feature-name">Air Pollution & Quality</h6>
        <div className="mt-3 space-y-2 lg:space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={200}
                height={200}
              />
              Air Quality Index
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {getAQIRating(main?.aqi)}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={200}
                height={200}
              />
              Carbon Monoxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.co} µg/m³
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={200}
                height={200}
              />
              Nitric Oxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.no} ppm
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={200}
                height={200}
              />
              Nitrogen Dioxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.no2} ppm
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={200}
                height={200}
              />
              Ozone
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.o3} µg/m³
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={200}
                height={200}
              />
              Sulfur Dioxide
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.so2} ppm
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
              <Image
                className="max-w-[18px]"
                src="/assets/icons/icon_air_element.png"
                alt="icon"
                width={200}
                height={200}
              />
              PM2.5
            </div>
            <span className="text-right text-sm text-white lg:text-base">
              {components?.pm2_5} µg/m³
            </span>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AQI;