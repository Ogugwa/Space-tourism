import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="p-4 pt-4 flex justify-between items-center relative max-w-full">
      {/* Logo */}
      <img src="/assets/shared/logo.svg" alt="logo" className="w-12 h-12" />

      {/* Divider */}
      <hr className="hidden lg:block flex-1 border-t border-white opacity-40 mx-6" />

      {/* Desktop links */}
      <ul className="hidden md:flex md:justify-evenly md:pl-4 w-3xl md:text-white uppercase tracking-widest shadow-lg h-24 items-center bg-opacity-20 backdrop-blur-md">
        <li><a href="/">00 Home</a></li>
        <li><a href="/destination">01 Destination</a></li>
        <li><a href="/crew">02 Crew</a></li>
        <li><a href="/technology">03 Technology</a></li>
      </ul>

      {/* Hamburger / Close (mobile only) */}
      <button
        onClick={toggleMenu}
        className="md:hidden cursor-pointer z-50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <img
            src="/assets/shared/icon-close.svg"
            alt="close menu"
            className="w-6 h-6"
          />
        ) : (
          <img
            src="/assets/shared/icon-hamburger.svg"
            alt="hamburger icon"
            className="w-6 h-6"
          />
        )}
      </button>

      {/* SLIDING MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white/10 backdrop-blur-xl text-white flex flex-col p-8 transform transition-transform duration-500 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6 uppercase tracking-widest text-lg mt-12">
          <li><a href="/" >00 Home</a></li>
          <li><a href="/destination" >01 Destination</a></li>
          <li><a href="/crew" >02 Crew</a></li>
          <li><a href="/technology" >03 Technology</a></li>
        </ul>
      </div>
    </nav>
  );
}
