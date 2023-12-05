import {Post} from "contentlayer/generated";
import Link from "next/link";
import {parseISO, format} from "date-fns";

function PostCard(post: Post) {
  const {category, date} = post;

  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`/posts/${category}`}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(date.trim()), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

export default PostCard;
