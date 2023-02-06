import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-slate-600 text-white">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Chat with Rakib</a>
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