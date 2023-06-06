import { defineDocumentType, makeSource} from 'contentlayer/source-files'

const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: '**/*.mdx',
  fields: {
    title: {type: 'string', required: true},
    description: {type: 'string', required: true},
    field: { type: 'string', required: true}
  }
}))

export default makeSource({
  contentDirPath: "./src/docs",
  documentTypes: [Docs]
})