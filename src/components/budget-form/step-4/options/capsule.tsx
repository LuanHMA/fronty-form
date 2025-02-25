'use client'

import { useState } from "react";
import { ArrowRight, CircleHalf, Nut, Pill } from "@phosphor-icons/react";
import { useFormContext } from "../../../../context/form-contenxt";
import { formData } from "../../form-data";
export function Step4Capsule() {
  const { formState, setFormState } = useFormContext();
  const [selected, setSelected] = useState({
    capsuleColor: "transparente",
    capsuleSrc: "/capsule/capsules/transparente.png",
    capsulesQtd: "30",
    capsulesQtdLabel: "30 Cápsulas",
    capsuleColorLabel: "",
  });

  const handleSelectCapsule = (color: string, src: string, label: string) => {
    setSelected({
      ...selected,
      capsuleColor: color,
      capsuleSrc: src,
      capsuleColorLabel: label,
    });
  };

  const handleSelectCapsuleQtd = (qtd: string, label: string) => {
    console.log(label);
    setSelected({ ...selected, capsulesQtd: qtd, capsulesQtdLabel: label });
  };

  const handleNextStep = () => {
    if (selected.capsulesQtd && selected.capsuleColor) {
      setFormState({
        ...formState,
        step: 5,
        productDetails: {
          ...formState.productDetails,
          color: {
            name: selected.capsuleColor,
            label: selected.capsuleColorLabel,
          },
          measurement: "un",
          qtd: {
            value: selected.capsulesQtd,
            label: selected.capsulesQtdLabel,
          },
        },
      });
    }
  };

  return (
    <div className="space-y-4 py-4">
      <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
        <div className="space-y-6">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            <Pill size={24} weight="bold" className="text-blue-500" />
            Escolha a quantidade de capsulas:
          </h2>
          <div className="grid-cols-1 grid sm:grid-cols-3 gap-4">
            {formData.capsules.qtd.options.map(({ label, value }, index) => (
              <label
                key={index}
                htmlFor={"capsule" + value}
                className={`p-6 flex flex-col gap-2 items-center justify-center cursor-fronty-pointer rounded-lg cursor-pointerhover:translate-y-1 hover:shadow-lg hover:shadow-blue-300 ease transition-all ${selected.capsulesQtd === value ? "bg-blue-500 text-white" : "bg-white border text-neutral-800"}`}
              >
                <input
                  type="radio"
                  id={"capsule" + value}
                  value={value}
                  className="sr-only"
                  onClick={() => handleSelectCapsuleQtd(value, label)}
                />

                <div className="flex items-center gap-1">
                  <span className=" font-semibold text-center text-base sm:text-lg">
                    {label}
                  </span>
                </div>
              </label>
            ))}
          </div>
          <p className="text-sm text-neutral-600 font-medium">
            *Caso deseje orçamento com 30 e 60 cápsulas, marque o campo "DUAS
            OPÇÕES"
          </p>
        </div>
      </div>

      {formState.productType === "encapsulado" && (
        <div className="border border-neutral-200 rounded-xl p-6 bg-white space-y-4 divide-y-2 divide-neutral-100">
          {/* Capsula */}
          <div className="space-y-6">
            <h2 className="text-base sm:text-xl font-medium flex items-start gap-2">
              <Nut size={24} weight="bold" className="text-blue-500" />
              Escolha a cor da capsula
            </h2>

            <div className="grid grid-cols-1 place-items-center gap-6">
              <div className="flex flex-col items-center gap-4">
                <img src={selected.capsuleSrc} alt="capsula" className="w-72" />
                <span className="text-base capitalize font-semibold ml-6 sm:text-lg">
                  {selected.capsuleColor}
                </span>
              </div>

              <div className="flex items-center flex-wrap justify-center gap-4">
                {formData.capsules.colors.map(
                  ({ src, color, colorCode, label }, index) => (
                    <button
                      key={index}
                      className={`w-9 h-9 rounded-full ${color != "personalizada" && `${colorCode}`} border-4 shadow-lg p-1 border-neutral-200 cursor-fronty-pointer transition-all ${selected.capsuleColor === color && "scale-125"}`}
                      onClick={() => handleSelectCapsule(color, src, label)}
                    >
                      {color === "personalizada" && <CircleHalf size={20} />}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex justify-end">
        <button
          type="submit"
          className=" bg-gradient-to-r transition-all ease duration-300 relative from-[#1e12ce] to-[#0083fb] p-3 rounded-lg w-max cursor-fronty-pointer text-white py-3 px-6 text-sm disabled:opacity-50 flex items-center gap-2"
          onClick={handleNextStep}
        >
          Próximo
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
