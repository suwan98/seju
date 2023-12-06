import {defineDocumentType, makeSource} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

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

// const configDocumentType = (documentName: string, filePath: string) => {
//   return defineDocumentType(() => ({
//     name: documentName,
//     contentType: "mdx",
//     filePathPattern: `${filePath}/*.mdx`,
//     fields: {
//       title: {type: "string", required: true},
//       date: {type: "string", required: true},
//       category: {type: "string", required: true},
//       description: {type: "string", required: true},
//     },
//     computedFields: {
//       slug: {
//         type: "string",
//         resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
//       },
//     },
//   }));
// };

// const JavaScript = configDocumentType("Post", "javascript");
// const React = configDocumentType("Post", "react");
// const TypeScript = configDocumentType("Post", "typescript");
// const NextJs = configDocumentType("Post", "nextjs");
// const Git = configDocumentType("Post", "git");
// const Aricitacture = configDocumentType("Post", "aricitacture");

// export default makeSource({
//   contentDirPath: "contents",
//   documentTypes: [JavaScript, React, TypeScript, NextJs, Git, Aricitacture],
//   mdx: {},
// });
