import {
  Barbell,
  Fire,
  GearSix,
  HairDryer,
  Heart,
  TrendUp,
} from "@phosphor-icons/react";


export const formData = {
  productTypes: [
    {
      name: "encapsulado",
      label: "Encapsulado",
      src: "/capsule/combinacoes/flipTop-azul-r80-branca.png",
    },
    { name: "liquido", label: "Líquido", src: "/liquid/frasco-preto.png" },
    { name: "soluvel", label: "Solúvel", src: "/soluble/pote-branco.png" },
    {
      name: "cosmetico",
      label: "Cosmético",
      src: "/comestics/comestic-product-type.png",
    },
  ],

  capsules: {
    niches: [
      {
        category: "Saúde",
        Icon: Heart,
        options: [
          {
            name: "Ansiedade",
            iconSrc: "/icones/ansiedade.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/ansiedade-1.png",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/ansiedade-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Anti Estresse",
            iconSrc: "/icones/Anti Estresse.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/anti-estresse.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Anti Tabagismo",
            iconSrc: "/icones/Anti Tabagismo.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/anti-tabagismo.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Audição",
            iconSrc: "/icones/Audição.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/audicao.png",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Diabetes",
            iconSrc: "/icones/Diabetes.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/diabetes-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/diabetes-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Fórmula 3",
                src: "/receips/diabetes-3.jpg",
              },
            ],
          },
          {
            name: "Digestão",
            iconSrc: "/icones/Digestão.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/digestao-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Dores Articulares",
            iconSrc: "/icones/Dores Articulação.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/dores-articulares-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/dores-articulares-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/dores-articulares-3.jpg",
              },
            ],
          },
          {
            name: "Enxaqueca",
            iconSrc: "/icones/enxaqueca.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/enxaqueca.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Estimulante Sexual",
            iconSrc: "/icones/Estimulante Sexual.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/estimulante-sexual-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/estimulante-sexual-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/estimulante-sexual-3.jpg",
              },
              {
                name: "Formula 4",
                label: "Fórmula 4",
                src: "/receips/estimulante-sexual-4.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Fertilidade",
            iconSrc: "/icones/Fertilidade.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/fertilidade-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Fígado",
            iconSrc: "/icones/figado.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/figado-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/figado-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Foco, Memória & Concentração",
            iconSrc: "/icones/Foco, Memória & Concentração.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/foco-memoria-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/foco-memoria-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Gastrite",
            iconSrc: "/icones/gastrite.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/gastrite-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Hemorróidas",
            iconSrc: "/icones/hemorroidas.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/hemorroidas-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Hipertensão",
            iconSrc: "/icones/hipertensao.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/hipertensao-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Imunidade",
            iconSrc: "/icones/imunidade.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/imunidade-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/imunidade-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Próstata",
            iconSrc: "/icones/prostata.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/prostata-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/prostata-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/prostata-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Ressaca",
            iconSrc: "/icones/Ressaca.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/ressaca-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/ressaca-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Sono",
            iconSrc: "/icones/sono.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/sono-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/sono-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/sono-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "TPM & Menopausa",
            iconSrc: "/icones/menopausa.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/tpm-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/tpm-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Visão",
            iconSrc: "/icones/visao.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/visao-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/visao-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
      {
        category: "Emagrecimento",
        Icon: Barbell,
        options: [
          {
            name: "Digestivo",
            iconSrc: "/icones/Digestão.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/digestao-1",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Diurético",
            iconSrc: "/icones/Diuretico.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/diuretico-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Queima de Gordura",
            iconSrc: "/icones/Queima de Gordura.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/queima-gordura-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/queima-gordura-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/queima-gordura-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Controle de Apetite",
            iconSrc: "/icones/controle apetite.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/controle-apetite-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
      {
        category: "Beleza",
        Icon: HairDryer,
        options: [
          {
            name: "Ácido Hialurônico",
            iconSrc: "/icones/Ácido Hialurônico.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/acido-hialuronico-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/acido-hialuronico-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/acido-hialuronico-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Acnes/Manchas na Pele",
            iconSrc: "/icones/AcnesManchas na Pele.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/acne-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/acne-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Anti Envelhecimento e Rugas",
            iconSrc: "/icones/Anti Envelhecimento e Rugas.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/anti-envelhecimento-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Autobronzeador",
            iconSrc: "/icones/Autobronzeador.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/autobronzeador-1",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/autobronzeador-2",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Cabelo, Pele e Unha",
            iconSrc: "/icones/cabelo-pele-unha.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/cabelo-pele-unha-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/cabelo-pele-unha-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/cabelo-pele-unha-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Celulite",
            iconSrc: "/icones/Celulite.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/celulite-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/celulite-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Colágeno",
            iconSrc: "/icones/Colágeno.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/colageno-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/colageno-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Queda Capilar",
            iconSrc: "/icones/Queda Capilar.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/queda-capilar-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/queda-capilar-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Varizes",
            iconSrc:"/icones/varizes.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/varizes-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/varizes-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
      {
        category: "Performance",
        Icon: TrendUp,
        options: [
          {
            name: "Creatina",
            iconSrc: "/icones/Creatina.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/creatina-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Pré-Treino",
            iconSrc: "/icones/Pré-Treino.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/pre-treino-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/pre-treino-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/pre-treino-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "BCAA",
            iconSrc: "/icones/BCAA.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/bcaa-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Glutamina",
            iconSrc: "/icones/GLUTAMINA.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/glutamina-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Termogênico",
            iconSrc: "/icones/Termogênico.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/termogenico-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/termogenico-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Colágeno Verisol",
            iconSrc: "/icones/Colágeno Verisol.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/colageno-verisol-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/colageno-verisol-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Polivitamínico",
            iconSrc: "/icones/Polivitamínico.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/polivitaminico.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Vitaminas",
            iconSrc: "/icones/vitaminas.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Minerais",
            iconSrc: "/icones/minerais.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },

      {
        category: "Personalizado",
        Icon: GearSix,
        options: [
          {
            name: "Fórmula personalizada",
            iconSrc: "/icones/Fórmula personalizada.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
    ],
    colors: [
      {
        color: "transparente",
        src: "/capsule/capsules/transparente.png",
        colorCode: "oklch(0.922 0 0)",
        label: "Cápsula transparente",
      },
      {
        color: "branca",
        src: "/capsule/capsules/branca.png",
        colorCode: "#ffff",
        label: "Cápsula branca",
      },
      {
        color: "preta",
        src: "/capsule/capsules/preta.png",
        label: "Cápsula preta",
        colorCode: "#000",
      },
      {
        color: "vermelha",
        src: "/capsule/capsules/vermelha.png",
        colorCode: "oklch(0.577 0.245 27.325)",
        label: "Cápsula vermelha",
      },
      {
        color: "laranja",
        src: "/capsule/capsules/laranja.png",
        colorCode: "oklch(0.646 0.222 41.116)",
        label: "Cápsula laranja",
      },
      {
        color: "roxa",
        src: "/capsule/capsules/roxa.png",
        colorCode: "oklch(0.558 0.288 302.321)",
        label: "Cápsula roxa",
      },
      {
        color: "personalizada",
        src: "/capsule/capsules/transparente.png",
        colorCode: "#ffff",
        label: "Cápsula personalizada",
      },
    ],
    lid: {
      models: [
        { name: "lisa", label: "Lisa", src: "/capsule/tampa-lisa.jpg" },
        {
          name: "flipTop",
          label: "Flip Top",
          src: "/capsule/tampa-flip-top.png",
        },
      ],
      colors: {
        flipTop: [
          {
            color: "transparente",
            label: "Transparente",
            src: "/capsule/tampas/flip-top-transparente.png",
            colorCode: "oklch(0.922 0 0)",
          },
          {
            color: "branca",
            label: "Branca",
            src: "/capsule/tampas/flip-top-branca.png",
            colorCode: "#ffff",
          },
          {
            color: "preta",
            label: "Preta",
            src: "/capsule/tampas/flip-top-preta.png",
            colorCode: "#000",
          },
          {
            color: "azul",
            label: "Azul",
            src: "/capsule/tampas/flip-top-azul.png",
            colorCode: "oklch(0.546 0.245 262.881)",
          },
          {
            color: "vermelha",
            label: "Vermelha",
            src: "/capsule/tampas/flip-top-vermelha.png",
            colorCode: "oklch(0.577 0.245 27.325)",
          },
          {
            color: "roxa",
            label: "Roxa",
            src: "/capsule/tampas/flip-top-roxa.png",
            colorCode: "oklch(0.558 0.288 302.321)",
          },
          {
            color: "personalizada",
            label: "Personalizada",
            src: "/capsule/tampas/flip-top-transparente.png",
            colorCode: "#ffff",
          },
        ],
        lisa: [
          {
            color: "branca",
            label: "Branca",
            src: "/capsule/tampas/tampa-branca.png",
            colorCode: "#ffff",
          },
          {
            color: "preta",
            label: "Preta",
            src: "/capsule/tampas/tampa-preta.png",
            colorCode: "#000",
          },
          {
            color: "azul",
            label: "Azul",
            src: "/capsule/tampas/tampa-azul.png",
            colorCode: "oklch(0.546 0.245 262.881)",
          },
          {
            color: "vermelha",
            label: "Vermelha",
            src: "/capsule/tampas/tampa-vermelha.png",
            colorCode: "oklch(0.577 0.245 27.325)",
          },
          {
            color: "roxa",
            label: "Roxa",
            src: "/capsule/tampas/tampa-roxa.png",
            colorCode: "oklch(0.558 0.288 302.321)",
          },
          {
            color: "personalizada",
            label: "Personalizada",
            src: "/capsule/tampas/tampa-branca.png",
            colorCode: "#ffff",
          },
        ],
      },
    },
    pot: {
      models: [
        {
          name: "R80",
          label: "R80",
          src: "/capsule/potes/r80-preto.png",
        },
        {
          name: "R170",
          label: "R170",
          src: "/capsule/potes/r170-preto.png",
        },
        {
          name: "T100",
          label: "T100",
          src: "/capsule/potes/t100-preto.png",
        },
      ],
      colors: {
        R80: [
          {
            color: "preta",
            src: "/capsule/potes/r80-preto.png",
            label: "Preta",
            colorCode: "#000",
          },
          {
            color: "transparente",
            src: "/capsule/potes/r80-transparente.png",
            colorCode: "oklch(0.922 0 0)",
          },
          {
            color: "branca",
            src: "/capsule/potes/r80-branco.png",
            colorCode: "#ffff",
          },
          {
            color: "personalizada",
            src: "/capsule/potes/r80-branco.png",
            colorCode: "#ffff",
          },
        ],
        R170: [
          {
            color: "preta",
            src: "/capsule/potes/r170-preto.png",
            label: "Preta",
            colorCode: "#000",
          },
          {
            color: "branca",
            src: "/capsule/potes/r170-branco.png",
            colorCode: "#fff",
          },
          {
            color: "transparente",
            src: "/capsule/potes/r170-transparente.png",
            colorCode: "oklch(0.922 0 0)",
          },

          {
            color: "personalizada",
            src: "/capsule/potes/r170-branco.png",
            colorCode: "#fff",
          },
        ],
        T100: [
          {
            color: "preta",
            src: "/capsule/potes/t100-preto.png",
            label: "Preta",
            colorCode: "#000",
          },
          {
            color: "transparente",
            src: "/capsule/potes/t100-transparente.png",
            colorCode: "oklch(0.922 0 0)",
          },
          {
            color: "branca",
            src: "/capsule/potes/t100-branco.png",
            colorCode: "#fff",
          },
          {
            color: "personalizada",
            src: "/capsule/potes/t100-branco.png",
            colorCode: "#fff",
          },
        ],
      },
    },
    qtd: {
      unit: "un",
      options: [
        { label: "30 Cápsulas", value: "30" },
        { label: "60 Cápsulas", value: "60" },
        { label: "Duas Opções", value: "two-options" },
      ],
    },
    totQtd: ["300", "500", "1000", "2000", "5000", "all"],
  },

  solubles: {
    niches: [
      {
        category: "Performance",
        Icon: TrendUp,
        options: [
          {
            name: "Creatina",
            iconSrc: "/icones/Creatina.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/creatina-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Pré-Treino",
            iconSrc: "/icones/Pré-Treino.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/pre-treino-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/pre-treino-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/pre-treino-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "BCAA",
            iconSrc: "/icones/BCAA.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/bcaa-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Glutamina",
            iconSrc: "/icones/Fórmula personalizada.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/glutamina-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Termogênico",
            iconSrc: "/icones/Termogênico.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/termogenico-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/termogenico-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Colágeno Verisol",
            iconSrc: "/icones/Colágeno Verisol.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/colageno-verisol-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/colageno-verisol-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Fórmula Personalizada",
            iconSrc: "/icones/Fórmula personalizada.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
    ],
    qtd: {
      unit: "g",
      options: [
        { label: "30g", value: "30" },
        { label: "300g", value: "300" },
        { label: "Duas opções", value: "two-options" },
      ],
    },
    flavors: [
      { name: "abacaxi", label: "Abacaxi" },
      { name: "frutas-vermelhas", label: "Frutas vermelhas" },
      { name: "laranja", label: "Laranja" },
      { name: "maracuja", label: "Maracujá" },
      { name: "morango", label: "Morango" },
      { name: "uva", label: "Uva" },
      { name: "sem-sabor", label: "Sem sabor" },
    ],
    potColors: [
      {
        label: "Pote PEAD Branco",
        src: "/soluble/pote-branco.png",
        color: {
          bg: "#ffff",
          name: "branca",
        },
      },
      {
        label: "Pote PEAD Preto",
        src: "/soluble/pote-preto.png",
        color: {
          bg: "#000",
          name: "preto",
        },
      },
    ],
    totQtd: ["300", "500", "1000", "2000", "5000", "all"],
  },

  liquid: {
    niches: [
      {
        category: "Saúde",
        Icon: Heart,
        options: [
          {
            name: "Ansiedade",
            iconSrc: "/icones/ansiedade.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/ansiedade-1.png",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/ansiedade-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Anti Estresse",
            iconSrc: "/icones/Anti Estresse.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/anti-estresse.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Anti Tabagismo",
            iconSrc: "/icones/Anti Tabagismo.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
         
          {
            name: "Audição",
            iconSrc: "/icones/Audição.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/audicao.png",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Diabetes",
            iconSrc: "/icones/Diabetes.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/diabetes-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/diabetes-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Fórmula 3",
                src: "/receips/diabetes-3.jpg",
              },
            ],
          },
          {
            name: "Digestão",
            iconSrc: "/icones/Digestão.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/digestao-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Dores Articulares",
            iconSrc: "/icones/Dores Articulação.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/dores-articulares-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/dores-articulares-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/dores-articulares-3.jpg",
              },
            ],
          },
          {
            name: "Enxaqueca",
            iconSrc: "/icones/enxaqueca.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/enxaqueca.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Estimulante Sexual",
            iconSrc: "/icones/Estimulante Sexual.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/estimulante-sexual-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/estimulante-sexual-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/estimulante-sexual-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Fertilidade",
            iconSrc: "/icones/Fertilidade.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/fertilidade-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Fígado",
            iconSrc: "/icones/figado.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/figado-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/figado-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Foco, Memória & Concentração",
            iconSrc: "/icones/Foco, Memória & Concentração.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/foco-memoria-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/foco-memoria-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Gastrite",
            iconSrc: "/icones/gastrite.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/gastrite-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Hemorróidas",
            iconSrc: "/icones/hemorroidas.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/hemorroidas-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Hipertensão",
            iconSrc: "/icones/hipertensao.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/hipertensao-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Imunidade",
            iconSrc: "/icones/imunidade.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/imunidade-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/imunidade-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Próstata",
            iconSrc: "/icones/prostata.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/prostata-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/prostata-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/prostata-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Ressaca",
            iconSrc: "/icones/Ressaca.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/ressaca-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/ressaca-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Sono",
            iconSrc: "/icones/sono.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/sono-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/sono-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/sono-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "TPM & Menopausa",
            iconSrc: "/icones/menopausa.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/tpm-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/tpm-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Visão",
            iconSrc: "/icones/visao.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/visao-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/visao-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
      {
        category: "Emagrecimento",
        Icon: Barbell,
        options: [
          {
            name: "Digestivo",
            iconSrc: "/icones/Digestão.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/digestao-1",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Diurético",
            iconSrc: "/icones/Diuretico.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/diuretico-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Queima de Gordura",
            iconSrc: "/icones/Queima de Gordura.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/queima-gordura-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/queima-gordura-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/queima-gordura-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Controle de Apetite",
            iconSrc: "/icones/controle apetite.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/controle-apetite-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
      {
        category: "Beleza",
        Icon: HairDryer,
        options: [
          {
            name: "Ácido Hialurônico",
            iconSrc: "/icones/Ácido Hialurônico.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/acido-hialuronico-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/acido-hialuronico-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/acido-hialuronico-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Acnes/Manchas na Pele",
            iconSrc: "/icones/AcnesManchas na Pele.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/acne-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/acne-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Anti Envelhecimento e Rugas",
            iconSrc: "/icones/Anti Envelhecimento e Rugas.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/anti-envelhecimento-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Autobronzeador",
            iconSrc: "/icones/Autobronzeador.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/autobronzeador-1",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/autobronzeador-2",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Cabelo, Pele e Unha",
            iconSrc: "/icones/cabelo-pele-unha.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/cabelo-pele-unha-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/cabelo-pele-unha-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/cabelo-pele-unha-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Celulite",
            iconSrc: "/icones/Celulite.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/celulite-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/celulite-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Colágeno",
            iconSrc: "/icones/Colágeno.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/colageno-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/colageno-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Queda Capilar",
            iconSrc: "/icones/Queda Capilar.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/queda-capilar-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/queda-capilar-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Varizes",
            iconSrc: "/icones/varizes.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/varizes-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/varizes-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
      {
        category: "Performance",
        Icon: TrendUp,
        options: [
          {
            name: "Creatina",
            iconSrc: "/icones/Creatina.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/creatina-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Pré-Treino",
            iconSrc: "/icones/Pré-Treino.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/pre-treino-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/pre-treino-2.jpg",
              },
              {
                name: "Formula 3",
                label: "Fórmula 3",
                src: "/receips/pre-treino-3.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "BCAA",
            iconSrc: "/icones/BCAA.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/bcaa-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Glutamina",
            iconSrc: "/icones/Fórmula personalizada.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/glutamina-1.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Termogênico",
            iconSrc: "/icones/Termogênico.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/termogenico-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/termogenico-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Colágeno Verisol",
            iconSrc: "/icones/Colágeno Verisol.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/colageno-verisol-1.jpg",
              },
              {
                name: "Formula 2",
                label: "Fórmula 2",
                src: "/receips/colageno-verisol-2.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Polivitamínico",
            iconSrc: "/icones/Polivitamínico.svg",
            receips: [
              {
                name: "Formula 1",
                label: "Fórmula 1",
                src: "/receips/polivitaminico.jpg",
              },
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Vitaminas",
            iconSrc: "/icones/vitaminas.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Minerais",
            iconSrc: "/icones/minerais.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },

      {
        category: "Personalizado",
        Icon: GearSix,
        options: [
          {
            name: "Fórmula personalizada",
            iconSrc: "/icones/Fórmula personalizada.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
    ],
    qtd: {
      unit: "mls",
      options: [
        {
          label: "30 mls",
          value: "30",
        },
      ],
    },
    flavors: [
      { name: "abacaxi", label: "Abacaxi" },
      { name: "frutas-vermelhas", label: "Frutas vermelhas" },
      { name: "laranja", label: "Laranja" },
      { name: "maracuja", label: "Maracujá" },
      { name: "morango", label: "Morango" },
      { name: "uva", label: "Uva" },
      { name: "personalizado", label: "Personalizado" },
    ],
    lidColors: [
      {
        label: "Frasco Âmbar c/Tampa Branca",
        src: "/liquid/frasco-branco.png",
        color: {
          bg: "#ffff",
          name: "preta",
        },
      },
      {
        label: "Frasco Âmbar c/Tampa Preta",
        src: "/liquid/frasco-preto.png",
        color: {
          bg: "#000",
          name: "branca",
        },
      },
    ],
    totQtd: ["300", "500", "1000", "2000", "5000", "all"],
  },

  comestics: {
    niches: [
      {
        category: "Capilar",
        Icon: Fire,
        options: [
          {
            name: "Shampoo",
            iconSrc: "/icones/SHAMPOO.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Condicionador",
            iconSrc: "/icones/CONDICIONADOR.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Máscaras",
            iconSrc: "/icones/MASCARAS.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Cremes",
            iconSrc: "/icones/CREMES.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Finalizador",
            iconSrc: "/icones/FINALIZADOR.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Tônico",
            iconSrc: "/icones/TONICO.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Produto Personalizado",
            iconSrc: "/icones/PRODUTO PERSONALIZADO.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
      {
        category: "Corporal",
        Icon: Fire,
        options: [
          {
            iconSrc: "/icones/Creme Dores Musculares.svg",
            name: "Creme Dores Musculares",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Gel Redutor de Medidas",
            iconSrc: "/icones/Gel Redutor de Medidas.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Creme Anti Manchas",
            iconSrc: "/icones/Creme Anti Manchas.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Creme Clareador",
            iconSrc: "/icones/Creme Clareador.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Gel Anti Celulite",
            iconSrc: "/icones/Gel Anti Celulite.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Produto Personalizado",
            iconSrc: "/icones/PRODUTO PERSONALIZADO.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
      {
        category: "Skin Care",
        Icon: Fire,
        options: [
          {
            name: "Sérum Facial",
            iconSrc: "/icones/Sérum Facial.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Creme Anti Acne",
            iconSrc: "/icones/Creme Anti Acne.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Creme Anti Manchas",
            iconSrc: "/icones/Creme Anti Manchas.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Produto Personalizado",
            iconSrc: "/icones/PRODUTO PERSONALIZADO.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
      {
        category: "Sex Shop",
        Icon: Fire,
        options: [
          {
            name: "Gel Peniano",
            iconSrc: "/icones/Gel Peniano.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Creme para Massagem",
            iconSrc: "/icones/Creme para Massagem.svg",  
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
          {
            name: "Produto Personalizado",
            iconSrc: "/icones/PRODUTO PERSONALIZADO.svg",
            receips: [
              {
                name: "Personalizado",
                label: "Personalizada",
                src: "/receips/personalizada.jpg",
              },
            ],
          },
        ],
      },
    ],
    qtd: [
      {
        unit: "ml",
        options: [
          { label: "300ml", value: "30" },
          { label: "1L", value: "1000" },
          { label: "Duas opções", value: "two-options" },
        ],
        references: [
          "Shampoo",
          "Condicionador",
          "Cremes",
          "Produto Personalizado",
        ],
      },
      {
        unit: "g",
        options: [
          { label: "300g", value: "300" },
          { label: "500g", value: "500" },
          { label: "Duas opções", value: "two-options" },
        ],
        references: ["Máscaras"],
      },

      {
        unit: "ml",
        options: [
          { label: "60ml", value: "60" },
          { label: "100ml", value: "100" },
          { label: "Duas opções", value: "two-options" },
        ],
        references: ["Finalizador", "Tônico"],
      },
      {
        unit: "ml",
        options: [
          { label: "120ml", value: "120" },
          { label: "150ml", value: "150" },
          { label: "Duas opções", value: "two-options" },
        ],
        references: [
          "Creme Dores Musculares",
          "Sérum Facial",
          "Creme Anti Acne",
        ],
      },
      {
        unit: "g",
        options: [{ label: "250g", value: "250" }],
        references: [
          "Gel Redutor de Medidas",
          "Gel Anti Celulite",
          "Creme para Massagem",
        ],
      },
      {
        unit: "g",
        options: [
          { label: "100g", value: "100" },
          { label: "250g", value: "250" },
          { label: "Duas opções", value: "two-options" },
        ],
        references: ["Creme Anti Manchas"],
      },
      {
        unit: "ml",
        options: [
          { label: "50ml", value: "50" },
          { label: "100ml", value: "100" },
          { label: "Duas opções", value: "two-options" },
        ],
        references: ["Creme Clareador"],
      },
      {
        unit: "ml",
        options: [
          { label: "30ml", value: "30" },
          { label: "60ml", value: "60" },
          { label: "Duas opções", value: "two-options" },
        ],
        references: ["Creme Clareador"],
      },
      {
        unit: "ml",
        options: [
          { label: "30ml", value: "30" },
          { label: "50ml", value: "50" },
          { label: "Duas opções", value: "two-options" },
        ],
        references: ["Gel Peniano"],
      },
    ],

    totQtd: ["300", "500", "1000", "2000", "5000", "all"],
    modeColors: [
      {
        label: "Pote PEAD Branco",
        src: "/comestics/pote-1-branco.png",
        color: {
          bg: "#ffff",
          name: "branco",
        },
        references: ["Shampoo", "Condicionador", "Cremes"],
      },
      {
        label: "Pote PEAD Preto",
        src: "/comestics/pote-1-preto.png",
        color: {
          bg: "#000",
          name: "preto",
        },
        references: ["Shampoo", "Condicionador", "Cremes"],
      },
      {
        label: "Pote PEAD 2 Branco",
        src: "/comestics/pote-2-branco.png",
        color: {
          bg: "#ffff",
          name: "branco",
        },
        references: [
          "Máscaras",
          "Produto Personalizado",
          "Gel Redutor de Medidas",
          "Gel Anti Celulite",
          "Creme para Massagem",
        ],
      },
      {
        label: "Pote PEAD 2 Preto",
        src: "/comestics/pote-2-preto.png",
        color: {
          bg: "#000",
          name: "preto",
        },
        references: [
          "Máscaras",
          "Produto Personalizado",
          "Gel Redutor de Medidas",
          "Gel Anti Celulite",
          "Creme para Massagem",
        ],
      },
      {
        label: "Frasco Branco 1",
        src: "/comestics/frasco-1-branco.png",
        color: {
          bg: "#ffff",
          name: "branco",
        },
        references: ["Tônico"],
      },
      {
        label: "Frasco Preto 1",
        src: "/comestics/frasco-1-preto.png",
        color: {
          bg: "#000",
          name: "preto",
        },
        references: ["Tônico"],
      },
      {
        label: "Frasco Branco 2",
        src: "/comestics/frasco-2-branco.png",
        color: {
          bg: "#ffff",
          name: "branco",
        },
        references: ["Finalizador"],
      },
      {
        label: "Frasco Preto 2",
        src: "/comestics/frasco-2-preto.png",
        color: {
          bg: "#000",
          name: "preto",
        },
        references: ["Finalizador"],
      },
      {
        label: "Creme 1 Branco",
        src: "/comestics/creme-1-branco.png",
        color: {
          bg: "#ffff",
          name: "branco",
        },
        references: ["Creme Anti Manchas", "Creme Anti Acne"],
      },
      {
        label: "Creme 1 Preto",
        src: "/comestics/creme-1-preto.png",
        color: {
          bg: "#000",
          name: "preto",
        },
        references: ["Creme Anti Manchas", "Creme Anti Acne"],
      },
      {
        label: "Creme 2 Branco",
        src: "/comestics/creme-2-branco.png",
        color: {
          bg: "#ffff",
          name: "branco",
        },
        references: ["Creme Clareador"],
      },
      {
        label: "Creme 2 Preto",
        src: "/comestics/creme-2-preto.png",
        color: {
          bg: "#000",
          name: "preto",
        },
        references: ["Creme Clareador"],
      },
      {
        label: "Frasco 3 Branco",
        src: "/comestics/frasco-3-branco.png",
        color: {
          bg: "#ffff",
          name: "branco",
        },
        references: ["Sérum Facial"],
      },
      {
        label: "Frasco 3 Preto",
        src: "/comestics/frasco-3-preto.png",
        color: {
          bg: "#000",
          name: "preto",
        },
        references: ["Sérum Facial"],
      },
      {
        label: "Bisnaga 2 Branco",
        src: "/comestics/bisnaga-2-branco.png",
        color: {
          bg: "#ffff",
          name: "branco",
        },
        references: ["Gel Peniano"],
      },
      {
        label: "Bisnaga 2 Preto",
        src: "/comestics/bisnaga-2-preto.png",
        color: {
          bg: "#000",
          name: "preto",
        },
        references: ["Gel Peniano"],
      },
    ],
  },
};
