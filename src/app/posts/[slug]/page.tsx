import PostCard from "@/components/PostCard";
import {allPosts} from "contentlayer/generated";
import {useMDXComponent} from "next-contentlayer/hooks";

const Post = ({params}: {params: {slug: string}}) => {
  const {slug} = params;
  const categoryPost = allPosts.filter((post) => post.category === slug);
  console.log(categoryPost);

  return (
    <article className="mx-auto max-w-xl py-8">
      <ul>
        {categoryPost.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </ul>
    </article>
  );
};

export default Post;
