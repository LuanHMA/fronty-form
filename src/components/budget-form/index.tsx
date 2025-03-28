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
            name: "",
            category: "",
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
        <div className="bg-white rounded-lg border border-neutral-200 p-4 space-y-1">
          <div className="flex items-start gap-2 sm:items-center">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            <h2 className="text-sm font-medium sm:text-lg">
              Tipo de produto selecionado:
              <span className="font-semibold text-blue-800 capitalize ml-2 ">
                {formState.productType}
              </span>
            </h2>
          </div>
          <button
            onClick={() => handleChangeStep(1)}
            className="flex items-center gap-1 text-neutral-700 group text-sm sm:text-base"
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
        <div className="bg-white rounded-lg border border-neutral-200 p-4 space-y-1">
          <div className="flex items-start gap-2 sm:items-center">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            <h2 className="font-medium text-sm sm:text-lg">
              Nicho selecionado!
            </h2>
          </div>
          <button
            onClick={() => handleChangeStep(2)}
            className="flex items-center gap-1 text-neutral-700 group text-sm sm:text-base"
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
        <div className="bg-white rounded-lg border border-neutral-200 p-4 space-y-1">
          <div className="flex items-start gap-2 sm:items-center">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            <h2 className="font-medium text-sm sm:text-lg">
              Fórmula selecionada!
            </h2>
          </div>

          <button
            onClick={() => handleChangeStep(3)}
            className="flex items-center gap-1 text-neutral-700 group text-sm sm:text-base"
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
        <div className="bg-white rounded-lg border border-neutral-200 p-4 space-y-1">
          <h2 className="text-sm font-medium sm:text-lg flex items-center gap-2 flex-wrap">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            <span>Personalização selecionada!</span>
          </h2>
          <button
            onClick={() => handleChangeStep(4)}
            className="flex items-center gap-1 text-neutral-700 group text-sm sm:text-base"
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
        <div className="bg-white rounded-lg border border-neutral-200 p-4 space-y-1">
          <h2 className="text-sm font-medium sm:text-lg flex items-center gap-2">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            Personalização selecionada!
          </h2>
          <button
            onClick={() => handleChangeStep(4)}
            className="flex items-center gap-1 text-neutral-700 group text-sm sm:text-base"
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
        <div className="bg-white rounded-lg border border-neutral-200 p-4 space-y-1">
          <h2 className="text-sm font-medium sm:text-lg inline-flex items-center gap-2">
            <CheckCircle size={22} className="text-green-500" weight="fill" />
            Tampa, Pote e Quantidade selecionadas!
          </h2>
          <button
            onClick={() => handleChangeStep(5)}
            className="flex items-center gap-1 text-neutral-700 group text-sm sm:text-base"
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
