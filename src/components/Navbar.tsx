"use client";

import {NAV_ITEMS} from "@/constants/NAV_LINKS";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import {useEffect, useState} from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolledStyle =
    "bg-opacity-80 text-primaryColor backdrop-blur-2xl z-10 dark:bg-primaryColor dark:bg-opacity-70 dark:bg-blend-overlay dark:backdrop-blur-xl";

  return (
    <>
      <nav
        className={`bg-blue-400 text-secondaryColor py-8 px-12 bottom-shadow dark:bg-secondaryColor sticky top-0 dark:text-black mobile:p-0  min-w-full ${
          isScrolled ? scrolledStyle : null
        }`}>
        <div
          className="flex items-center justify-between text-secondaryColor dark:text-secondaryColor
          ">
          <h1 className="font-extrabold text-3xl block p-4 font-jalnan dark:text-primaryColor">
            <Link href="/">
              <span>SEJU.BLOG</span>
              <span className="text-sm font-light pl-2 ">기술 블로그</span>
            </Link>
          </h1>
          <ul className="flex items-center justify-center gap-4   text-opacity-65">
            {NAV_ITEMS.map(({name, href}) => (
              <li
                key={name}
                className="hover:scale-110 delay-75 ease-in-out transition-transform dark:text-primaryColor">
                <Link href={href}>{name}</Link>
              </li>
            ))}
            <DarkModeButton />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
