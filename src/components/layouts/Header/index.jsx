import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Logo from "../../../../public/logo.png";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const closeNav = () => {
    if (navOpen) {
      setNavOpen(false);
    }
  };
  const clickLinkHandler = () => {
    setTimeout(() => {
      closeNav();
    }, 1000);
  };

  return (
    <header className="w-full px-6 h-[70px] flex items-center justify-between bg-white drop-shadow-lg fixed top-0 left-0 z-[9999]">
      <Image src={Logo} alt="Lang Learn" className="max-w-[180px]" />
      <div
        className="w-[100px] h-[100px] flex flex-col justify-center items-center gap-[10px] relative z-20 cursor-pointer"
        onClick={toggleNav}
      >
        <span
          className={
            !navOpen
              ? "inline-block w-[40px] border-t-4 border-gray-500 rounded-lg transition-all duration-300"
              : "inline-block w-[40px] border-t-4 border-gray-500 rounded-lg transition-all duration-300 rotate-45 translate-y-[12px]"
          }
        ></span>
        <span
          className={
            !navOpen
              ? "inline-block w-[40px] border-t-4 border-gray-500 rounded-lg transition-all duration-300"
              : "opacity-0 transition-all duration-300"
          }
        ></span>
        <span
          className={
            !navOpen
              ? "inline-block w-[40px] border-t-4 border-gray-500 rounded-lg transition-all duration-300"
              : "inline-block w-[40px] border-t-4 border-gray-500 rounded-lg transition-all duration-300 rotate-[-45deg] translate-y-[-12px]"
          }
        ></span>
      </div>
      <ul
        className={
          !navOpen
            ? "w-full h-screen absolute top-0 z-10 right-0 translate-x-[100vw] transition-all duration-300 flex flex-col items-center justify-center bg-gray-300 gap-6 pb-[10%]"
            : "w-full h-screen absolute top-0 z-10 right-0 translate-x-0 transition-all duration-300 flex flex-col items-center justify-center bg-gray-300 gap-6 pb-[10%]"
        }
      >
        <Link href="/" onClick={clickLinkHandler}>
          <li className="p-3 pb-4 rounded-xl text-3xl font-bold hover:text-5xl hover:bg-white hover:p-5 hover:pb-6 transition-all duration-200 hover:rotate-12 hover:text-orange-400 active:before:content-['/'] active:before:absolute active:before:text-orange-400 active:before:right-0 active:before:top-[-10px] active:before:text-2xl">
            Home
          </li>
        </Link>
        <Link href="/how-to-use" onClick={clickLinkHandler}>
          <li className="p-3 pb-4 rounded-xl text-3xl font-bold hover:text-5xl hover:bg-white hover:p-5 hover:pb-6 transition-all duration-200 hover:rotate-[-12deg] hover:text-blue-400">
            How to Use
          </li>
        </Link>
        <Link href="/mypage" onClick={clickLinkHandler}>
          <li className="p-3 pb-4 rounded-xl text-3xl font-bold hover:text-5xl hover:bg-white hover:p-5 hover:pb-6 transition-all duration-200 hover:rotate-12 hover:text-green-400">
            My Page
          </li>
        </Link>
      </ul>
    </header>
  );
};
