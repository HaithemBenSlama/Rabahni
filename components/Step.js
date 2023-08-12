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
          <Image
            className="object-cover mt-5 mb-10 md:hidden md:my-7 rounded-lg md:ml-5 h-60 w-64 md:h-auto md:w-80 md:rounded-lg"
            src={Generate}
            alt=""
          />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            - Step 2 -
          </h5>

          <p className="mb-3 font-bold text-gray-300">
            Generate your free binance account
          </p>
          <div
            class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-100"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Alert !</span> The account will be
              generated one time. So save the information
            </div>
          </div>
          <p class="mb-3 text-gray-400">
            Clicking on "Generate Account" button will initiate the process of
            creating a unique and secure account for you.
          </p>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Generate Account
          </button>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                class=" border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="exemple@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
        </div>
        <Image
          className="object-cover mt-5 hidden md:block md:my-7 rounded-lg md:ml-5 h-52 w-64 md:h-auto md:w-80 md:rounded-lg"
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
