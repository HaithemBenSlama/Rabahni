import React from "react";
import Image1 from "../public/image1.png"; // Import your PNG image
import Image from "next/image";

const Step = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-600">
      <h1 className="text-5xl font-extrabold text-white my-20">
        How it Works ?
      </h1>

      <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-4xl border-gray-700 bg-gray-800 mb-14 px-10 m-5">
        <Image
          className="p-5 object-cover h-1/2 w-1/2 md:h-auto md:w-48 md:rounded-none"
          src={Image1}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-4xl border-gray-700 bg-gray-800 mb-14 px-10 m-5">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        <Image
          className="p-5 object-cover h-1/2 w-1/2 md:h-auto md:w-48 md:rounded-none"
          src={Image1}
          alt=""
        />
      </div>

      <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-4xl border-gray-700 bg-gray-800 mb-14 px-10 m-5">
        <Image
          className="p-5 object-cover h-1/2 w-1/2 md:h-auto md:w-48 md:rounded-none"
          src={Image1}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step;
