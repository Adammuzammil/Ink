import React, { useState } from "react";
import PostsList from "../components/PostsList";
import SideMenu from "../components/SideMenu";
import DemoPosts from "@/components/DemoPosts";

const AllPosts = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen ">
      <h1 className="mb-8 text-4xl font-bold text-center">ALL BLOGS</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div
        className={`grid gap-10 px-4 md:px-16 lg:px-32 ${
          open ? "grid-rows-[auto_auto]" : "grid-cols-1 md:grid-cols-[2fr_1fr]"
        }`}
      >
        <div className="flex-1 py-10">
          <DemoPosts />
        </div>

        <div
          className={`${
            open ? "block" : "hidden"
          } md:block bg-white p-4 rounded-lg`}
        >
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
