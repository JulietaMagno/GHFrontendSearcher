"use client";

import React, { useEffect, useState } from 'react'
import SunIcon from '@/components/icons/SunIcon'
import MoonIcon from './icons/MoonIcon';

const initialThemeState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return "dark";
};

const Navbar = () => {

  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState());
  console.log("antes del loading...", theme);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!hasMounted) {
    return <>Cargando...</>;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  return (
    <header className='flex items-center px-2 mb-8'>
      <h1 className='dark:text-white text-[#151E35] text-3xl font-bold flex-grow'>devfinder</h1>
      <div className='flex gap-2'>
        <span className='uppercase dark:text-white text-[#151E35]'>
          {
            theme === "light" ? "light" : "dark"
          }
        </span>
        <button onClick={handleTheme}>
          {
            theme === "light" ? 
            <SunIcon 
              className='fill-[#151E35]'
              width={20}
            />
            :
            <MoonIcon 
              className='dark:fill-white fill-[#151E35]'
              height={20}
            />
          
          }
      

        </button>
      </div>
    </header>
  )
}

export default Navbar