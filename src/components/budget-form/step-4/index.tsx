'use client'

import { useFormContext } from "../../../context/form-contenxt";
import { Step4Capsule } from "./options/capsule";
import { Step4Comestics } from "./options/comestics";
import { Step4Liquid } from "./options/liquid";
import { Step4Soluble } from "./options/soluble";

export function Step4() {
  const { formState } = useFormContext();

  return (
    <div>
      {formState.productType === "encapsulado" && <Step4Capsule />}
      {formState.productType === "liquido" && <Step4Liquid />}
      {formState.productType === "soluvel" && <Step4Soluble />}
      {formState.productType === "cosmetico" && <Step4Comestics />}
    </div>
  );
}
