import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/blog/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    cover: { type: 'string', required: true },
    freelance: { type: 'boolean', required: true },
    published: { type: 'boolean', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
  },
}));

const Projets = defineDocumentType(() => ({
    name: 'Projets',
    filePathPattern: '**/projets/*.mdx',
    fields: {
      title: { type: 'string', required: true },
      description: { type: 'string', required: true },
      publishedAt: { type: 'date', required: true },
      cover: { type: 'string', required: true },
      freelance: { type: 'boolean', required: true },
      published: { type: 'boolean', required: true },
    },
    computedFields: {
      url: {
        type: 'string',
        resolve: (projet) => `${projet._raw.flattenedPath}`,
      },
    },
  }));


export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post,Projets],
  mdx: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});
