import {Post, allPosts} from "contentlayer/generated";
import Link from "next/link";
import {parseISO, format, compareDesc} from "date-fns";
import PostCategories from "@/components/PostCategories";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date.trim()), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

function page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <>
      <div className="mx-auto max-w-xl py-8 min-h-screen">
        <h1 className="mb-8 text-center text-2xl font-black">
          전체 게시글 보기
        </h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        <PostCategories />
      </div>
    </>
  );
}

export default page;
