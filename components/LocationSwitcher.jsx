"use client";
import { getLocationLatLongList } from "@/libs/location-info";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationSwitcher = () => {
  const [show, setShow] = useState(false);
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getLocationList = async () => {
      const getList = await getLocationLatLongList();
      setLocations(getList);
    };
    getLocationList();
  }, []);
  return (
    <>
      <div className="relative">
        <button onClick={() => setShow(!show)}>
          <Image
            className="size-9"
            src="/assets/icons/link.svg"
            alt="link icon"
            width={200}
            height={200}
          />
        </button>
        {show && (
          <div className="absolute left-0 top-12 z-[999] w-full min-w-[150px] rounded-md bg-slate-600  shadow opacity-90">
            <ul role="list" className="divide-y divide-gray-100 ">
              {locations?.map((location) => (
                <li
                  key={location.id}
                  className="text-white hover:text-green-400 hover:bg-slate-500 p-2"
                >
                  <Link
                    href={`/${location.location}?latitude=${location.latitude}&longitude=${location.longitude}`}
                  >
                    {location.bn_location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LocationSwitcher;
