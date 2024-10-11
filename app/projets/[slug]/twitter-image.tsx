import { ImageResponse } from "next/og";
import { OgImage } from "./OgImage";
import { getUrl } from "./getUrl";
import { Projets } from "contentlayer/generated";

const URL = getUrl();

export const alt = "CodeCraft posts image preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function TwitterImagePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const projet = (await fetch(`${URL}/api/projets/${params.slug}`).then((res) =>
    res.json()
  )) as Projets;

  return new ImageResponse(<OgImage projets={projet} url={URL} />, {
    ...size,
  });
}
