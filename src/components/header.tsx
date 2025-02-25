"use client";

import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logo-white.png";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-[95%] max-w-4xl z-[99] mx-auto mt-4 fixed top-0 p-5 transition-all rounded-2xl duration-700 ease-out ${isScrolling ? "bg-gradient-to-r from-blue-600 to-blue-500 shadow-2xl" : "bg-transparent shadow-none"}`}
    >
      <div className="flex items-center justify-center sm:justify-between px-2">
        {isScrolling ? (
          <Image src={LogoWhite} alt="Logo Fronty" className="w-40 mt-2" />
        ) : (
          <Image src={Logo} alt="Logo Fronty" className="w-40 mt-2" />
        )}

        <nav className="sm:flex hidden">
          <ul className={"flex items-center gap-8"}>
            <li>
              <a
                className={`text-sm transition-all duration-500 font-medium hover:cursor-fronty-pointer  ${isScrolling ? "text-white" : "text-blue-500"}`}
                href="#"
              >
                Início
              </a>
            </li>

            <li>
              <a
                className={`text-sm transition-all duration-500 font-medium hover:cursor-fronty-pointer  ${isScrolling ? "text-white" : "text-blue-500"}`}
                href=""
              >
                Nossos serviços
              </a>
            </li>

            <li>
              <a
                className={`text-sm transition-all duration-500 font-medium hover:cursor-fronty-pointer  ${isScrolling ? "text-white" : "text-blue-500"}`}
                href=""
              >
                Quem somos
              </a>
            </li>

            <li>
              <a
                className={`text-sm transition-all duration-500 font-medium hover:cursor-fronty-pointer  ${isScrolling ? "text-white" : "text-blue-500"}`}
                href=""
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
