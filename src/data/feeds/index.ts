import developersio from "./developersio.json";
import type { Developer } from "@/data/activities";

export const feeds: Developer[] = [
  ...developersio.items.map((item) => ({
    type: "blog" as const,
    category: "developersio" as const,
    url: item.url,
    title: item.title,
    date: item.createdAt,
  })),
];
