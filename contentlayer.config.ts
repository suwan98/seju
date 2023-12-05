import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import readingTime from "reading-time";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: ComputedFields = {
  readingTime: {type: "json", resolve: (doc) => readingTime(doc.body.raw)},
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {type: "string", required: true},
    date: {type: "string", required: true},
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});
