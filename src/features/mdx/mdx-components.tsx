import { MdxCode } from "./MdxCode";
import { MdxNote } from "./MdxNote";
import { MdxPre } from "./MdxPre";
import { MdxTag } from "./MdxTag";
import { MdxYouTube } from "./MdxYouTube";

export const MDX_COMPONENTS = {
  MdxPre: MdxPre,
  MdxCode: MdxCode,
  MdxNote: MdxNote,
  Note: MdxNote,
  MdxTag: MdxTag,
  MdxYouTube: MdxYouTube,
  // Ajout des composants de base pour la rétrocompatibilité
  pre: MdxPre,
  Pre: MdxPre,
  code: MdxCode,
  Code: MdxCode, // Supporte <Code> dans les MDX
};
