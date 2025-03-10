import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const fetchFeaturedPost = async () => {
  const res = await axios.get(
    `/api/v1/posts?featured=true&limit=4&sort=newest`
  );
  return res.data;
};

const Featured = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchFeaturedPost(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {posts[0].img && (
          <img
            src="https://images.pexels.com/photos/28193003/pexels-photo-28193003/free-photo-of-dusk-panoramic-aerial-view-of-monaco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        )}

        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to={"/"} className="text-white">
            {posts[0].category}
          </Link>
          <span className="text-gray-500">
            {formatDistanceToNow(new Date(posts[0].createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>

        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="https://images.pexels.com/photos/28603873/pexels-photo-28603873/free-photo-of-tranquil-coastal-forest-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-3xl w-1/3 object-cover aspect-video"
          />

          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to={"/"} className="text-white">
                Web design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl xl:text-2xl lg:text-xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Link>
          </div>
        </div>

        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="https://images.pexels.com/photos/28603873/pexels-photo-28603873/free-photo-of-tranquil-coastal-forest-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-3xl w-1/3 object-cover aspect-video"
          />

          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to={"/"} className="text-white">
                Web design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl xl:text-2xl lg:text-xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Link>
          </div>
        </div>

        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <img
            src="https://images.pexels.com/photos/28603873/pexels-photo-28603873/free-photo-of-tranquil-coastal-forest-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-3xl w-1/3 object-cover aspect-video"
          />

          <div className="w-2/3">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link to={"/"} className="text-white">
                Web design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>

            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl xl:text-2xl lg:text-xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
