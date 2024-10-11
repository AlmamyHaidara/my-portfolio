// import { ImageResponse } from "next/og";
import { Projets } from "contentlayer/generated";
import { OgImage } from "./OgImage";
import { getUrl } from "./getUrl";
import { ImageResponse } from "next/dist/compiled/@vercel/og";

const URL = getUrl();

export const alt = "Codelynx Projetss image preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OgImagePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const Projets = (await fetch(`${URL}/api/projets/${params.slug}`).then((res) =>
    res.json()
  )) as Projets;

  return new ImageResponse(<OgImage projets={Projets} url={URL} />, {
    ...size,
  });
}
