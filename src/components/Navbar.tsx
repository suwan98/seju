import {NAV_ITEMS} from "@/constants/constants";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";

function Navbar() {
  return (
    <>
      <nav className="bg-blue-400 text-secondaryColor py-8 px-12 bottom-shadow dark:bg-secondaryColor dark:text-black">
        <div className="flex items-center justify-between">
          <h1 className="font-extrabold text-3xl block p-4 font-jalnan">
            <Link href="/">
              <span>SEJU.BLOG</span>
              <span className="text-sm font-light pl-2 ">기술 블로그</span>
            </Link>
          </h1>
          <ul className="flex items-center justify-center gap-4 text-secondaryColor  text-opacity-65">
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
