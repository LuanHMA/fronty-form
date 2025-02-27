"use client"

import { BudgetForm } from "@/components/budget-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InitalForm } from "@/components/initial-form";
import { Rocket } from "@phosphor-icons/react";
import { useState } from "react";
import { useFormContext } from "@/context/form-contenxt";

export default function Home() {
  const { formState, setFormState } = useFormContext()

  const handleSubmitted = (value: boolean) => {
    setFormState({ ...formState, formSubmitted: value })
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#E4F2FF] to-[#ffff] grid place-items-center cursor-[url(/cursor.svg),_auto] space-y-20 sm:space-y-20">
      <Header />

      <div className="min-h-[calc(100vh-490px)] grid place-items-center w-full p-2 sm:p-4">
        {!formState.formSubmitted && formState.step === 0 && <InitalForm />}

        {formState.formSubmitted && (
          <div className="w-full mx-auto grid place-items-center max-w-7xl space-y-10 pt-24">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-semibold md:text-4xl text-blue-500">
                Sistema Interativo e Rápido
              </h1>
              <div className={`flex items-start gap-2`}>
              <h2 className="text-lg text-center font-semibold md:text-3xl text-neutral-700 capitalize">
                Em poucos passos você cria seu Produto
              </h2>
                <Rocket
                  size={24}
                  className="rotate-45 hidden sm:block flex-1"
                  weight="duotone"
                />

              </div>
            </div>

            <BudgetForm />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );

}