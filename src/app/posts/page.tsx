import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import PostList from "@/components/Post/PostList";
import PostCategories from "@/components/Post/PostCategories";

function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className="mx-auto py-12">
        <h1 className="mb-12 text-center text-3xl font-black mobile:text-2xl">
          전체 게시글 보기
        </h1>
        <PostList posts={posts} />
        <PostCategories />
      </div>
    </>
  );
}

export default Posts;
