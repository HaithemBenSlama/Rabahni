import React from "react";
import Image1 from "../public/image1.png";
import Binance from "../public/binance.png";
import Generate from "../public/generate.png";
import Image from "next/image";

const Step = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-600 text-white min-h-screen">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white my-10 md:my-15">
        How it Works ?
      </h1>

      <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-4xl border-gray-700 bg-gray-800 mb-14 m-5">
        <Image
          className="object-cover mt-5 md:mt-0 rounded-lg md:ml-5 h-52 w-64 md:h-auto md:w-80 md:rounded-lg"
          src={Binance}
          alt=""
        />
        <div className="flex flex-col justify-between p-10 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            - Step 1 -
          </h5>
          <p className="mb-3 font-bold text-gray-300">
            Install Binance on your Phone
          </p>

          <p class="mb-3 text-gray-400">
            Binance is one of the world's largest cryptocurrency exchanges,
            providing a platform for trading a wide variety of cryptocurrencies.
            It was founded in 2017 by Changpeng Zhao (CZ) and has since become
            one of the most prominent and influential players in the
            cryptocurrency industry.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-4xl border-gray-700 bg-gray-800 mb-14 px-10 m-5">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            - Step 2 -
          </h5>
          <p className="mb-3 font-bold text-gray-300">
            Generate your free binance account
          </p>

          <p class="mb-3 text-gray-400">
            Binance is one of the world's largest cryptocurrency exchanges,
            providing a platform for trading a wide variety of cryptocurrencies.
            It was founded in 2017 by Changpeng Zhao (CZ) and has since become
            one of the most prominent and influential players in the
            cryptocurrency industry.
          </p>
        </div>
        <Image
          className="object-cover mt-5 md:my-7 rounded-lg md:ml-5 h-52 w-64 md:h-auto md:w-80 md:rounded-lg"
          src={Generate}
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
