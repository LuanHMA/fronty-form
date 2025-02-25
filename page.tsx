"use client"

import { BudgetForm } from "@/components/budget-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InitalForm } from "@/components/initial-form";
import { Rocket } from "@phosphor-icons/react";
import { useState } from "react";

export default function Home() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const handleSubmitted = (value: boolean) => {
    setFormIsSubmitted(value);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#E4F2FF] to-[#ffff] grid place-items-center cursor-[url(/cursor.svg),_auto] space-y-20 sm:space-y-20">
      <Header />

      <div className="min-h-[calc(100vh-490px)] grid place-items-center w-full p-4">
        {!formIsSubmitted && <InitalForm handleSubmitted={handleSubmitted} />}

        {formIsSubmitted && (
          <div className="w-full mx-auto grid place-items-center max-w-7xl space-y-10 pt-24">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-semibold md:text-4xl text-blue-500">
                Sistema Interativo e Rápido
              </h1>
              <h2 className="text-lg text-center font-semibold md:text-3xl text-neutral-700 flex items-start gap-2 capitalize">
                Em poucos passos você cria seu Produto
                <Rocket
                  size={36}
                  className="rotate-45 hidden sm:block"
                  weight="duotone"
                />
              </h2>
            </div>

            <BudgetForm />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );

}