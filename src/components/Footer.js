import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] h-[200px] flex justify-center flex-col items-center">
        <div>
          <h1 className="font-sans font-medium">ingenuITy</h1>
        </div>
        <ul className="flex gap-8  text-2xl mt-5">
          <a
            href="https://www.instagram.com/ingenuity.sicet/"
            className="hover:scale-110 duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:ingenuitysicet@gmail.com"
            className="hover:scale-110 duration-200"
          >
            <IoMdMail />
          </a>
          <a
            href="https://ingenuitysicet.netlify.app/"
            className="hover:scale-110 duration-200"
          >
            <BsBrowserEdge />
          </a>
        </ul>
        <h1 className="font-sans mt-10 text-xs">
          Designed & Developed by{" "}
          <a
            className="font-bold underline  font-sans"
            href="https://pranaygoud01.github.io/portfolio/"
          >
            Pranay
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
