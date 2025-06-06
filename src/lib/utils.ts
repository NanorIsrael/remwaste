import { Item } from "@/types/product";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculatePrice = (item: Item) => {
  const vatMultiplier = 1 + (item.vat || 0) / 100;
  const priceWithVat = item.price_before_vat * vatMultiplier;
  return priceWithVat.toFixed(2);
};
