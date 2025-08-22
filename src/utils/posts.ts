import { getCollection, type CollectionEntry } from 'astro:content'

/**
 * Get all posts, sorted by publication date
 */
export async function getSortedPosts() {
  const posts = await getCollection('posts')
  return posts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )
}
