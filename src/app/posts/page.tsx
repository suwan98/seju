import {allPosts} from "contentlayer/generated";
// @ts-ignore
import {compareDesc} from "date-fns";
import PostList from "@/components/PostList";
import PostCategories from "@/components/PostCategories";

function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className="mx-auto py-8 mobile:p-4">
        <h1 className="mb-12 text-center text-3xl font-black">
          전체 게시글 보기
        </h1>
        <PostList posts={posts} />
        <PostCategories />
      </div>
    </>
  );
}

export default Posts;
