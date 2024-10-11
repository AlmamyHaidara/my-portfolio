import { allProjets } from "contentlayer/generated";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  props: { params: { slug: string } }
) => {
  const { slug } = props.params;
  
  const projet = allProjets.find(r => r.url.replace(/projets\/\d+-/, '') === slug);

  return NextResponse.json(projet);
};
