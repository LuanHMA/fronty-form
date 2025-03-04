"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLinks = [
  { label: "Início", href: "#" },
  { label: "Nossos serviços", href: "" },
  { label: "Quem somos", href: "" },
  { label: "Contato", href: "" },
];

export function MobileMenu() {
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);
  const closeMenu = () => setMenuIsOpen(false);

  return (
    <>
      <button
        className="border rounded-lg w-10 h-10 flex justify-center items-center bg-neutral-50"
        onClick={toggleMenu}
      >
        <List size={22} className="text-neutral-900 " />
      </button>

      <div
        className={`fixed inset-0 bg-neutral-900/20  z-40  ${
          menuIsOpen ? "visible" : "invisible"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`${
          menuIsOpen ? "right-0 w-8/12" : "-right-[100%] w-0"
        } ease-in-out duration-500 transition-all fixed top-0  h-screen border-l border-l-neutral-100 bg-neutral-0  z-50`}
      >
        <div
          className={`space-y-4  ${
            menuIsOpen ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        >
          <div className="flex justify-end px-4 pt-4">
            <button
              className="border rounded-lg w-10 h-10 flex justify-center items-center bg-neutral-50"
              onClick={toggleMenu}
            >
              <X size={22} className="text-neutral-900 " />
            </button>
          </div>

          <div className={`border-b border-b-neutral-100  pb-4`}>
            <h2 className="text-sm uppercase text-start px-4 pb-4 font-medium text-neutral-500 ">
              MENU
            </h2>

            <ul className="space-y-2">
              {menuLinks.map(({ label, href }) => (
                <li key={href} className={`relative group`}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 text-sm py-3 px-5  hover:bg-minera-dark-25 hover:text-minera-dark-500  translation-all
                  ${
                    pathname === href
                      ? "bg-minera-dark-25 text-minera-dark-600 font-medium"
                      : "text-minera-dark-600"
                  }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="px-4">
            <Link
              href={"#"}
              className="text-center block mt-4 w-full text-sm tracking-wide overflow-hidden font-bold text-white bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg hover:shadow-[0px_10px_25px_0px_#0083fb] hover:translate-y-[-5px]"
            >
              Quero ser produtor
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
