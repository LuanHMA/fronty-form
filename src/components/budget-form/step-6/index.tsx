'use client'

import { ReadCvLogo, Spinner } from "@phosphor-icons/react";
import { useFormContext } from "../../../context/form-contenxt";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export function Step6Resume() {
  const { formState } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendForm = async () => {
    setIsLoading(true);

    const data = {
      productType: formState.productType,
      nicheName: formState.niche.name,
      nicheCategory: formState.niche.category,
      receipe: formState.receipe.name,
      productAmount: formState.productDetails.qtd.value,
      productUnit: formState.productDetails.measurement,
      productColorFlavor: formState.productDetails.flavor?.name
        ? formState.productDetails.flavor.name
        : formState.productDetails.color?.name,
      model: formState.modelDetails.model,
      modelColor: formState.modelDetails.color,
      modelExtra: {
        model: formState.modelDetails.extra?.model,
        color: formState.modelDetails.extra?.color,
      },
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}v1/form/update`,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      console.log(response)

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y divide-neutral-200">
      <h1 className="text-lg font-bold text-blue-600 flex items-center gap-2">
        <ReadCvLogo size={32} />
        RESUMO DO ORÇAMENTO
      </h1>

      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 col-span-2 gap-4 pt-4">
          <div className="capitalize col-span-1 sm:col-span-2 p-6 flex flex-col gap-2 items-start justify-center cursor-fronty-default rounded-lg bg-white border text-neutral-800">
            <h2 className="text-base font-semibold text-blue-600">
              Informações do solicitante:
            </h2>
            <p className="text-base flex items-start gap-1">
              <span className="font-medium">Nome:</span>
              {formState.username}
            </p>

            <p className="text-base flex items-start gap-1">
              <span className="font-medium">Whatsapp:</span>
              {formState.whatsapp}
            </p>
          </div>

          <div className="capitalize p-6 flex flex-col gap-2 items-start justify-center cursor-fronty-default rounded-lg bg-white border text-neutral-800">
            <h2 className="text-base font-semibold text-blue-600">
              Tipo do produto:
            </h2>
            <h2 className="text-base">{formState.productType}</h2>
          </div>

          <div className="capitalize p-6 flex flex-col gap-2 items-start justify-center cursor-fronty-default rounded-lg bg-white border text-neutral-800">
            <h2 className="text-base font-semibold text-blue-600">
              Nicho escolhido:
            </h2>
            <h2 className="text-base">{formState.niche.name}</h2>
          </div>

          <div className="capitalize p-6 flex flex-col gap-2 items-start justify-center cursor-fronty-default rounded-lg bg-white border text-neutral-800">
            <h2 className="text-base font-semibold text-blue-600">
              Fórmula escolhida:
            </h2>
            <h2 className="text-base">{formState.receipe.label}</h2>
          </div>

          <div className="capitalize p-6 flex flex-col gap-2 items-start justify-start cursor-fronty-default rounded-lg bg-white border text-neutral-800">
            <h2 className="text-base font-semibold text-blue-600">
              Unidades solicitadas:
            </h2>
            <h2 className="text-base">
              {formState.modelDetails.totalQtd == "all"
                ? "Todas"
                : formState.modelDetails.totalQtd + " unidades"}
            </h2>
          </div>

          <div className="capitalize p-6  flex flex-col gap-2 items-start justify-start cursor-fronty-default rounded-lg bg-white border text-neutral-800">
            <h2 className="text-base font-semibold text-blue-600">
              Personalização:
            </h2>

            {formState.modelDetails.model && (
              <p className="text-base flex items-start gap-1">
                <span className="font-medium">Modelo:</span>
                {formState.modelDetails.model}
              </p>
            )}

            {formState.productDetails.color?.label && (
              <p className="text-base flex items-start gap-1">
                <span className="font-medium">Cor:</span>
                {formState.productDetails.color?.label}
              </p>
            )}

            {formState.productDetails.flavor?.label && (
              <p className="text-base flex items-start gap-1">
                <span className="font-medium">Sabor:</span>
                {formState.productDetails.flavor?.label}
              </p>
            )}

            {formState.productDetails.qtd.label && (
              <p className="text-base flex items-start gap-1">
                <span className="font-medium">Quantidade:</span>
                {formState.productDetails.qtd.label}
              </p>
            )}

            {formState.productType === "encapsulado" && (
              <>
                {formState.modelDetails.extra?.color &&
                  formState.modelDetails.extra.model && (
                    <p className="text-base flex items-start gap-1 capitalize">
                      <span className="font-medium">Pote:</span>
                      {formState.modelDetails.extra.model}
                      <span className="capitalize">
                        {formState.modelDetails.extra?.color}
                      </span>
                    </p>
                  )}

                {formState.modelDetails?.color &&
                  formState.modelDetails.model && (
                    <p className="text-base flex items-start gap-1 capitalize">
                      <span className="font-medium">Tampa:</span>
                      {formState.modelDetails.model}
                      <span className="capitalize">
                        {formState.modelDetails.color}
                      </span>
                    </p>
                  )}
              </>
            )}
          </div>

          <div className="bg-neutral-50 border rounded-lg flex justify-center items-center">
            <img src={formState.modelDetails.preview} className="w-72" />
          </div>

          <div className="flex items-end justify-end">
            <button
              className=" bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max cursor-fronty-pointer text-white py-3 px-6 text-sm disabled:opacity-50 flex items-center gap-2 disabled:bg-opacity-85 disabled:cursor-not-allowed"
              disabled={isLoading}
              onClick={handleSendForm}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Spinner size={20} className="animate-spin" />
                  Enviando...
                </span>
              ) : (
                <span>Enviar orçamento</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
