import React from "react";
import Rakib from "../img/rakib.jpeg";
import Me from "../img/user.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-600 text-white">
        <div className="flex-1">
          <div className="avatar online ml-5">
            <div className="w-10 rounded-full ">
              <img src={Rakib} alt="Rakib" />
            </div>
          </div>
          <h1 className="btn btn-ghost normal-case text-xl">
            ChatBot Rakib 3.0
          </h1>
        </div>
        <div className="avatar mr-5">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={Me} alt="me" />
          </div>
        </div>
        <div className="flex-none lg:hidden">
          <label className="btn btn-square btn-ghost" htmlFor="my-drawer-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
