import Image from "next/image";
import React from "react";
import { useState } from "react";
import Logo from "../../../../public/logo.png";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="w-full px-6 h-[100px] flex items-center justify-between bg-white drop-shadow-lg fixed top-0 left-0">
      <Image src={Logo} alt="Lang Learn" className="max-w-[307px]" />
      <div
        className="w-[100px] h-[100px] flex flex-col justify-center items-center gap-[16px] relative z-20"
        onClick={toggleNav}
      >
        <span
          className={
            !navOpen
              ? "inline-block w-[60px] border-t-4 border-gray-500 rounded-lg transition-all duration-300"
              : "inline-block w-[60px] border-t-4 border-gray-500 rounded-lg transition-all duration-300 rotate-45 translate-y-[18px]"
          }
        ></span>
        <span
          className={
            !navOpen
              ? "inline-block w-[60px] border-t-4 border-gray-500 rounded-lg transition-all duration-300"
              : "opacity-0 transition-all duration-300"
          }
        ></span>
        <span
          className={
            !navOpen
              ? "inline-block w-[60px] border-t-4 border-gray-500 rounded-lg transition-all duration-300"
              : "inline-block w-[60px] border-t-4 border-gray-500 rounded-lg transition-all duration-300 rotate-[-45deg] translate-y-[-18px]"
          }
        ></span>
      </div>
      {/* // TODO: Navエリアを表示させる・Navの横半分をブラーさせる*/}
      <ul
        className={
          !navOpen
            ? "w-1/2 h-fit absolute z-10 right-0 translate-x-[100vw] transition-all duration-300"
            : "w-1/2 h-fit absolute z-10 right-0 translate-x-0 transition-all duration-300"
        }
      >
        <li>HOME</li>
        <li>How to Use</li>
        <li>My Page</li>
      </ul>
    </header>
  );
};
