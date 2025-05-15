import { MdxCode } from "./MdxCode";
import { MdxNote } from "./MdxNote";
import { MdxPre } from "./MdxPre";
import { MdxTag } from "./MdxTag";
import { MdxYouTube } from "./MdxYouTube";

export const mdxComponents = {
  MdxYouTube,
  MdxNote,
  MdxPre,
  MdxTag,
  MdxCode,
};

export const mdxOptions = {
  mdxOptions: {
    format: 'mdx',
    rehypePlugins: [],
    remarkPlugins: [],
  },
}; 