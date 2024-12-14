"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const LocationDetectorContent = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [searchParams, path, router]);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-slate-700 text-white">
        {loading && (
          <>
            <Image
              unoptimized
              src="/assets/icons/network.gif"
              alt="Loading..."
              height={500}
              width={500}
              className="border rounded-md my-4"
            />
            <p className="text-4xl text-center">Detecting Location...</p>
          </>
        )}
      </div>
    </>
  );
};

const LocationDetector = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LocationDetectorContent />
    </Suspense>
  );
};
export default LocationDetector;
