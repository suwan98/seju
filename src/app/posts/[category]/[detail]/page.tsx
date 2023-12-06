import getLastSegment from "@/utils/getLastSegment";
import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import {useMDXComponent} from "next-contentlayer/hooks";

interface PostDetailProps {
  params: {
    category: string;
    detail: string;
  };
}



function PostDetail({params}: PostDetailProps) {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const detailPost = posts.find(
    (post) => getLastSegment(post._raw.flattenedPath) === params.detail
  );

  console.log(detailPost?.body.code);

  const MDXComponent = useMDXComponent(detailPost?.body.code || "");

  return (
    <>
      <div>
        <h1>{detailPost?.title}</h1>
        <span>{detailPost?.category}</span>
        <MDXComponent />
      </div>
    </>
  );
}

export default PostDetail;
