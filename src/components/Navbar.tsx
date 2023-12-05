"use client";
import {NAV_ITEMS} from "@/constants/constants";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  return (
    <>
      <nav className="mt-10 h-16 w-full">
        <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between p-4">
          <h1 className="text-3xl font-bold">
            <Link href="/">SejuDevlog</Link>
          </h1>
          <ul className="flex items-center gap-3 md:gap-4">
            {NAV_ITEMS.map(({name, href}) => (
              <li key={name} className="relative">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
          <DarkModeButton />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
