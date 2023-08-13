import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <FcMoneyTransfer className="w-10 h-10 mr-5" />
          <span className="self-center text-2xl font-semibold italic whitespace-nowrap text-white">
            EasyMoney
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
