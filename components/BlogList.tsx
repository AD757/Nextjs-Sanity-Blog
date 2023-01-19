"use client";
import { useState } from "react";
import ClientSideRoute from "./ClientSideRoute";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const items = showAll ? posts : posts.slice(0, 4);

  return (
    <div className="relative z-0">
      <hr className="border-[#8F00FF] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {items.map((item) => (
          <>
            <ClientSideRoute
              route={`/post/${item.slug.current}`}
              key={item._id}
            >
              <PostCard post={item} />
            </ClientSideRoute>
          </>
        ))}
      </div>
      <div className="flex justify-center">
        {!showAll ? (
          <button
            type="button"
            className="group relative overflow-hidden bg-white px-2 py-3 text-sm md:text-base rounded-lg"
            onClick={handleClick}
          >
            <div className="absolute inset-0 w-3  bg-[#8F00FF]  transition-all duration-[350ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white ">
              Load More Articles
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="bg-[#8F00FF] text-[#FFF] hover:bg-[#483248] px-2 py-3 text-sm md:text-base rounded-lg transition-all duration-[250ms] ease-out"
            onClick={handleClick}
          >
            All articles loaded
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogList;
