'use client'

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
        <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2 ">
          <Nut size={24} weight="bold" className="text-blue-500 " />
          Escolha a fórmula que você deseja no seu produto:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {formState.niche.receips.map(({ src, name, label }, index) => {
            return (
              <label
                htmlFor={name}
                key={index}
                className={`p-6 flex flex-col gap-2 items-center justify-center cursor-fronty-pointer rounded-lg cursor-pointerhover:translate-y-1 hover:shadow-xl hover:shadow-blue-300 ease transition-all ${selected.name === name ? "bg-blue-500 text-white" : "bg-white border text-neutral-800"}`}
              >
                <img
                  src={src}
                  alt={name}
                  className="w-44 sm:w-11/12 max-w-64"
                />
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

                <div className="flex items-center gap-1">
                  <Flask size={24} />
                  <span className=" font-semibold text-center text-base sm:text-lg">
                    {label}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          disabled={selected.name === ""}
          className=" bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max cursor-fronty-pointer text-white py-3 px-6 text-sm disabled:opacity-50 flex items-center gap-2"
        >
          Próximo
          <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
}
