'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, Nut } from "@phosphor-icons/react";
import { useFormContext } from "../../../context/form-contenxt";
import { formData } from "../../../data/form-data";
import Image from "next/image";

const formSchema = z.object({
  productType: z.enum(["encapsulado", "soluvel", "liquido", "cosmetico"]),
});

type formSchemaType = z.infer<typeof formSchema>;

export function Step1() {
  const [selected, setSelected] = useState<string | null>(null);
  const { formState, setFormState } = useFormContext();

  const { handleSubmit, register } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmitForm = (data: formSchemaType) => {
    setFormState({ ...formState, productType: data.productType, step: 2 });
  };

  return (
    <form className="space-y-4 py-4" onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4">
        <h2 className="text-base sm:text-xl font-medium flex items-center gap-2 text-neutral-900">
          <img src="/fronty-icon.png" width={20} height={20} alt="Fronty Icon" />
          Escolha o tipo de produto
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10">
          {formData.productTypes.map(({ label, name, src }, index) => {
            return (
              <label
                key={index}
                htmlFor={name}
                className={`p-6 flex flex-col items-center justify-center rounded-lg cursor-pointer font-medium text-center text-sm hover:translate-y-1  hover:shadow-[0px_10px_25px_0px_#0083fb] ease transition-all ${selected === name ? "bg-blue-600 text-white" : "bg-white border border-neutral-200 text-neutral-800"}`}
              >
                <Image
                  src={src}
                  alt={label}
                  width={256}
                  height={256}
                    className={`w-28 sm:w-full max-w-64 ${name === "soluvel" && "relative top-4 sm:top-6"}`}
                />

                <input
                  type="radio"
                  id={name}
                  value={name}
                  className="sr-only"
                  onClick={() => setSelected(name)}
                  {...register("productType")}
                />
                <h2
                  className={`text-sm font-medium text-neutral-800 sm:text-lg ${selected === name ? "text-white" : "text-neutral-800"} ${name === "soluvel" && "relative sm:-top-2 lg:top-0"}`}
                >
                  {label}
                </h2>
              </label>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          disabled={selected === null}
          className=" bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max cursor-pointer text-white py-3 px-6 text-sm disabled:opacity-50 flex items-center gap-2"
        >
          Próximo
          <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
}
