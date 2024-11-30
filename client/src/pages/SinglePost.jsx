import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import PostActions from "../components/PostActions";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";

const fetchPost = async (slug) => {
  const res = await axios.get(`/api/v1/posts/${slug}`);
  return res.data;
};

const SinglePost = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

  const content = data?.content;

  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div className="flex flex-col gap-8 text-white">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            {data.title}
          </h1>
          <div className="flex itemce' gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="">{data.user.username}</Link>
            <span>on</span>
            <Link className="">{data.category}</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        <div className="hidden lg:block w-2/5">
          <img
            src="https://images.pexels.com/photos/29014372/pexels-photo-29014372/free-photo-of-scenic-coastal-landscape-with-mountains-and-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text */}
        <div
          className="flex flex-col gap-6 text-white lg:text-lg text-justify"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></div>
        {/* Menu */}
        <div className="sticky px-4 h-max top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-2">
            <img
              src="https://images.pexels.com/photos/27176219/pexels-photo-27176219/free-photo-of-young-woman-decorating-a-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <Link>John Doe</Link>
          </div>
          <div className="flex gap-2">
            <Link to={"/test"}>
              <Facebook />
            </Link>
            <Link to={"/test"}>
              <Instagram />
            </Link>
          </div>

          <PostActions post={data} />
          <h1 className="my-3 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline">Web design</Link>
            <Link className="underline">Development</Link>
            <Link className="underline">Databases</Link>
            <Link className="underline">Search engines</Link>
            <Link className="underline">Marketing</Link>
          </div>
        </div>
      </div>

      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePost;
