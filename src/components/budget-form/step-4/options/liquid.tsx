'use client'

import { useEffect, useState } from "react";
import { ArrowRight, Drop, Nut } from "@phosphor-icons/react";
import { useFormContext } from "../../../../context/form-contenxt";
import { formData } from "../../../../data/form-data";

export function Step4Liquid() {
  const { formState, setFormState } = useFormContext();
  const [disabled, setDisabled] = useState(true);
  const [selected, setSelected] = useState({
    modelLabel: "Frasco Âmbar c/Tampa Branca",
    modelColor: "branca",
    modelSrc: "/liquid/frasco-branco.png",
    liquidQtd: "30",
    liquidQtdLabel: "30mls",
    totQtd: "",
    totQtdLabel: "",
    flavor: {
      label: "",
      name: "",
    },
  });

  const isFormComplete = (state: typeof selected) => {
    const mainFieldsFilled =
      state.modelLabel && state.modelSrc && state.liquidQtd && state.totQtd;

    const flavorFieldsFilled = state.flavor.label && state.flavor.name;

    return Boolean(mainFieldsFilled && flavorFieldsFilled);
  };

  useEffect(() => {
    if (isFormComplete(selected)) {
      setDisabled(false);
    }
  }, [selected]);

  const handleNextStep = () => {
    if (isFormComplete(selected)) {
      setFormState({
        ...formState,
        step: 6,
        productDetails: {
          ...formState.productDetails,
          flavor: {
            label: selected.flavor.label,
            name: selected.flavor.name,
          },
          qtd: {
            label: selected.liquidQtdLabel,
            value: selected.liquidQtd,
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

  const handleSelectQtdLiquid = (liquidQtd: string, liquidQtdLabel: string) => {
    setSelected({ ...selected, liquidQtd, liquidQtdLabel });
  };

  const handleSelectModelLabel = (
    modelLabel: string,
    src: string,
    color: string
  ) => {
    setSelected({ ...selected, modelLabel, modelSrc: src, modelColor: color });
  };

  const handleSelectTotalQtd = (qtdValue: string) => {
    setSelected({ ...selected, totQtd: qtdValue });
  };

  const handleSelectFlavor = (flavorName: string, flavorLabel: string) => {
    setSelected({
      ...selected,
      flavor: { label: flavorLabel, name: flavorName },
    });
  };

  return (
    <div className="space-y-4 py-4">
      {/* Quantidade de liquido */}
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
          <img src="/fronty-icon.png" width={20} height={20} alt="Fronty Icon" />
            Escolha a quantidade de líquido:
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {formData.liquid.qtd.options.map(({ label, value }, index) => (
              <label
                key={index}
                htmlFor={"capsule" + value}
                className={`p-5 flex flex-col gap-2 items-center justify-center cursor-fronty-pointer rounded-lg cursor-pointerhover:translate-y-1 hover:shadow-lg hover:shadow-blue-300 ease transition-all ${selected.liquidQtd === value ? "bg-blue-600 text-white" : "bg-white border text-neutral-800"}`}
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
            ))}{" "}
          </div>
        </div>
      </div>

      {/* Sabor */}
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Drop size={24} weight="bold" className="text-blue-600" />
            Escolha o sabor:
          </h2>
          <div className="grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {formData.liquid.flavors.map(({ label, name }, index) => (
              <label
                key={index}
                htmlFor={name}
                className={`p-5 flex flex-col gap-2 items-center justify-center cursor-fronty-pointer rounded-lg hover:translate-y-1 hover:shadow-lg hover:shadow-blue-300 ease transition-all ${selected.flavor.name === name ? "bg-blue-600 text-white" : "bg-white border text-neutral-800"}`}
              >
                <input
                  type="radio"
                  id={name}
                  value={name}
                  className="sr-only"
                  onClick={() => handleSelectFlavor(name, label)}
                />

                <div className="flex items-center gap-1">
                  <span className=" font-semibold text-center text-base">
                    {label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Cor da tampa */}
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Nut size={24} weight="bold" className="text-blue-600" />
            Escolha a cor da tampa do frasco:
          </h2>

          <div className="grid grid-cols-1 place-items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              <img src={selected.modelSrc} alt="capsula" className="w-72" />
              <span className="text-base capitalize font-semibold ml-6 sm:text-lg">
                {selected.modelLabel}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {formData.liquid.lidColors.map(({ src, color, label }, index) => (
                <button
                  key={index}
                  className={`w-9 h-9 rounded-full  border-4 shadow-lg p-1 border-neutral-200 cursor-fronty-pointer transition-all ${selected.modelLabel === label && "scale-125"}`}
                  onClick={() => handleSelectModelLabel(label, src, color.name)}
                  style={{ backgroundColor: color.bg }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quantidade total */}
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Drop size={24} weight="bold" className="text-blue-600" />
            Escolha a quantidade que deseja orçar:
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {formData.liquid.totQtd.map((qtd, index) => (
              <label
                key={index}
                htmlFor={qtd}
                className={`p-5 flex flex-col gap-2 items-center justify-center cursor-fronty-pointer rounded-lg cursor-pointerhover:translate-y-1 hover:shadow-lg hover:shadow-blue-300 ease transition-all ${selected.totQtd === qtd ? "bg-blue-600 text-white" : "bg-white border text-neutral-800"}`}
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
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          className=" bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max cursor-fronty-pointer text-white py-3 px-6 text-sm disabled:opacity-50 flex items-center gap-2"
          disabled={disabled}
          onClick={handleNextStep}
        >
          Próximo
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
