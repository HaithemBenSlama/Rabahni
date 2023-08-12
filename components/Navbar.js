import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav class="border-gray-200 bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <FcMoneyTransfer className="w-10 h-10 mr-5" />
          <span class="self-center text-2xl font-semibold italic whitespace-nowrap text-white">
            EasyMoney
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
