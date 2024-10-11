import { allPosts } from "contentlayer/generated";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  props: { params: { slug: string } }
) => {
  const { slug } = props.params;

  const post = allPosts.find(r => r.url.replace(/blog\/\d+-/, '') === slug);

  return NextResponse.json(post);
};
