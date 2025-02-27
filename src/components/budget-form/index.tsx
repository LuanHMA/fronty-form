"use client";

import { ArrowCounterClockwise, CheckCircle } from "@phosphor-icons/react";
import { useFormContext } from "../../context/form-contenxt";
import { Step1 } from "./step-1";
import { Step2 } from "./step-2";
import { Step3 } from "./step-3";
import { Step4 } from "./step-4";
import { Step5Capsule } from "./step-5";
import { Step6Resume } from "./step-6";

export function BudgetForm() {
  const { formState, setFormState } = useFormContext();

  const handleChangeStep = (step: number) => {
    switch (step) {
      case 1:
        setFormState({
          ...formState,
          modelDetails: {
            color: "",
            model: "",
            extra: {
              color: "",
              model: "",
            },
            preview: "",
            totalQtd: "",
          },
          receipe: {
            label: "",
            name: "",
          },
          niche: {
            category: "",
            icon: undefined,
            name: "",
            receips: [],
          },
          productDetails: {
            measurement: "",
            qtd: {
              label: "",
              value: "",
            },
            color: {
              label: "",
              name: "",
            },
            flavor: {
              label: "",
              name: "",
            },
          },
          productType: null,
          step: 1,
        });
        break;
      case 2:
        setFormState({
          ...formState,
          modelDetails: {
            color: "",
            model: "",
            extra: {
              color: "",
              model: "",
            },
            preview: "",
            totalQtd: "",
          },
          receipe: {
            label: "",
            name: "",
          },
          niche: {
            category: "",
            icon: undefined,
            name: "",
            receips: [],
          },
          productDetails: {
            measurement: "",
            qtd: {
              label: "",
              value: "",
            },
            color: {
              label: "",
              name: "",
            },
            flavor: {
              label: "",
              name: "",
            },
          },
          step: 2,
        });
        break;
      case 3:
        setFormState({
          ...formState,
          modelDetails: {
            color: "",
            model: "",
            extra: {
              color: "",
              model: "",
            },
            preview: "",
            totalQtd: "",
          },
          productDetails: {
            measurement: "",
            qtd: {
              label: "",
              value: "",
            },
            color: {
              label: "",
              name: "",
            },
            flavor: {
              label: "",
              name: "",
            },
          },
          step: 3,
        });
        break;
      case 4:
        setFormState({
          ...formState,
          modelDetails: {
            color: "",
            model: "",
            extra: {
              color: "",
              model: "",
            },
            preview: "",
            totalQtd: "",
          },
          productDetails: {
            measurement: "",
            qtd: {
              label: "",
              value: "",
            },
            color: {
              label: "",
              name: "",
            },
            flavor: {
              label: "",
              name: "",
            },
          },
          step: 4,
        });
        break;
      case 5:
        setFormState({
          ...formState,
          modelDetails: {
            color: "",
            model: "",
            extra: {
              color: "",
              model: "",
            },
            preview: "",
            totalQtd: "",
          },
          productDetails: {
            measurement: "",
            qtd: {
              label: "",
              value: "",
            },
            color: {
              label: "",
              name: "",
            },
            flavor: {
              label: "",
              name: "",
            },
          },
          step: 5,
        });
        break;
      default:
        setFormState({
          ...formState,
          modelDetails: {
            color: "",
            model: "",
            extra: {
              color: "",
              model: "",
            },
            preview: "",
            totalQtd: "",
          },
          receipe: {
            label: "",
            name: "",
          },
          niche: {
            category: "",
            icon: undefined,
            name: "",
            receips: [],
          },
          productDetails: {
            measurement: "",
            qtd: {
              label: "",
              value: "",
            },
            color: {
              label: "",
              name: "",
            },
            flavor: {
              label: "",
              name: "",
            },
          },
          productType: null,
          step: 1,
        });
        break;
    }
  };

  return (
    <div className="space-y-4 w-full max-w-6xl">
      {formState.step > 1 && (
        <div className="bg-white rounded-lg border border-neutral-300 p-4 space-y-1">
          <div className="flex items-start gap-2 sm:items-center">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            <h2 className="text-base font-medium sm:text-lg">
              Tipo de produto selecionado:
              <span className="font-semibold text-blue-500 capitalize ml-2">
                {formState.productType}
              </span>
            </h2>
          </div>
          <button
            onClick={() => handleChangeStep(1)}
            className="flex items-center gap-1 text-neutral-700 group group"
          >
            <ArrowCounterClockwise
              size={18}
              className="group-hover:-rotate-180 transition-all duration-700"
            />
            Alterar o tipo de produto
          </button>
        </div>
      )}

      {formState.step > 2 && (
        <div className="bg-white rounded-lg border border-neutral-300 p-4 space-y-1">
          <div className="flex items-start gap-2 sm:items-center">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            <h2 className="text-base font-medium sm:text-lg">
              Nicho selecionado!
            </h2>
          </div>
          <button
            onClick={() => handleChangeStep(2)}
            className="flex items-center gap-1 text-neutral-700 group"
          >
            <ArrowCounterClockwise
              size={18}
              className="group-hover:-rotate-180 transition-all duration-700"
            />
            Alterar nicho selecionado
          </button>
        </div>
      )}

      {formState.step > 3 && (
        <div className="bg-white rounded-lg border border-neutral-300 p-4 space-y-1">
          <div className="flex items-start gap-2 sm:items-center">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            <h2 className="text-base font-medium sm:text-lg">
              Fórmula selecionada!
            </h2>
          </div>

          <button
            onClick={() => handleChangeStep(3)}
            className="flex items-center gap-1 text-neutral-700 group"
          >
            <ArrowCounterClockwise
              size={18}
              className="group-hover:-rotate-180 transition-all duration-700"
            />
            Alterar fórmula
          </button>
        </div>
      )}

      {formState.step > 4 && formState.productType != "encapsulado" && (
        <div className="bg-white rounded-lg border border-neutral-300 p-4 space-y-1">
          <h2 className="text-base font-medium sm:text-lg flex items-center gap-2 flex-wrap">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            <span>Personalização selecionada!</span>
          </h2>
          <button
            onClick={() => handleChangeStep(4)}
            className="flex items-center gap-1 text-neutral-700 group"
          >
            <ArrowCounterClockwise
              size={18}
              className="group-hover:-rotate-180 transition-all duration-700"
            />
            Alterar personalização
          </button>
        </div>
      )}

      {formState.step > 4 && formState.productType === "encapsulado" && (
        <div className="bg-white rounded-lg border border-neutral-300 p-4 space-y-1">
          <h2 className="text-base font-medium sm:text-lg flex items-center gap-2">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            Personalização selecionada:
            <span className="font-semibold text-blue-500 capitalize">
              {formState.productDetails.qtd.label}
            </span>
            <span className="font-semibold text-blue-500 capitalize">
              {formState.productDetails.color?.label}
            </span>
          </h2>
          <button
            onClick={() => handleChangeStep(4)}
            className="flex items-center gap-1 text-neutral-700 group"
          >
            <ArrowCounterClockwise
              size={18}
              className="group-hover:-rotate-180 transition-all duration-700"
            />
            Alterar informações
          </button>
        </div>
      )}

      {formState.productType === "encapsulado" && formState.step > 5 && (
        <div className="bg-white rounded-lg border border-neutral-300 p-4 space-y-1">
          <h2 className="text-base font-medium sm:text-lg inline-flex items-center gap-2">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            Tampa, Pote e Quantidade selecionadas:
            <span className="font-semibold text-blue-500 ml-2 capitalize">
              {formState.modelDetails.color}
            </span>
            <span className="font-semibold text-blue-500 ml-2 capitalize">
              {formState.modelDetails.model}
            </span>
            <span className="font-semibold text-blue-500 ml-2 capitalize">
              {formState.modelDetails.extra?.color}
            </span>
            <span className="font-semibold text-blue-500 ml-2 capitalize">
              {formState.modelDetails.extra?.model}
            </span>
            <span className="font-semibold text-blue-500 ml-2 capitalize">
              {formState.modelDetails.totalQtd}
            </span>
          </h2>
          <button
            onClick={() => handleChangeStep(5)}
            className="flex items-center gap-1 text-neutral-700 group"
          >
            <ArrowCounterClockwise
              size={18}
              className="group-hover:-rotate-180 transition-all duration-700"
            />
            Alterar informações
          </button>
        </div>
      )}

      {formState.step === 1 && <Step1 />}
      {formState.step === 2 && <Step2 />}
      {formState.step === 3 && <Step3 />}
      {formState.step === 4 && <Step4 />}
      {formState.step === 5 && <Step5Capsule />}
      {formState.step === 6 && <Step6Resume />}
    </div>
  )
}
