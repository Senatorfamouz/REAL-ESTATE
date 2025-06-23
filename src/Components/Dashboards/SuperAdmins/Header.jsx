import React, { useEffect, useState } from 'react';
import { FiLogOut, FiMaximize } from 'react-icons/fi';
import { FaRegQuestionCircle, FaUserCircle } from 'react-icons/fa';
import { IoMoonOutline, IoSearchSharp, IoSunnyOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import profile from '../../../assets/dash logo.jpg';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const dropdownRef = React.useRef(null);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // System theme change listener
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setDarkMode(mediaQuery.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-4 bg-white fixed shadow-sm pc:w-[85%] w-full  dark:bg-gray-800 transition-colors duration-200">
      {/* Left section - hamburger and search */}
      <div className="flex items-center gap-4 sm:gap-6 ml-2 sm:ml-5">
        <button 
          className="text-gray-600 hover:scale-110 transition duration-150 dark:text-gray-300"
          aria-label="Menu"
        >
          <RxHamburgerMenu className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Search bar - visible on sm screens and up */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search Properties"
            className="pl-10 pr-4 py-2 rounded-md bg-gray-100 text-sm text-black focus:outline-none focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all duration-200 dark:bg-gray-700 dark:text-white dark:focus:bg-gray-600 dark:focus:ring-amber-500 w-full sm:w-64"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            <IoSearchSharp className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
        </div>
      </div>

      {/* Right section - icons and profile */}
      <div className="flex items-center gap-3 sm:gap-4 relative" ref={dropdownRef}>
        {/* Theme toggle button - responsive and accessible */}
        <button 
          onClick={toggleTheme}
          className="p-1.5 rounded-full hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <IoSunnyOutline className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
          ) : (
            <IoMoonOutline className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Fullscreen - hidden on mobile */}
        <button 
          className="hidden sm:flex p-1.5 rounded-full hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-600 dark:text-gray-300"
          aria-label="Fullscreen"
        >
          <FiMaximize className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Notification - with badge */}
        <button 
          className="p-1.5 rounded-full hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-600 dark:text-gray-300 relative"
          aria-label="Notifications"
        >
          <RiNotification3Line className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings - hidden on mobile */}
        <button 
          className="hidden sm:flex p-1.5 rounded-full hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-600 dark:text-gray-300"
          aria-label="Settings"
        >
          <MdOutlineSettings className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Profile dropdown */}
        <div className="relative ml-1 sm:ml-0">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="focus:outline-none"
            aria-label="Profile menu"
            aria-expanded={dropdownOpen}
          >
            <img
              src={profile}
              alt="Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-transparent hover:border-amber-300 dark:hover:border-gray-500 transition-all duration-200"
            />
          </button>
          
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 dark:bg-gray-800 dark:border-gray-700 transition-all duration-200">
              <a 
                href="/profile" 
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaUserCircle className="mr-2" /> My Profile
              </a>
              <a 
                href="/settings" 
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <MdOutlineSettings className="mr-2" /> Settings
              </a>
              <a 
                href="/support" 
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaRegQuestionCircle className="mr-2" /> Help & Support
              </a>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              <button
                onClick={() => {
                  alert("Logging out...");
                  setDropdownOpen(false);
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FiLogOut className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;