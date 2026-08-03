import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const faq = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, faq };
