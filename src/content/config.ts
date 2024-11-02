import { defineCollection, z } from "astro:content"

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    isDraft: z.boolean(),
  }),
})

export const collections = {
  posts,
}
