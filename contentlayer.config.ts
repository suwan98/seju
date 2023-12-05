import {defineDocumentType, makeSource} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import highlight from "rehype-highlight";
import rehypeHighlight from "rehype-highlight";

export const Post = defineDocumentType(() => ({
  name: "posts",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {type: "string", required: true},
    date: {type: "string", required: true},
    category: {type: "string", required: true},
  },
}));

const contentSource = makeSource({
  contentDirPath: "contents",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});

export default contentSource;
