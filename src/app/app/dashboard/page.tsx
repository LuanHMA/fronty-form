'use client'

import { useApi } from "@/hooks/useApi";
import { Spinner, Table } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type FormData = {
  name: string;
  whatsapp: string;
  productType: string | null;
  nicheName: string | null;
  nicheCategory: string | null;
  receipe: string | null;
  productAmount: number | null;
  productUnit: string | null;
  productColorFlavor: string | null;
  model: string | null;
  modelColor: string | null;
  modelExtra: string | null;
  status: "PENDING" | "APPROVED" | "REJECTED"; // Ajuste conforme os possíveis valores
  value: string; // Se for um número, altere para `number`
  created_at: string; // Se for um objeto Date no backend, altere para `Date`
};

export default function DashboardPage() {
  const [forms, setForms] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true)
  const { execute } = useApi()
  const userToken = Cookies.get('user-token')

  const getForms = async () => {
    try {
      const info = await execute(`v1/info`, "GET");
      setForms(info)
      return info;
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsLoading(false)
    }
  };

  useEffect(()=> {
    getForms()
  },[])

  
  const list = forms.lastResponses as FormData[];

  if(!userToken){
    return null
  }

  if (!forms || isLoading) {
    return (
      <div className="w-full min-h-screen mx-auto grid place-items-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <Spinner size={32} className="animate-spin" />
        <h1 className="text-2xl font-semibold text-minera-dark-500 text-center">
          Carregando...
        </h1>
      </div>
    </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
        <div className="flex items-start justify-between border rounded-xl border-neutral-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-neutral-600 font-semibold text-base">
              Total de formulários iniciados
            </h2>
            <p className="text-4xl text-blue-600 font-bold">
              {forms.info.total}
            </p>
          </div>

          <div className="border rounded-xl border-neutral-200 p-1 w-max">
            <Table size={36} weight="duotone" />
          </div>
        </div>

        <div className="flex items-start justify-between border rounded-xl border-neutral-200 p-4 shadow-sm bg-white">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-neutral-600 font-semibold text-base">
              Total de formulários finalizados
            </h2>
            <p className="text-4xl text-blue-600 font-bold">
              {forms.info.finished}
            </p>
          </div>

          <div className="border rounded-xl border-neutral-200 p-1 w-max">
            <Table size={36} weight="duotone" />
          </div>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold lg:text-2xl">
        Ultimos formulários recebidos
      </h2>
      <div className="overflow-auto border rounded-lg">
        <table className="min-w-full rounded-tl-lg border-collapse">
          <thead>
            <tr className="border-b rounded-lg border-b-neutral-100 ">
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Nome
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                WhatsApp
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Tipo de Produto
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Nome do Nicho
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Categoria do Nicho
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Receita
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Quantidade
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Unidade
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Cor/Sabor
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Modelo
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Cor do Modelo
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Valor
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-minera-dark-500 ">
                Criado em
              </th>
            </tr>
          </thead>
          <tbody>
            {list?.map(
              (
                {
                  name,
                  whatsapp,
                  productType,
                  nicheName,
                  nicheCategory,
                  receipe,
                  productAmount,
                  productUnit,
                  productColorFlavor,
                  model,
                  modelColor,
                  status,
                  value,
                  created_at,
                },
                index
              ) => (
                <tr
                  key={index}
                  className="hover:bg-neutral-50  border-b border-neutral-100 "
                >
                  <td className="px-6 py-4  text-sm text-neutral-800 capitalize">
                    {name}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {whatsapp}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {productType}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {nicheName}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {nicheCategory}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {receipe}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {productAmount}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {productUnit}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {productColorFlavor}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {model}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {modelColor}
                  </td>

                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {status}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {value}
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-800 capitalize ">
                    {new Date(created_at).toLocaleDateString()}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
