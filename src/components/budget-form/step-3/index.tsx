"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, Flask, Nut } from "@phosphor-icons/react";
import { useFormContext } from "../../../context/form-contenxt";

const formSchema = z.object({
  receipe: z.string(),
});

type formSchemaType = z.infer<typeof formSchema>;

export function Step3() {
  const [selected, setSelected] = useState({
    name: "",
    src: "",
    label: "",
  });
  const { formState, setFormState } = useFormContext();

  const { handleSubmit, register } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmitForm = (data: formSchemaType) => {
    setFormState({
      ...formState,
      step: 4,
      receipe: {
        label: selected.label,
        name: data.receipe,
      },
    });
  };

  return (
    <form className="space-y-4 py-4" onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-6">
        <h2 className="text-base sm:text-xl font-medium flex items-start gap-2 sm:items-center">
          <img
            src="/fronty-icon.png"
            width={20}
            height={20}
            alt="Fronty Icon"
            className="mt-1 sm:mt-0"
          />
          Escolha a fórmula que você deseja no seu produto:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {formState.niche.receips.map(({ src, name, label }, index) => {
            return (
              <label
                htmlFor={name}
                key={index}
                className={`p-3 flex flex-col gap-4 items-start justify-start cursor-pointer rounded-lg hover:translate-y-1 hover:shadow-xl hover:shadow-blue-300 ease transition-all max-w-xl ${
                  selected.name === name
                    ? "bg-blue-600 text-white"
                    : "bg-white border text-neutral-800"
                }`}
              >
                <span className="font-semibold text-left w-full text-sm">
                  {label}
                </span>
                <img src={src} alt={name} className=" object-contain" />
                <input
                  type="radio"
                  id={name}
                  value={name}
                  className="sr-only"
                  onClick={() =>
                    setSelected({
                      name,
                      src,
                      label,
                    })
                  }
                  {...register("receipe")}
                />
              </label>
            );
          })}
        </div>

        <p className="text-neutral-900 text-xs sm:text-sm">
          <span className="text-red-600 font-bold">Atenção:</span> As fórmulas
          acima são somente referências! As substâncias e quantidade mínima e
          máxima permitidas serão analisadas conforme legislação em vigor e
          exigências da Anvisa na data da fabricação.
        </p>
      </div>

      <div className="w-full flex justify-end fixed z-[100] bottom-10 right-10 sm:bottom-14">
        <button
          type="submit"
          disabled={selected.name === ""}
          className="bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max cursor-pointer text-white py-3 px-6 text-sm disabled:opacity-50 flex items-center gap-2"
        >
          Próximo
          <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
}
