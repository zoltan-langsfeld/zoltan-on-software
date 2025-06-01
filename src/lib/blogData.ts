import { getCollection, type CollectionEntry } from "astro:content";

export async function getAllPosts() : Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}

export async function getRecentPosts(count: number) : Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");
  return posts.slice(0, count);
}




