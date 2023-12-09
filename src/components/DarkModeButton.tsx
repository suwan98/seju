"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {MdSunny} from "react-icons/md";
import {IoMdMoon} from "react-icons/io";

function DarkModeButton() {
  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <button
          type="button"
          className="p-2 delay-75 ease-in-out text-yellow-400  text-center"
          onClick={() => setTheme("light")}>
          <MdSunny size={24} />
        </button>
      ) : (
        <button
          type="button"
          className="p-2 delay-75 ease-in-out text-yellow-400 text-center"
          title="Toggle dark mode"
          aria-label="Toggle theme"
          onClick={() => setTheme("dark")}>
          <IoMdMoon size={24} />
        </button>
      )}
    </>
  );
}

export default DarkModeButton;
