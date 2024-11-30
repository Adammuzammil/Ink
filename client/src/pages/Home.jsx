import { ChevronRight, MoveUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* Breadcrumb */}
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <span>
          <ChevronRight />
        </span>
        <span className="text-white">Blogs and articles</span>
      </div>

      {/* Introduction */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl md:text-5xl lg:text-6xl font-medium">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="mt-8 text-base md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, iure?
          </p>
        </div>

        {/* Animated */}
        <Link to={"/write"} className="relative hidden md:block">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest "
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story .
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea .
              </textPath>
            </text>
          </svg>

          <button className="absolute left-0 right-0 top-0 bottom-0 m-auto h-20 w-20 bg-blue-800 rounded-full flex items-center justify-center">
            <MoveUpRight className="size-12 text-white" />
          </button>
        </Link>
      </div>

      {/* Categories */}
      <div className="mt-8">
        <Categories />
      </div>

      {/* Featured */}
      <Featured />

      <div className="">
        <h1 className="my-8 text-2xl text-white">Recent Posts</h1>
        <PostsList />
      </div>
    </div>
  );
};

export default Home;
