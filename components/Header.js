import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsFillSunFill
          size={18}
          className="mx-2 md:mx-5"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsFillMoonFill
          size={18}
          className="mx-2 md:mx-5"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="text-alabaster-50 shadow w-full bg-shark-500">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image src="/images/logo.png" width={40} height={40} alt="logo" />
            <span className="ml-3 text-xl">Brand Name</span>
          </a>
        </Link>

        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto ">
          <Link href="/">
            <a className="mx-2 md:mx-5 cursor-pointer uppercase title-font font-medium">
              1
            </a>
          </Link>
          <Link href="/">
            <a className="mx-2 md:mx-5 cursor-pointer uppercase title-font font-medium ">
              2
            </a>
          </Link>
          <Link href="/">
            <a className="mx-2 md:mx-5 cursor-pointer uppercase title-font font-medium ">
              3
            </a>
          </Link>

          {renderThemeChanger()}
        </nav>
      </div>
    </header>
  );
}
