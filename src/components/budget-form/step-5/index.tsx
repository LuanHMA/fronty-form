'use client'

import { useEffect, useState } from "react";
import { ArrowRight, CircleHalf, Nut } from "@phosphor-icons/react";
import { formData } from "../../../data/form-data";
import { useFormContext } from "../../../context/form-contenxt";

interface selectedProps {
  potModel: "R80" | "R170" | "T100";
  lidColor: string;
  lidSrc: string;
  lidModel: "lisa" | "flipTop";
  potColor: string;
  potSrc: string;
  totQtd: string;
}

export function Step5Capsule() {
  const { setFormState } = useFormContext();
  const [selected, setSelected] = useState<selectedProps>({
    lidModel: "lisa",
    lidColor: "",
    lidSrc: "",
    potModel: "R80",
    potColor: "",
    potSrc: "",
    totQtd: "",
  });

  const potColors = formData.capsules.pot.colors[selected.potModel];
  const lidColors = formData.capsules.lid.colors[selected.lidModel];

  const handleSelectPot = (color: string, src: string) => {
    setSelected({ ...selected, potColor: color, potSrc: src });
  };

  const handleSelectPotModel = (name: string) => {
    let potModel = "" as "R80" | "R170" | "T100";
    switch (name) {
      case "R80":
        potModel = "R80";
        break;
      case "R170":
        potModel = "R170";
        break;
      case "T100":
        potModel = "T100";
        break;
      default:
        break;
    }

    setSelected({
      ...selected,
      potModel,
      potSrc: formData.capsules.pot.colors[potModel][0].src,
      potColor: formData.capsules.pot.colors[potModel][0].color,
    });
  };

  const handleSelectLid = (color: string, src: string) => {
    setSelected({ ...selected, lidColor: color, lidSrc: src });
  };

  const handleSelectLidModel = (name: string) => {
    let lidModel = "" as "lisa" | "flipTop";

    switch (name) {
      case "lisa":
        lidModel = "lisa";
        break;
      case "flipTop":
        lidModel = "flipTop";
        break;
      default:
        lidModel = "lisa";
        break;
    }

    setSelected({
      ...selected,
      lidModel,
      lidColor: formData.capsules.lid.colors[lidModel][0].color,
      lidSrc: formData.capsules.lid.colors[lidModel][0].src,
    });
  };

  const handleSelectTotalQtd = (qtdValue: string) => {
    setSelected({ ...selected, totQtd: qtdValue });
  };

  useEffect(() => {
    setSelected({
      ...selected,
      lidColor: lidColors[0].color,
      lidSrc: lidColors[0].src,
      potSrc: potColors[0].src,
      potColor: potColors[0].color,
    });
  }, []);

  const handleNextStep = () => {
    const { lidColor, lidModel, lidSrc, potColor, potModel, potSrc, totQtd } =
      selected;

    const isValidLid =
      lidColor && ["flipTop", "lisa"].includes(lidModel) && lidSrc;
    const isValidPot =
      potColor && ["R170", "R80", "T100"].includes(potModel) && potSrc;
    const isValidQtd = !!totQtd;

    if (!isValidLid || !isValidPot || !isValidQtd) return;

    setFormState((prevState) => ({
      ...prevState,
      modelDetails: {
        color: lidColor,
        model: lidModel,
        extra: {
          color: potColor,
          model: potModel,
        },
        totalQtd: totQtd,
        preview: selectedCombinatation,
      },
      step: 6,
    }));
  };


  const selectedCombinatation = `/capsule/combinacoes/${selected.lidModel}-${selected.lidColor}-${selected.potModel.toLocaleLowerCase()}-${selected.potColor}.png`;

  return (
    <div className="space-y-4 py-4">
      <div className="border border-neutral-200 rounded-xl px-6 pt-6 pb-10 bg-white space-y-4 divide-y-2 divide-neutral-100">
        {/* Capsula */}
        <div className="space-y-6">
          <h2 className="text-base sm:text-xl font-medium flex items-start sm:items-center gap-2">
          <img src="/fronty-icon.png" width={20} height={20} alt="Fronty Icon" className="mt-1 sm:mt-0"/>
            Escolha o modelo e cor do pote e da tampa
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 py-4">
            {/* Tampas */}
            <div className="flex flex-col items-center gap-8">
              {/* MODELOs */}
              <div className="flex items-center gap-4 justify-center">
                {formData.capsules.lid.models.map(
                  ({ label, name, src }, index) => (
                    <div
                      className="flex flex-col items-center gap-2"
                      key={index}
                    >
                      <label
                        htmlFor={name}
                        className={`p-1 w-[70px] h-[70px] flex flex-col items-center justify-center rounded-lg cursor-fronty-pointer font-medium text-center text-sm hover:-translate-y-2  ease transition-all ${selected.lidModel === name ? "bg-blue-600 text-white" : "bg-white border border-neutral-200 text-neutral-800"}`}
                      >
                        <img src={src} alt={label} className="object-cover" />
                        <input
                          type="radio"
                          id={name}
                          value={name}
                          className="sr-only"
                          onClick={() => handleSelectLidModel(name)}
                        />
                      </label>

                      <span className="text-center w-full text-sm sm:text-base">
                        {label}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-1 place-items-center gap-8">
                {/* OPÇOES */}
                <div className="flex flex-col justify-center items-center gap-8">
                  <img
                    src={selected.lidSrc}
                    alt="capsula"
                    className="w-72 h-72 object-contain bg-neutral-100 rounded-lg p-3"
                  />
                  <span className="text-sm capitalize font-semibold ml-6 sm:text-lg">
                    Tampa {selected.lidColor}
                  </span>
                </div>

                {/* CORES */}
                <div className="flex items-center justify-center flex-wrap gap-4">
                  {lidColors.map(({ color, src, colorCode }, index) => {
                    return (
                      <button
                        key={index}
                        className={`w-7 h-7 rounded-full border-4 shadow-lg p-1 border-neutral-200  cursor-fronty-pointer transition-all ${selected.lidColor === color && "scale-125"}`}
                        onClick={() => handleSelectLid(color, src)}
                        style={{ backgroundColor: colorCode }}
                      >
                        {color === "personalizada" && <CircleHalf size={20} className="relative -left-1 -top-1"/>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Potes */}
            <div className="flex flex-col items-center gap-8">
              {/* Modelos */}
              <div className="grid grid-cols-3 gap-4">
                {formData.capsules.pot.models.map(
                  ({ label, name, src }, index) => (
                    <div className="flex flex-col items-center gap-2">
                      <label
                        key={index}
                        htmlFor={name}
                        className={`p-2 w-[70px] h-[70px] flex flex-col items-center justify-center rounded-lg cursor-fronty-pointer font-medium text-center text-sm hover:-translate-y-2 ease transition-all ${selected.potModel === name ? "bg-blue-600 text-white" : "bg-white border border-neutral-200 text-neutral-800"}`}
                      >
                        <img
                          src={src}
                          alt={label}
                          className="object-contain w-full h-full"
                        />
                        <input
                          type="radio"
                          id={name}
                          value={name}
                          className="sr-only"
                          onClick={() => handleSelectPotModel(name)}
                        />
                      </label>
                      <span className="text-center w-full text-sm sm:text-base">
                        {label}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* Potes selecionados */}
              <div className="grid grid-cols-1 place-items-center gap-8">
                <div className="flex flex-col items-center gap-8">
                  <img
                    src={selected.potSrc}
                    alt="capsula"
                    className="p-3 w-72 h-72 object-contain bg-neutral-100 rounded-lg"
                  />
                  <span className="text-base capitalize font-semibold ml-6 sm:text-lg">
                    {selected.potColor}
                  </span>
                </div>

                <div className="flex items-center flex-wrap justify-center gap-4">
                  {potColors.map(({ color, src, colorCode }) => {
                    return (
                      <button
                        className={`w-7 h-7 rounded-full border-4 shadow-lg p-1 border-neutral-200  cursor-fronty-pointer transition-all ${selected.potColor === color && "scale-125"}`}
                        style={{ backgroundColor: colorCode }}
                        onClick={() => handleSelectPot(color, src)}
                      >
                        {color === "personalizada" && <CircleHalf size={20} className="relative -left-1 -top-1"/>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Resumo */}
            <div className="flex flex-col justify-center items-center gap-8 sm:col-span-2 lg:col-span-1">
              <div className="sm:h-[94px] flex justify-center items-center">
                <h2 className="text-base font-semibold text-blue-600  border rounded-lg border-neutral-200 py-5 px-4">Pre-visualização:</h2>
              </div>

              <div className="lg:h-[416px]">
                <img
                  src={selectedCombinatation}
                  alt="Modelo selecionado"
                  className="bg-neutral-100 rounded-lg w-72"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-neutral-200 rounded-xl px-6 pt-6 pb-10 bg-white space-y-4 divide-y-2 divide-neutral-100">
        {/* Capsula */}
        <div className="space-y-6">
          <h2 className="text-base sm:text-xl font-medium flex items-start sm:items-center gap-2">
            <Nut size={24} weight="bold" className="text-blue-600" />
            Escolha a quantidade que deseja orçar:
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {formData.capsules.totQtd.map((qtd, index) => (
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
                  <span className=" font-semibold text-center text-sm sm:text-lg">
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
          type="button"
          className="bg-blue-600 text-white py-3 px-6 text-sm rounded-lg disabled:opacity-50 flex items-center gap-2"
          onClick={handleNextStep}
        >
          Próximo
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
