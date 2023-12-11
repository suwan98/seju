import {defineDocumentType, makeSource} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export const Post = defineDocumentType(() => ({
  name: "Posts",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {type: "string", required: true},
    date: {type: "string", required: true},
    category: {type: "string", required: true},
    image: {type: "string"},
  },
}));

const rehypeoptions = {
  theme: "slack-dark",
  keepBackground: true,
};

const contentSource = makeSource({
  contentDirPath: "contents",
  documentTypes: [Post],
  onExtraFieldData: "ignore",
  mdx: {
    remarkPlugins: [remarkGfm],
    // @ts-ignore
    rehypePlugins: [[rehypePrettyCode, rehypeoptions], rehypeSlug],
  },
});

export default contentSource;
