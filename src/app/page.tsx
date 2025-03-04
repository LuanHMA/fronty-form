"use client";

import { BudgetForm } from "@/components/budget-form";
import { Header } from "@/components/header";
import { InitalForm } from "@/components/initial-form";
import { useFormContext } from "@/context/form-contenxt";

export default function Home() {
  const { formState } = useFormContext();

  return (
    <div className="w-full grid place-items-start pt-4 sm:pt-10 cursor-[url(/cursor.svg),_auto]">

      <div className="grid place-items-start w-full p-2 sm:p-4">
        {!formState.formSubmitted && formState.step === 0 && (
          <div className="w-full mx-auto grid place-items-center max-w-7xl space-y-4 sm:space-y-10">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl text-center font-bold md:text-4xl text-blue-800">
                Sistema Interativo e Rápido
              </h1>
              <div className={`flex items-start gap-2`}>
                <h2 className="text-base text-center font-semibold sm:text-2xl text-neutral-700 capitalize">
                  Crie seu produto em poucos passos!
                </h2>
              </div>
            </div>
            <InitalForm />
          </div>
        )}

        {formState.formSubmitted && (
          <div className="w-full mx-auto grid place-items-center max-w-7xl space-y-4 sm:space-y-10 mb-10">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-bold md:text-4xl text-blue-800">
                Meu Projeto
              </h1>
              <div className={`flex items-start gap-2`}>
                <h2 className="text-base text-center font-semibold  text-neutral-700 capitalize">
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
