import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function Dark() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const darkModeHandler = () => setDark((prev) => !prev);

  return (
    <button
      onClick={darkModeHandler}
      className="rounded-full bg-gray-200 p-3 shadow-lg transition-all duration-300 dark:bg-gray-800"
      aria-label="Toggle Dark Mode"
    >
      {dark ? <IoSunny size={18} /> : <IoMoon size={18} />}
    </button>
  );
}

export default Dark;
