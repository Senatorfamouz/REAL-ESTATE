import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp, IoMoonOutline } from "react-icons/io5";
import { FiMaximize } from 'react-icons/fi';
import { RiNotification3Line } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import profile from '../../../assets/dash logo.jpg';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-amber-50 shadow-sm rounded-t-2xl">
        {/* hamburger and search bar */}
      <div className="flex items-center gap-3">
        <button className="text-gray-600 hover:scale-120 transition duration-150">
          <RxHamburgerMenu className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* sm and upward */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search Properties"
            className="pl-10 pr-4 py-2 rounded-md bg-gray-300 text-sm text-black focus:outline-none"
          />
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black">
            <IoSearchSharp className="w-5 h-5" />
          </span>
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button className="text-gray-600 hover:scale-120 transition duration-150">
          <IoMoonOutline className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

        {/* Fullscreen */}
        <button className="text-gray-600 hover:scale-120 transition duration-150 hidden sm:inline-block">
          <FiMaximize className="w-6 h-6" />
          </button>

        {/* Notification */}
        <button className="text-gray-600 hover:scale-120 transition duration-150">
            <RiNotification3Line className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

        {/* Settings */}
        <button className="text-gray-600 hover:scale-120 transition duration-150 hidden sm:inline-block">
          <MdOutlineSettings className="w-6 h-6" />
          </button>

        {/* Profile image */}
        <img
          src={profile}
          alt="Profile"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover hover:cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;