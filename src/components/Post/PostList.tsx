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
    <div className="flex flex-col">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/posts/${post.category}/${getLastSegment(
            post._raw.flattenedPath
          )}`}
          passHref>
          <div className="mt-2 transition text-primaryColor bg-white  hover:text-blue-400 dark:hover:text-blue-400 flex justify-between items-center px-4 py-8 border rounded-lg my-8 bottom-shadow dark:bg-secondaryColor mobile:flex-col mobile:px-0 mobile:mx-12 gap-8">
            <div className="flex flex-col order-1 mobile:order-2">
              <span className="font-bold pb-4 mobile:pt-4">{post.title}</span>
              <span className="font-extralight text-xs pb-3">
                {post.description}
              </span>
              <span className="font-light text-xs transition text-gray-400">
                {post.date}
              </span>
            </div>
            <div className="order-2 relative min-w-[15rem] min-h-[10rem] max-h-[15rem] mobile:order-1">
              <ResponsiveImage src={post.image!} alt="" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostList;
