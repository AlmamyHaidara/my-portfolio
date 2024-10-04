import { getMakdown }  from "@/lib/posts";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  props: { params: { slug: string } }
) => {
  const { slug } = props.params;

  const post =  await getMakdown(slug);

  return NextResponse.json(post);
};
