import { certification } from "./certification";
import { events } from "./events";
import { feeds } from "@/data/feeds";

export type Developer = (
  | {
      type: "certification";
      category: "aws" | "gcp" | "oci" | "network";
      url?: string;
    }
  | {
      type: "blog";
      category: "qiita" | "zenn";
      url: string;
    }
  | {
      type: "event";
      url: string;
      media?: { title?: string; url: string };
      slide?: { title: string; url: string };
    }
) & { title: string; date: string };

export const activities: Developer[] = [];
