"use client";

import Logo from "../assets/logo.png";
import LogoWhite from "../assets/logo-white.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header
      className={`w-full max-w-4xl h-20 flex justify-start items-center z-[99] px-4 mx-auto bg-transparent shadow-none`}
    >
      <div className="w-full flex items-center justify-between p-2 sm:px-5 sm:py-4">
        <Image src={Logo} alt="Logo Fronty" className="w-32 mt-2" />

        <div className="flex items-center gap-4">
          <nav className="md:flex hidden">
            <ul className={"flex items-center gap-8"}>
              <li>
                <Link
                  className={`text-sm transition-all duration-500 font-medium hover:cursor-pointer  text-blue-600 `}
                  href="#"
                >
                  Início
                </Link>
              </li>

              <li>
                <Link
                  className={`text-sm transition-all duration-500 font-medium hover:cursor-pointer  text-blue-600 `}
                  href=""
                >
                  Nossos serviços
                </Link>
              </li>

              <li>
                <Link
                  className={`text-sm transition-all duration-500 font-medium hover:cursor-pointer  text-blue-600 `}
                  href=""
                >
                  Quem somos
                </Link>
              </li>

              <li>
                <Link
                  className={`text-sm transition-all duration-500 font-medium hover:cursor-pointer  text-blue-600 `}
                  href=""
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href={"#"}
            className="hidden sm:block text-sm tracking-wide overflow-hidden font-bold text-white bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max hover:shadow-[0px_10px_25px_0px_#0083fb] hover:translate-y-[-5px]"
          >
            Quero ser produtor
          </Link>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
