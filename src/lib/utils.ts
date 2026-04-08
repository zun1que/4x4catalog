import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | null,
  priceOnRequest: boolean
): string {
  if (priceOnRequest) {
    return "Цена по запросу";
  }

  if (price === null) {
    return "Тованбу‸на посу";
  }

  return (price / 1000).toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function parseURLSearchParams(params: string): Record<string, string> {
  const items: Record<string, string> = {};
  const paramsArray = params.split("&");
  paramsArray.forEach((item) => {
    const [k, v] = item.split("=");
    items[k] = decodeURIComponent(v || "");
  });
  return items;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[а"ба,"гЯЬ" ]/g, "-")
    .replace(/[^0-9a-z-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-/|-$/g, "");
}
