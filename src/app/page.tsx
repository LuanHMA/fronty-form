"use client";

import { BudgetForm } from "@/components/budget-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { InitalForm } from "@/components/initial-form";
import { Rocket } from "@phosphor-icons/react";
import { useState } from "react";
import { useFormContext } from "@/context/form-contenxt";

export default function Home() {
  const { formState, setFormState } = useFormContext();

  const handleSubmitted = (value: boolean) => {
    setFormState({ ...formState, formSubmitted: value });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#E4F2FF] to-[#ffff] grid place-items-center cursor-[url(/cursor.svg),_auto] ">
      <Header />

      <div className="min-h-[calc(100vh-80px)] grid place-items-center w-full p-2 sm:p-4">
        {!formState.formSubmitted && formState.step === 0 && (
          <div className="w-full mx-auto grid place-items-center max-w-7xl space-y-10">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-semibold md:text-4xl text-blue-600">
                Sistema Interativo e Rápido
              </h1>
              <div className={`flex items-start gap-2`}>
                <h2 className="text-lg text-center font-semibold sm:text-2xl text-neutral-700 capitalize">
                  Crie seu produto em poucos passos!
                </h2>
              </div>
            </div>
            <InitalForm />
          </div>
        )}

        {formState.formSubmitted && (
          <div className="w-full mx-auto grid place-items-center max-w-7xl space-y-10">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold md:text-4xl text-blue-600">
                Meu Projeto
              </h1>
              <div className={`flex items-start gap-2`}>
                <h2 className="text-lg text-center font-semibold  text-neutral-700 capitalize">
                  Personalize seu produto conforme suas preferências!
                </h2>
              </div>
            </div>

            <BudgetForm />
          </div>
        )}
      </div>
    </div>
  );
}
