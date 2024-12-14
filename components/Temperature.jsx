import { getTemperatureData } from "@/libs/weather-info";
import Image from "next/image";
import Card from "./Card";

const Temperature = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTemperatureData(lat, lon);
  return (
    <>
      <Card>
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <div className="card">
            <h6 className="feature-name">Current Temperature</h6>
            <div className="feature-main">
              <Image
                className="max-w-20"
                src="/assets/icons/icon_tempareture.png"
                alt="rain icon"
                width={200}
                height={200}
              />
              <h3 className="feature-title">{temp}°C</h3>

              <span className="feature-name">Feels Like {feels_like}°C</span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Temperature;
