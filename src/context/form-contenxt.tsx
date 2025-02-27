'use client'

import { Icon } from "@phosphor-icons/react";
import { createContext, useContext, useState } from "react";

interface FormStep {
  username: string;
  whatsapp: string;
  step: number;
  productType: "encapsulado" | "soluvel" | "liquido" | "cosmetico" | null;
  niche: {
    name: string;
    category: string | undefined;
    icon: Icon | undefined;
    receips: {
      name: string;
      label: string;
      src: string;
    }[];
  };
  receipe: {
    label: string;
    name: string;
  };

  productDetails: {
    qtd: {
      value: string;
      label: string;
    };
    measurement: string; //ML, QTD, MLS, G
    color?: {
      name: string;
      label: string;
    };
    flavor?: {
      name: string;
      label: string;
    };
  };
  modelDetails: {
    model: string; //Pote, Tampa, Frasco
    color: string;
    extra?: {
      model: string;
      color: string;
    };
    totalQtd: string;
    preview: string;
  };
  formSubmitted: boolean
}

interface FormContextType {
  formState: FormStep;
  setFormState: React.Dispatch<React.SetStateAction<FormStep>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormStep>({
    username: "",
    whatsapp: "",
    step: 0,
    productType: null,
    niche: {
      name: "",
      category: undefined,
      icon: undefined,
      receips: [],
    },
    receipe: {
      label: "",
      name: "",
    },
    productDetails: {
      qtd: {
        value: "",
        label: "",
      },
      measurement: "", //ML, QTD, MLS, G
      color: {
        label: "",
        name: "",
      },
      flavor: { name: "", label: "" },
    },
    modelDetails: {
      model: "", //Pote, Tampa, Frasco
      color: "",
      extra: {
        model: "",
        color: "",
      },
      totalQtd: "",
      preview: "",
    },
    formSubmitted: false
  });

  console.log(formState)

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};
