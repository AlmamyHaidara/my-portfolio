/* eslint-disable react/no-unknown-property */
import { Post } from "@/lib/posts";

export type OgImageProps = {
  post: Post;
  url: string;
};

export const OgImage = ({ post, url }: OgImageProps) => {
  return (
    <div className="w-full h-full flex flex-col relative gap-4 text-white bg-[#090910] opacity-100">
      <img
        src={`${url}/og.png`}
        alt="bg"
        className="absolute flex inset-0"
      />
      <div className="flex flex-col justify-start items-start h-full flex-1 px-16 py-24 gap-4">
        <p className="text-3xl font-bold m-0" /*style={{ fontFamily: "Space Grotesk" }}*/ >
          CodeCraft
        </p>
        <p className="text-xl m-0 mt-3">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        <p className="text-6xl m-0 mt-0">{post.title}</p>
        <div className="flex items-center gap-2 mt-auto">
          <img
            alt="x"
            src="/assets/images/logo1.png"
            width={64}
            height={64}
          />
          <p className="text-4xl m-0">Almamy Ali Haïdara</p>
        </div>
      </div>
    </div>
  );
};
