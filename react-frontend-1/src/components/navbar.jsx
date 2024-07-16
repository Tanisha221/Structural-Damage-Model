import React from "react";

function Navbar() {
  return (
    <>
      <nav
        className=" fixed bg-base-100 w-screen flex mz-1000 rounded-lg"
        data-theme="cyberpunk"
      >
        <div className="flex-1">
         
        </div>
        <div className="flex-auto px-4 mx-3 text-3xl mt-2 lg:flex f">
          <h1>CONCRETE CRACK DETECTION</h1>
        </div>

        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
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
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
