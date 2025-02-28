"use client";

import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logo-white.png";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Header() {
  return (
    <header
      className={`w-[95%] max-w-4xl h-20 flex justify-start items-center z-[99] mx-auto bg-transparent shadow-none`}
    >
      <div className="w-full flex items-center justify-center sm:justify-between p-2 sm:px-5 sm:py-4">
    
          <Image src={Logo} alt="Logo Fronty" className="w-40 mt-2" />

        <nav className="sm:flex hidden">
          <ul className={"flex items-center gap-8"}>
            <li>
              <a
                className={`text-sm transition-all duration-500 font-medium hover:cursor-fronty-pointer  text-blue-600 `}
                href="#"
              >
                Início
              </a>
            </li>

            <li>
              <a
                className={`text-sm transition-all duration-500 font-medium hover:cursor-fronty-pointer  text-blue-600 `}
                href=""
              >
                Nossos serviços
              </a>
            </li>

            <li>
              <a
                className={`text-sm transition-all duration-500 font-medium hover:cursor-fronty-pointer  text-blue-600 `}
                href=""
              >
                Quem somos
              </a>
            </li>

            <li>
              <a
                className={`text-sm transition-all duration-500 font-medium hover:cursor-fronty-pointer  text-blue-600 `}
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
