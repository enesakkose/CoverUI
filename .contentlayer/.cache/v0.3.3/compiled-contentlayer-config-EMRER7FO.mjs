// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: "**/*.mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    field: { type: "string", required: true }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/docs",
  documentTypes: [Docs]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-EMRER7FO.mjs.map
