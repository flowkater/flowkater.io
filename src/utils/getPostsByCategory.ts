import type { CollectionEntry } from "astro:content";
import type { CategorySlug } from "@/constants";
import getSortedPosts from "./getSortedPosts";

const getPostsByCategory = (
  posts: CollectionEntry<"blog">[],
  category: CategorySlug
) =>
  getSortedPosts(posts.filter(post => post.data.category === category));

export default getPostsByCategory;
