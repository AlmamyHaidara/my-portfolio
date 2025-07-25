import { remarkGfm } from 'remark-gfm';
import { rehypeSlug } from 'rehype-slug';
import { rehypeAutolinkHeadings } from 'rehype-autolink-headings';

export const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ['anchor'],
        },
      },
    ],
  ],
  format: 'mdx',
}; 