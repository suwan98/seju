import METADATA from "@/constants/METADATA";
import getPosts from "@/lib/gegtPosts";
import {MetadataRoute} from "next";

function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts.map(({category, date}) => ({
    url: `${METADATA.meta.url}/posts/${category}`,
    lastModified: date,
  }));

  const routes = ["", "/posts"].map((route) => ({
    url: `${METADATA.meta.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...posts, ...routes];
}

export default sitemap;
