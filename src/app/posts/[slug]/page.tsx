import {allPosts} from "contentlayer/generated";
import {useMDXComponent} from "next-contentlayer/hooks";

const Post = ({params}: {params: {slug: string}}) => {
  console.log(params);
  const post = allPosts.find((post) => post.category.trim() === params.slug);
  console.log(post);

  const MDXContent = useMDXComponent(post?.body.code);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div>
        <h1 className="text-3xl font-bold">{post?.title}</h1>
        <MDXContent />
      </div>
    </article>
  );
};

export default Post;
