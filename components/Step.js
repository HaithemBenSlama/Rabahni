import React from "react";
import Binance from "../public/binance.png";
import Generate from "../public/generate.png";
import Image from "next/image";
import Verify from "../public/verify.png";
import Proofs from "../public/screenshot.png";
import { useState } from "react";

const Step = () => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [message, setMessage] = useState();

  const generateAccount = async () => {
    let storedAccount = JSON.parse(localStorage.getItem("userAccount"));

    if (storedAccount) {
      setMessage(1);
      setAccountInfo(storedAccount);
    } else {
      const response = await fetch("/api/getAccount");
      const data = await response.json();

      if (response.ok) {
        storedAccount = data.account;
        localStorage.setItem("userAccount", JSON.stringify(storedAccount));
        setAccountInfo(storedAccount);
        setMessage(0);
      } else {
        setMessage(2);
      }
    }
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

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

          <p className="mb-3 text-gray-400">
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
            className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-100"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Alert !</span> The account will be
              generated one time. So save the information
            </div>
          </div>
          <p className="mb-3 text-gray-400">
            Clicking on "Generate Account" button will initiate the process of
            creating a unique and secure account for you.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={generateAccount}
          >
            Generate Account
          </button>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className=" border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="exemple@gmail.com"
                readOnly
                value={accountInfo?.email || ""}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>

              <div className="relative w-full container">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="•••••••"
                  id="password"
                  className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  readOnly
                  value={accountInfo?.password || ""}
                />

                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {message === 0 ? (
            <div
              class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 "
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
                <span class="font-medium">Success!</span> Account generated
                successfully.
              </div>
            </div>
          ) : message === 1 ? (
            <div
              class="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50"
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
                <span class="font-medium">Warning!</span> You've already
                generated an account.
              </div>
            </div>
          ) : message === 2 ? (
            <div
              class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
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
                <span class="font-medium">Sorry!</span> No accounts available.
              </div>
            </div>
          ) : null}
        </div>
        <Image
          className="object-cover mt-5 hidden md:block md:my-7 rounded-lg md:ml-5 h-52 w-64 md:h-auto md:w-80 md:rounded-lg"
          src={Generate}
          alt=""
        />
      </div>

      <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-4xl border-gray-700 bg-gray-800 mb-14 m-5">
        <Image
          className="object-cover mt-5 md:my-5 rounded-lg md:ml-5 h-48 w-60 md:h-64 md:w-72  md:rounded-lg"
          src={Verify}
          alt=""
        />
        <div className="flex flex-col justify-between p-10 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            - Step 3 -
          </h5>
          <p className="mb-3 font-bold text-gray-300">
            Verify the account with your CIN - Paasport - Permit
          </p>

          <p className="mb-3 text-gray-400">
            After opening the designated account within the Binance app on your
            phone, you will need to provide accurate and authentic information
            about yourself. This includes your personal details such as your
            name, date of birth, and address. To complete the verification
            process, you will be required to provide a valid form of
            identification, which can be your CIN (Customer Identification
            Number), passport, or driver's permit. This step is essential as it
            helps Binance verify your identity and comply with regulatory
            requirements
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-4xl border-gray-700 bg-gray-800 mb-14 px-10 m-5">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <Image
            className="object-cover mt-5 mb-10 md:hidden md:my-7 rounded-lg md:ml-5 h-60 w-64 md:h-auto md:w-80 md:rounded-lg"
            src={Proofs}
            alt=""
          />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            - Step 4 -
          </h5>

          <p className="mb-3 font-bold text-gray-300">
            Send verification proof
          </p>
          <p className="mb-3 text-gray-400">
            After successfully verifying your Binance account, the next step is
            to send verification proof via an Upwork message. Attach screenshots
            showcasing your confirmed account status, ensuring transparency.
            Remember to share your USDT address for the impending money
            transfer, which is anticipated to be completed within a 12-hour
            timeframe.
          </p>
        </div>
        <Image
          className="object-cover mt-5 hidden md:block md:my-7 rounded-lg md:ml-5 h-52 w-64 md:h-auto md:w-80 md:rounded-lg"
          src={Proofs}
          alt=""
        />
      </div>
    </div>
  );
};

export default Step;
