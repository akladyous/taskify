"use client";

import { useCallback } from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return (
    <Button className="rounded-full" variant="outline" size="icon" onClick={toggleTheme}>
      {/*
        <SunIcon className=' scale-100 transition-all  dark:scale-0' size={25} />
        <MoonIcon className='scale-0   transition-all  dark:scale-100 absolute' size={25} />
        <span className='sr-only'>Toggle theme</span>
      */}
      {theme === "dark" ? <SunIcon size={25} /> : <MoonIcon size={25} />}
    </Button>
  );
}
