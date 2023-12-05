"use client";
import {NAV_ITEMS} from "@/constants/constants";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  return (
    <>
      <nav
        className=" p-8 dark:bg-[#f5f5f7]  bg-[#161617] dark:text-black text-white text-opacity-80
      ">
        <div className="flex items-center justify-between">
          <h1 className="font-extrabold text-3xl">
            <Link href="/">
              <span>Seju Devlog</span>
              <span className="text-sm font-light pl-2">기술 블로그</span>
            </Link>
          </h1>
          <ul className="flex items-center justify-center gap-4">
            {NAV_ITEMS.map(({name, href}) => (
              <li key={name} className=" hover:text-opacity-100">
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
