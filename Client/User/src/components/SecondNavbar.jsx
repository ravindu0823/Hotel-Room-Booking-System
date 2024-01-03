import React, { useState } from 'react';

const SecondNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-white border-gray-200 py-3.5 dark:bg-gray-900 h-55">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          {/* Your logo or brand */}
        </a>
        <div className="flex items-center lg:order-2">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              // Icon for close or hide menu
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icon for open or show menu
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`items-center w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 mt-5">
            <li>
            <a href="/" onClick={() => setNav(false)} className="text-xl text-bold block py-2 pl-3 pr-4 text-black rounded lg:bg-transparent lg:text-black lg:p-0 dark:text-black" aria-current="page"  >
                Home

              </a>
            </li>
            <li>
            <a href="/" onClick={() => setNav(false)}  className="text-xl text-bold block py-2 pl-3 pr-4 text-black  rounded lg:bg-transparent lg:text-black lg:p-0  dark:text-black" aria-current="page">
                About
              </a>
            </li>
            <li>
            <a href="/" onClick={() => setNav(false)}  className="text-xl text-bold block py-2 pl-3 pr-4 text-black  rounded lg:bg-transparent lg:text-black lg:p-0 dark:text-black" aria-current="page">
                Contact Us
              </a>
            </li>
            <li>
            <a href="/profile" onClick={() => setNav(false)} className="text-xl text-bold block py-2 pl-3 pr-4 text-black  rounded lg:bg-transparent lg:text-black lg:p-0  dark:text-black" aria-current="page">
                Profile
              </a>
            </li>
            {/* Add other list items as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;
