import React from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export const Navbar = ({ items }) => {
  return (
    <nav>
      <div className="flex mx-auto justify-between w-full">
        <div className="flex items-center gap-16 m-2">
          <div>
            <a
              href="/"
              className="flex gap-4 font-bold text-gray-700 items-center "
            >
              <PaperAirplaneIcon className="h-8 w-8 text-primary text-white" />
              <span className="text-white">Super App</span>
            </a>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="hidden xs:flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-2">
              <MoonIcon className="h-6 w-6" />
              <SunIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <button>
              <Bars3Icon className="h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
