"use client";
import { useState } from "react";
import ClientSideRoute from "./ClientSideRoute";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  const articlesShown = 4;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown);
  };

  return (
    <div className="relative z-0">
      <hr className="border-[#8F00FF] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.slice(0, loadMore)?.map((item) => (
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
        {loadMore < posts?.length ? (
          <button
            type="button"
            className="group relative overflow-hidden bg-white px-2 py-3 text-sm md:text-base rounded-lg"
            onClick={showMoreArticles}
          >
            <div className="absolute inset-0 w-3  bg-[#8F00FF]  transition-all duration-[350ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white ">
              Load More Articles
            </span>
          </button>
        ) : (
          <button
            type="button"
            className="bg-[#483248] text-[#FFF] px-2 py-3 text-sm md:text-base rounded-lg opacity-50 cursor-not-allowed"
            onClick={showMoreArticles}
            disabled
          >
            All articles loaded
          </button>
        )}
      </div>
      <div className="flex justify-center mt-5">
        Showing {loadMore} of {posts?.length} articles
      </div>
    </div>
  );
};

export default BlogList;
