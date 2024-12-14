import Footer from "@/components/Footer";
import Image from "next/image";

export default function LayoutLocation({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <>
      <div class="wrapper">
        <div class="overlay h-full"></div>
        <Image
          src="/assets/images/background.png"
          class="bg-img h-full"
          width={700}
          height={1200}
          alt="nature-background"
        />

        <main class="!z-50 w-full">
          <div class="container">
            <div class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
              {children}
              {temperature}
              {wind}
              {weather}
              {aqi}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
