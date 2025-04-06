import { defineCollection, z } from "astro:content"

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    date: z.date(),
    isDraft: z.boolean().optional(),
  }),
})

export const collections = {
  posts,
}
