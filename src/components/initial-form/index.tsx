'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckSquareOffset } from "@phosphor-icons/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import { z } from "zod";
import Cookies from "js-cookie";
import { useFormContext } from "../../context/form-contenxt";

const initialFormSchema = z.object({
  name: z
    .string({
      required_error: "O nome é obrigatório",
      invalid_type_error: "O nome é obrigatório",
    })
    .min(3, "O nome completo deve ter pelo menos 3 carecteres"),
  phone: z
    .string({
      required_error: "O número de telefone é obrigatório",
      invalid_type_error: "O número de telefone é obrigatório",
    })
    .min(11, "O número de telefone é obrigatório")
    .refine((value) => !value.includes("_"), {
      message: "Digite o número do telefone completo",
    }),
});

type initialFormSchemaType = z.infer<typeof initialFormSchema>;

export function InitalForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<initialFormSchemaType>({
    resolver: zodResolver(initialFormSchema),
  });

  const registerWithMask = useHookFormMask(register);

  const { setFormState, formState } = useFormContext();

  const handleSubmitForm = async (data: initialFormSchemaType) => {
    const phone = data.phone.replace(/\D/g, "");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}v1/form/start`,
        {
          name: data.name,
          whatsapp: phone,
        }
      );

      if (response.data.status === 201) {
        Cookies.set("token", response.data.token);
        setFormState({ ...formState, step: 1, username: data.name, whatsapp: phone, formSubmitted: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full bg-white rounded-lg border border-neutral-200 p-4 max-w-2xl flex flex-col items-center gap-6 mt-10"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div className=" flex items-start gap-2 sm:items-center">
        <CheckSquareOffset
          size={20}
          weight="bold"
          className="text-semibold text-blue-600 w-5"
        />
        <h2 className="text-base font-semibold text-blue-600 flex-1">
          Insira seus dados para Iniciar a Criação do seu Produto
        </h2>
      </div>

      <div className="flex flex-col gap-6 items-start w-full">
        <div className="w-full flex flex-col sm:flex-row items-center gap-4">
          <fieldset className="flex flex-col gap-1 items-start w-full">
            <label
              className="text-base font-semibold text-blue-600"
              htmlFor="name"
            >
              Nome
            </label>
            <input
              className="border rounded-lg text-black border-neutral-200 w-full p-3 outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Digite seu nome completo"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-xs text-red-600 ml-1">
                {errors.name.message}
              </span>
            )}
          </fieldset>

          <fieldset className="flex flex-col gap-1 items-start w-full">
            <label
              className="text-base font-semibold text-blue-600"
              htmlFor="phone"
            >
              Telefone
            </label>
            <input
              className="border rounded-lg text-black border-neutral-200 w-full p-3 outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="+00 (00) 0000-0000"
              id="phone"
              {...registerWithMask("phone", "+99 (99) 99999-9999", {
                showMaskOnFocus: false,
                showMaskOnHover: false,
              })}
            />
            {errors.phone && (
              <span className="text-xs text-red-600 ml-1">
                {errors.phone.message}
              </span>
            )}
          </fieldset>
        </div>
        <button
          className="w-full bg-gradient-to-r from-[#1e12ce] to-[#0083fb] text-white p-3 rounded-lg col-span-2 max-w-xs mx-auto hover:shadow-[0px_10px_25px_0px_#0083fb] transition-all disabled:pointer-events-none disabled:opacity-50 ease duration-300 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Iniciando..." : "Iniciar projeto"}
        </button>
      </div>
    </form>
  );
}
