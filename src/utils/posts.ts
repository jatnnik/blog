import { getCollection, type CollectionEntry } from 'astro:content'

interface GetSortedPostsOpts {
  limit?: number
}

/**
 * Get all posts, sorted by publication date
 */
export async function getSortedPosts(opts: GetSortedPostsOpts = {}) {
  const posts = await getCollection('posts')
  const sortedPosts = posts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )

  if (opts.limit) {
    return sortedPosts.slice(0, opts.limit)
  }

  return sortedPosts
}
