import {defineDocumentType, makeSource} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import highlight from "rehype-highlight";

export const Post = defineDocumentType(() => ({
  name: "Posts",
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
    rehypePlugins: [highlight],
  },
});

export default contentSource;
