import type { Developer } from "@/data/activities";

export const chunkByYear = (activities: Developer[]) => {
  const chunked = new Map<number, Developer[]>();

  for (const Developer of activities) {
    const year = new Date(Developer.date).getFullYear();
    const targetDeveloper = chunked.get(year) ?? [];
    chunked.set(year, [...targetDeveloper, Developer]);
  }

  return chunked;
};
