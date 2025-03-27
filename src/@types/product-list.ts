import { Icon } from "@phosphor-icons/react";

export interface ProductList {
  Icon: Icon;
  category: string;
  options: {
    name: string;
    description?: string;
    receips: {
      name: string;
      label: string;
      src: string;
    }[];
    iconSrc?: string
  }[];
}
