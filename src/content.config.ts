import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notas" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    badge: z.string(),
    variant: z.enum([
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "neutral",
    ]),
    image: z.string(),
    imageAlt: z.string(),
    summary: z.string(),
    publishedAt: z.date(),
  }),
});

export const collections = {
  notas,
};