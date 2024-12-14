"use client";
import Loader from "@/components/Loader";

export default function LoadingWeather() {
  return (
    <>
      <div
        className="col-span-12 lg:col-span-4 2xl:col-span-3 bg-[#293A4E] py-2 px-5 text-white 
      rounded-2xl flex items-center justify-center"
      >
        <Loader name={"Weather"} />
      </div>
    </>
  );
}
