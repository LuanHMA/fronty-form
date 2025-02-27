import {
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "../assets/logo-white.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-neutral-900 text-white w-full py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo e descrição */}
        <div>
          <Image src={Logo} alt="Logo Fronty" className="w-52" />
          <p className="mt-4 text-sm sm:text-base font-semibold text-neutral-200">
            Faça parceria conosco e veja seu negócio decolar!
          </p>
          <p className="mt-2 text-sm sm:text-base text-neutral-200">
            Torne-se parceiro da Fronty Digital e tenha acesso a suporte
            personalizado, preços competitivos e entrega rápida. Nosso objetivo
            é entregar as melhores soluções e ferramentas para você alavancar
            seu negócio e alcançar o sucesso.
          </p>
          <p className="mt-4 text-sm sm:text-base text-neutral-200">
            FrontyDigital 2025 © Todos os direitos reservados
          </p>
        </div>

        {/* Sobre a empresa */}
        <div className="space-y-3">
          <h3 className="text-lg overflow-hidden sm:text-xl font-bold text-white bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max hover:shadow-[0px_10px_25px_0px_#0083fb] hover:translate-y-[-5px]">
            Sobre a empresa
          </h3>
          <p className="font-semibold">FRONTY DIGITAL LTDA</p>
          <p className="text-sm sm:text-base text-neutral-200">CNPJ:</p>
          <p className="text-sm sm:text-base text-neutral-200">
            Inscrição Estadual MG:
          </p>
        </div>

        {/* Central de atendimento */}
        <div className="space-y-3">
          <h3 className="text-lg overflow-hidden sm:text-xl font-bold text-white bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max hover:shadow-[0px_10px_25px_0px_#0083fb] hover:translate-y-[-5px]">
            Central de atendimento
          </h3>
          <p className="flex items-center  space-x-2">
            <Phone size={28} className="text-[#0083FB]" />{" "}
            <span>(35) 3212 6887</span>
          </p>
          <p className="flex items-center space-x-2">
            <WhatsappLogo size={28} className="text-[#0083FB]" />{" "}
            <span>(35) 99812 3073</span>
          </p>
          <p className="flex items-center space-x-2">
            <EnvelopeSimple size={28} className="text-[#0083FB]" />{" "}
            <span>suportefronty@gmail.com</span>
          </p>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg overflow-hidden sm:text-xl font-bold text-white bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max hover:shadow-[0px_10px_25px_0px_#0083fb] hover:translate-y-[-5px]">
            Redes sociais
          </h3>
          <p className="mt-3 flex gap-2 items-center space-x-2">
            <InstagramLogo size={28} className="text-[#0083FB]" /> Instagram
          </p>
          <p className="mt-3 flex gap-2 items-center space-x-2">
            <YoutubeLogo size={28} className="text-[#0083FB]" /> Youtube
          </p>
        </div>
      </div>
    </footer>
  );
}
