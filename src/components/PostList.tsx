import {posts} from "contentlayer/generated";
import Link from "next/link";

import getLastSegment from "../utils/getLastSegment";

interface PostListProps {
  posts: posts[];
}

function PostList({posts}: PostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/posts/${post.category}/${getLastSegment(
            post._raw.flattenedPath
          )}`}
          passHref
          className="w-full">
          <div className="font-extrabold text-xl sm:text-2xl mt-2 transition text-black dark:text-white hover:text-green-500 dark:hover:text-green-500">
            {post.title}
          </div>
          <div className="font-medium text-xs transition text-gray-500 dark:text-gray-300">
            {post.date}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostList;
