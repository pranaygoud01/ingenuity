import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-screen h-[80px] flex justify-center">
      <div className="max-w-[1440px] max-md:w-screen flex justify-around max-md:justify-between  w-full h-full">
        <div className="flex justify-center max-md:mx-3 items-center">
          <img
            src={logo}
            className="h-[60px] w-[60px] object-cover "
            alt="logo"
          />
          <h1 className="font-semibold text-xl flex font-sans">
            ingenu<p className="text-red-500 font-sans">IT</p>y
          </h1>
        </div>
        <div className="flex max-md:mx-8  justify-center items-center">
          <a
            href="mailto:ingenuitysicet@gmail.com"
            className="font-semibold font-sans py-2 px-4 text-sm text-white rounded-md bg-black"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
