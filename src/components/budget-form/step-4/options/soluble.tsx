'use client'

import { useEffect, useState } from "react";
import { ArrowRight, Drop, Nut, Pill } from "@phosphor-icons/react";
import { useFormContext } from "../../../../context/form-contenxt";
import { formData } from "../../form-data";

export function Step4Soluble() {
  const { formState, setFormState } = useFormContext();
  const [disabled, setDisabled] = useState(true);
  const [selected, setSelected] = useState({
    lidLabel: "Pote PEAD Branco",
    lidColor: "branca",
    lidSrc: "/soluble/pote-branco.png",
    solubleQtd: "30",
    solubleQtdLabel: "30g",
    totQtdLabel: "",
    totQtd: "",
    flavor: {
      label: "",
      name: "",
    },
  });

  const isFormComplete = (state: typeof selected) => {
    const mainFieldsFilled =
      state.lidLabel && state.lidSrc && state.solubleQtd && state.totQtd;

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
            value: selected.solubleQtd,
            label: selected.solubleQtdLabel,
          },
          measurement: "ml",
        },
        modelDetails: {
          ...formState.modelDetails,
          totalQtd: selected.totQtd,
          model: selected.lidLabel,
          color: selected.lidColor,
          preview: selected.lidSrc,
        },
      });
    }
  };

  const handleSelectQtdSoluble = (
    solubleQtd: string,
    solubleQtdLabel: string
  ) => {
    setSelected({ ...selected, solubleQtd, solubleQtdLabel });
  };

  const handleSelectlidLabel = (
    lidLabel: string,
    src: string,
    color: string
  ) => {
    setSelected({ ...selected, lidLabel, lidSrc: src, lidColor: color });
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
      {/* Cor do pote */}
      <div className="border border-neutral-300 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Nut size={24} weight="bold" className="text-blue-500" />
            Escolha a cor do pote:
          </h2>

          <div className="grid grid-cols-1 place-items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              <img src={selected.lidSrc} alt="capsula" className="w-72" />
              <span className="text-base capitalize font-semibold ml-6 sm:text-lg">
                {selected.lidLabel}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {formData.solubles.potColors.map(
                ({ src, color, label }, index) => (
                  <button
                    key={index}
                    className={`w-9 h-9 rounded-full ${color.bg} border-4 shadow-lg p-1 border-neutral-300 cursor-fronty-pointer transition-all ${selected.lidLabel === label && "scale-125"}`}
                    onClick={() => handleSelectlidLabel(label, src, color.name)}
                  ></button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quantidade de liquido */}
      <div className="border border-neutral-300 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Pill size={24} weight="bold" className="text-blue-500" />
            Escolha a quantidade do pote:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {formData.solubles.qtd.options.map(({ label, value }, index) => (
              <label
                key={index}
                htmlFor={"capsule" + value}
                className={`p-5 flex flex-col gap-2 items-center justify-center cursor-fronty-pointer rounded-lg cursor-pointerhover:translate-y-1 hover:shadow-lg hover:shadow-blue-300 ease transition-all ${selected.solubleQtd === value ? "bg-blue-500 text-white" : "bg-white border text-neutral-800"}`}
              >
                <input
                  type="radio"
                  id={"capsule" + value}
                  value={value}
                  className="sr-only"
                  onClick={() => handleSelectQtdSoluble(value, label)}
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

      {/* Sabor */}
      <div className="border border-neutral-300 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Drop size={24} weight="bold" className="text-blue-500" />
            Escolha o sabor:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {formData.solubles.flavors.map(({ label, name }, index) => (
              <label
                key={index}
                htmlFor={name}
                className={`p-5 flex flex-col gap-2 items-center justify-center cursor-fronty-pointer rounded-lg hover:translate-y-1 hover:shadow-lg hover:shadow-blue-300 ease transition-all ${selected.flavor.name === name ? "bg-blue-500 text-white" : "bg-white border text-neutral-800"}`}
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

      {/* Quantidade total */}
      <div className="border border-neutral-300 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Nut size={24} weight="bold" className="text-blue-500" />
            Escolha a quantidade que deseja orçar:
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {formData.solubles.totQtd.map((qtd, index) => (
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
