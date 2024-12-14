"use client";
import { getLocationLatLongList } from "@/libs/location-info";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationSwitcher = () => {
  const [show, setShow] = useState(false);
  const [locations, setLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    const getLocationList = async () => {
      const getList = await getLocationLatLongList();
      setLocations(getList);
      setFilteredLocations(getList);
    };
    getLocationList();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredLocations(locations);
    } else {
      setFilteredLocations(
        locations.filter((location) =>
          location.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, locations]);

  return (
    <>
      <div className="relative">
        <button onClick={() => setShow(!show)}>
          <Image
            className="size-9"
            src="/assets/icons/search.svg"
            alt="search icon"
            width={200}
            height={200}
          />
        </button>
        {show && (
          <div className="absolute left-0 top-12 z-[999] w-full min-w-[150px] max-h-[300px] overflow-y-auto rounded-md bg-slate-600 shadow opacity-90">
            <input
              type="text"
              placeholder="Search location"
              className="w-full p-2 text-black rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul role="list" className="divide-y divide-gray-100">
              {filteredLocations?.map((location) => (
                <li key={location.id}>
                  <Link
                    href={`/${location.location}?latitude=${location.latitude}&longitude=${location.longitude}`}
                    className="block text-white hover:text-green-400 hover:bg-slate-500 p-2"
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
