import {Post} from "contentlayer/generated";
import Link from "next/link";
import {parseISO, format} from "date-fns";
import createSlug from "./../utils/createSlug";

function PostCard(post: Post) {
  const {date, title} = post;
  const slug = createSlug(title);

  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`/posts/${slug}`}
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
