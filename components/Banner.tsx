const Banner = () => {
  return (
    <div
      className="flex flex-col justify-between font-bold px-10 py-5 mb-10
          lg:flex-row lg:space-x-5"
    >
      <div>
        <h1 className="text-5xl">AD Performance Blog</h1>
        <h2
          className="mt-5
              md:mt-8"
        >
          Welcome to{" "}
          <span className="underline underline-offset-2 decoration-4 decoration-[#8F00FF]">
            the athlete
          </span>
          {""} blog, from the field to the blog.
        </h2>
      </div>

      <div className="bg-clip-border">
        <p className="text-[#000] bg-[#FFED00] max-w-xs md:mt-2 text-center rounded-lg py-2 mt-6">
          The ultimate resource for athlete training, development and nutrition.
        </p>
      </div>
    </div>
  );
};

export default Banner;
