import TOC from "@/components/Post/TOC";
import getLastSegment from "@/utils/getLastSegment";
import {allPosts} from "contentlayer/generated";
import {compareDesc} from "date-fns";
import {useMDXComponent} from "next-contentlayer/hooks";
import METADATA from "./../../../../constants/METADATA";
import Giscus from "@/components/Post/Giscus";

interface PostDetailProps {
  params: {
    category: string;
    detail: string;
  };
}

export const generateMetadata = ({params}: PostDetailProps) => {
  const {category, detail} = params;

  return {
    metadataBase: new URL(METADATA.meta.url),
    title: `${detail} - ${category} | ${METADATA.meta.title}`,
    description: `이 페이지는 ${category} 카테고리의 ${detail}에 대한 상세 정보를 제공합니다. ${METADATA.meta.description}`,
    keywords: `${category}, ${detail}`,
    author: METADATA.author,
    openGraph: {
      url: METADATA.meta.url,
      title: `${detail} - ${category} | ${METADATA.meta.title}`,
      description: `이 페이지는 ${category} 카테고리의 ${detail}에 대한 상세 정보를 제공합니다. ${METADATA.meta.description}`,
      images: [
        {
          url: `${METADATA.meta.url}/assets/image/og_image.jpg`,
          width: 600,
          height: 600,
        },
      ],
    },
  };
};

function PostDetail({params}: PostDetailProps) {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const detailPost = posts.find(
    (post) => getLastSegment(post._raw.flattenedPath) === params.detail
  );

  const MDXComponent = useMDXComponent(detailPost?.body.code || "");

  return (
    <>
      <div className="w-full max-w-[40rem] pt-12 flex flex-col grow mobile:max-w-[25rem]">
        <div className="text-center pb-8">
          <h1 className="text-3xl text-center font-bold">
            {detailPost?.title}
          </h1>
          <span>{detailPost?.date}</span>
          <TOC />
        </div>
        <hr className="pb-8" />
        <article className="prose prose-neutral dark:prose-invert">
          <MDXComponent />
        </article>
        <Giscus />
      </div>
    </>
  );
}

export default PostDetail;
