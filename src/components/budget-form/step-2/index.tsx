'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, Nut, Icon } from "@phosphor-icons/react";
import { useFormContext } from "../../../context/form-contenxt";
import { ProductList } from "../../../@types/product-list";
import { formData } from "../form-data";

const formSchema = z.object({
  niche: z.string(),
});

type formSchemaType = z.infer<typeof formSchema>;

interface selectedProps {
  name: string;
  category: string;
  icon: Icon;
  receips: {
    name: string;
    label: string;
    src: string;
  }[];
}

export function Step2() {
  const [selected, setSelected] = useState<selectedProps | null>(null);
  const { formState, setFormState } = useFormContext();

  const { handleSubmit, register } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmitForm = (data: formSchemaType) => {
    setFormState({
      ...formState,
      step: 3,
      niche: {
        category: selected?.category,
        name: data.niche,
        icon: selected?.icon,
        receips: selected?.receips!!,
      },
    });
  };

  let data: ProductList[] = [];

  switch (formState.productType) {
    case "encapsulado":
      data = formData.capsules.niches;
      break;
    case "liquido":
      data = formData.liquid.niches;
      break;
    case "soluvel":
      data = formData.solubles.niches;
      break;
    case "cosmetico":
      data = formData.comestics.niches;
      break;
    default:
      break;
  }

  return (
    <form className="space-y-4 py-4" onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-6">
        <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
          <Nut size={24} weight="bold" className="text-blue-500" />
          Escolha o nicho de atuação do seu Produto
        </h2>
        <div className="grid grid-cols-1 gap-4 space-y-4">
          {data.map(({ category, Icon, options }, index) => {
            return (
              <div
                className={`space-y-6 ${index === data.length - 1 ? "border-0 pb-0" : "border-b pb-6"}`}
                key={index}
              >
                <h2 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-blue-500">
                  {category}
                </h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {options.map(({ description, name, receips }, index) => {
                    const isSelected =
                      selected?.name === name &&
                      selected?.category === category;

                    return (
                      <label
                        htmlFor={name + category}
                        className={`p-4 gap-2 flex flex-col items-center justify-center rounded-lg cursor-fronty-pointer hover:shadow-blue-500  transition-all ${isSelected ? "bg-blue-500 text-white" : "bg-white border border-neutral-300 text-neutral-800"}`}
                        key={index}
                      >
                        <input
                          type="radio"
                          id={name + category}
                          value={name}
                          className="sr-only"
                          onClick={() => {
                            setSelected({
                              name,
                              category,
                              icon: Icon,
                              receips,
                            });
                          }}
                          {...register("niche")}
                        />
                        <Icon size={24} weight="duotone" />
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-center text-base font-semibold">
                            {name}
                          </span>

                          {description && (
                            <span
                              className={`text-xs uppercase text-center ${isSelected ? "text-blue-200" : "text-neutral-500"}`}
                            >
                              {description}
                            </span>
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          disabled={selected === null}
          className=" bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max cursor-fronty-pointer text-white py-3 px-6 text-sm disabled:opacity-50 flex items-center gap-2"
        >
          Próximo
          <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
}
