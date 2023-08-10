import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import Logo from '../../../../public/logo.png';

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
    <header className="fixed left-0 top-0 z-[9999] flex h-[70px] w-full items-center justify-between bg-white px-6 drop-shadow-lg">
      <Image src={Logo} alt="Lang Learn" className="max-w-[180px]" />
      <div
        className="relative z-20 flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center gap-[10px]"
        onClick={toggleNav}
      >
        <span
          className={
            !navOpen
              ? 'inline-block w-[40px] rounded-lg border-t-4 border-gray-500 transition-all duration-300'
              : 'inline-block w-[40px] translate-y-[12px] rotate-45 rounded-lg border-t-4 border-gray-500 transition-all duration-300'
          }
        ></span>
        <span
          className={
            !navOpen
              ? 'inline-block w-[40px] rounded-lg border-t-4 border-gray-500 transition-all duration-300'
              : 'opacity-0 transition-all duration-300'
          }
        ></span>
        <span
          className={
            !navOpen
              ? 'inline-block w-[40px] rounded-lg border-t-4 border-gray-500 transition-all duration-300'
              : 'inline-block w-[40px] translate-y-[-12px] rotate-[-45deg] rounded-lg border-t-4 border-gray-500 transition-all duration-300'
          }
        ></span>
      </div>
      <ul
        className={
          !navOpen
            ? 'absolute right-0 top-0 z-10 flex h-screen w-full translate-x-[100vw] flex-col items-center justify-center gap-6 bg-gray-300 pb-[10%] transition-all duration-300'
            : 'absolute right-0 top-0 z-10 flex h-screen w-full translate-x-0 flex-col items-center justify-center gap-6 bg-gray-300 pb-[10%] transition-all duration-300'
        }
      >
        <Link href="/" onClick={clickLinkHandler}>
          <li className="rounded-xl p-3 pb-4 text-3xl font-bold transition-all duration-200 hover:rotate-12 hover:bg-white hover:p-5 hover:pb-6 hover:text-5xl hover:text-orange-400 active:before:absolute active:before:right-0 active:before:top-[-10px] active:before:text-2xl active:before:text-orange-400 active:before:content-['/']">
            Home
          </li>
        </Link>
        <Link href="/how-to-use" onClick={clickLinkHandler}>
          <li className="rounded-xl p-3 pb-4 text-3xl font-bold transition-all duration-200 hover:rotate-[-12deg] hover:bg-white hover:p-5 hover:pb-6 hover:text-5xl hover:text-blue-400">
            How to Use
          </li>
        </Link>
        <Link href="/mypage" onClick={clickLinkHandler}>
          <li className="rounded-xl p-3 pb-4 text-3xl font-bold transition-all duration-200 hover:rotate-12 hover:bg-white hover:p-5 hover:pb-6 hover:text-5xl hover:text-green-400">
            My Page
          </li>
        </Link>
      </ul>
    </header>
  );
};
