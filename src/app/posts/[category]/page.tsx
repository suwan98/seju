import PostList from "@/components/PostList";
import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";

const CategoryPost = ({params}: {params: {category: string}}) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const filterdPost = posts.filter(
    (post) => post.category.trim() === params.category
  );

  return (
    <article className="mx-auto max-w-xl py-8 text-center">
      <h2 className="text-3xl font-bold pb-12 bg-inherit">{params.category}</h2>
      <PostList posts={filterdPost} />
    </article>
  );
};

export default CategoryPost;
