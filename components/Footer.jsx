import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="text-center text-white bg-slate-500">
        <Link
          href="/"
          className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
        >
          <Image
            src="/assets/icons/weather.png"
            className=" w-[50px] mr-3 sm:h-4"
            alt="Landwind Logo"
            width={200}
            height={200}
          />
          Echo Weather
        </Link>

        <span className="block text-sm text-center ">
          © 2024-2025 EchoWeather™. All Rights Reserved. Developed by &nbsp;
          <Link
            href="https://sharfuddin.com.bd"
            className="text-amber-600 fw-bold hover:underline"
            target="_blank"
          >
            Sharfuddin Ahamed.
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;
