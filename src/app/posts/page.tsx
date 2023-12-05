import PostCard from "@/components/PostCard";
import PostCategories from "@/components/PostCategories";
import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";

function Posts() {
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
      </div>
    </>
  );
}

export default Posts;
