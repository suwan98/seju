import {Posts} from "contentlayer/generated";
import Link from "next/link";
import getLastSegment from "../../utils/getLastSegment";
import Image from "next/image";
import ResponsiveImage from "../common/ResponsiveImage";

interface PostListProps {
  posts: Posts[];
}

function PostList({posts}: PostListProps) {
  return (
    <div className="flex flex-col grow">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/posts/${post.category}/${getLastSegment(
            post._raw.flattenedPath
          )}`}
          passHref>
          <div className="font-extrabold mt-2 transition text-black dark:text-white hover:text-blue-400 dark:hover:text-blue-400 flex justify-between items-center px-4 py-8 border rounded-md my-8">
            <div className="flex flex-col order-1">
              <span>{post.title}</span>
              <span className="font-extralight text-base">{post.category}</span>
              <div className="font-medium text-xs transition text-gray-500 dark:text-gray-300">
                {post.date}
              </div>
            </div>
            <div className="order-2 relative min-w-[15rem] min-h-[10rem] max-h-[15rem]">
              <ResponsiveImage src={post.image!} alt="" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostList;
