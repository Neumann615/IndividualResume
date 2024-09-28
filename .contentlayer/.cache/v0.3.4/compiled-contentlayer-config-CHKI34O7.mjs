// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    tags: { type: "list", of: { type: "string" }, required: true },
    slug: { type: "string", required: true },
    author: { type: "string", required: true },
    cover: { type: "string", required: false },
    date: { type: "date", required: true }
  }
  // computedFields: {
  // 	url: {
  // 		type: 'string',
  // 		resolve: (post) => `/posts/${post.slug}`
  // 	},
  // 	readingTime: {
  // 		type: 'nested',
  // 		resolve: (doc) => readingTime(doc.body.code)
  // 	}
  // }
}));
var contentlayer_config_default = makeSource({
  // contentDirPath: 'posts',
  contentDirPath: ".",
  contentDirInclude: ["posts"],
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CHKI34O7.mjs.map
