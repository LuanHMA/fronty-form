'use client'

import { useEffect, useState } from "react";
import { ArrowRight, Nut, Pill } from "@phosphor-icons/react";
import { useFormContext } from "../../../../context/form-contenxt";
import { formData } from "../../form-data";

export function Step4Comestics() {
  const { formState, setFormState } = useFormContext();
  const [disabled, setDisabled] = useState(true);

  const modelColor = formData.comestics.modeColors.filter((item) =>
    item.references.includes(formState.niche.name)
  );

  const modelQtd = formData.comestics.qtd.filter((item) =>
    item.references.includes(formState.niche.name)
  )[0].options;

  const [selected, setSelected] = useState({
    modelSrc: modelColor[0].src,
    modelColor: modelColor[0].color.name,
    modelLabel: modelColor[0].label,
    unitQtd: "30",
    unitQtdLabel: "30mls",
    totQtd: "",
    totQtdLabel: "",
  });

  const isFormComplete = (state: typeof selected) => {
    const mainFieldsFilled =
      state.modelLabel && state.modelSrc && state.unitQtd && state.totQtd;

    return Boolean(mainFieldsFilled);
  };

  useEffect(() => {
    if (isFormComplete(selected)) {
      setDisabled(false);
    }
  }, [selected]);

  const handleNextStep = () => {
    console.log(selected);

    if (isFormComplete(selected)) {
      setFormState({
        ...formState,
        step: 6,
        productDetails: {
          ...formState.productDetails,
          qtd: {
            value: selected.unitQtd,
            label: selected.unitQtdLabel,
          },
          measurement: "ml",
        },
        modelDetails: {
          ...formState.modelDetails,
          totalQtd: selected.totQtd,
          model: selected.modelLabel,
          color: selected.modelColor,
          preview: selected.modelSrc,
        },
      });
    }
  };

  const handleSelectQtdLiquid = (qtdValue: string, label: string) => {
    setSelected({ ...selected, unitQtd: qtdValue, unitQtdLabel: label });
  };

  const handleSelectmodelLabel = (
    modelLabel: string,
    src: string,
    color: string
  ) => {
    setSelected({ ...selected, modelLabel, modelSrc: src, modelColor: color });
  };

  const handleSelectTotalQtd = (qtdValue: string) => {
    setSelected({ ...selected, totQtd: qtdValue });
  };

  return (
    <div className="space-y-4 py-4">
      {/* Cor do pote */}
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Nut size={24} weight="bold" className="text-blue-500" />
            Escolha a cor do pote:
          </h2>

          <div className="grid grid-cols-1 place-items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              <img src={selected.modelSrc} alt="capsula" className="w-72" />
              <span className="text-base capitalize font-semibold ml-6 sm:text-lg">
                {selected.modelLabel}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {modelColor.map(({ src, color, label }, index) => (
                <button
                  key={index}
                  className={`w-9 h-9 rounded-full ${color.bg} border-4 shadow-lg p-1 border-neutral-200 cursor-fronty-pointer transition-all ${selected.modelLabel === label && "scale-125"}`}
                  onClick={() => handleSelectmodelLabel(label, src, color.name)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quantidade de liquido */}
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Pill size={24} weight="bold" className="text-blue-500" />
            Escolha a quantidade do pote:
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {modelQtd.map(({ label, value }, index) => (
              <label
                key={index}
                htmlFor={"capsule" + value}
                className={`p-5 flex flex-col gap-2 items-center justify-center cursor-fronty-pointer rounded-lg cursor-pointerhover:translate-y-1 hover:shadow-lg hover:shadow-blue-300 ease transition-all ${selected.unitQtd === value ? "bg-blue-500 text-white" : "bg-white border text-neutral-800"}`}
              >
                <input
                  type="radio"
                  id={"capsule" + value}
                  value={value}
                  className="sr-only"
                  onClick={() => handleSelectQtdLiquid(value, label)}
                />

                <div className="flex items-center gap-1">
                  <span className=" font-semibold text-center text-base sm:text-lg">
                    {label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Quantidade total */}
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Nut size={24} weight="bold" className="text-blue-500" />
            Escolha a quantidade que deseja orçar:
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {formData.comestics.totQtd.map((qtd, index) => (
              <label
                key={index}
                htmlFor={qtd}
                className={`p-5 flex flex-col gap-2 items-center justify-center cursor-fronty-pointer rounded-lg cursor-pointerhover:translate-y-1 hover:shadow-lg hover:shadow-blue-300 ease transition-all ${selected.totQtd === qtd ? "bg-blue-500 text-white" : "bg-white border text-neutral-800"}`}
              >
                <input
                  type="radio"
                  id={qtd}
                  value={qtd}
                  className="sr-only"
                  onClick={() => handleSelectTotalQtd(qtd)}
                />

                <div className="flex items-center gap-1">
                  <span className=" font-semibold text-center text-base sm:text-lg">
                    {qtd === "all" ? "Todas opções" : qtd + " unidades"}
                  </span>
                </div>
              </label>
            ))}
          </div>

          <p className="text-sm text-neutral-600">
            *Escolha a Quantidade que deseja Orçar, Caso queira saber o valores
            de todos os planos selecione a opçao todas opções
          </p>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          className=" bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max cursor-fronty-pointer text-white py-3 px-6 text-sm disabled:opacity-50 flex items-center gap-2"
          onClick={handleNextStep}
          disabled={disabled}
        >
          Próximo
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
