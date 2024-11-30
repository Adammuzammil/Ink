import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Categories = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput((prev) => !prev);
  };
  return (
    <>
      <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
        <div className="grow flex items-center gap-4 flex-wrap">
          <Link
            to={"/posts"}
            className="bg-blue-800 text-white rounded-full px-4 py-2"
          >
            All Posts
          </Link>
          <Link
            to="/posts?cat=web-design"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Web Design
          </Link>
          <Link
            to="/posts?cat=development"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Development
          </Link>
          <Link
            to="/posts?cat=databases"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Databases
          </Link>
          <Link
            to="/posts?cat=seo"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Search Engines
          </Link>
          <Link
            to="/posts?cat=marketing"
            className="hover:bg-blue-50 rounded-full px-4 py-2"
          >
            Marketing
          </Link>
        </div>
        <div
          className="bg-gray-100 p-2 mr-4 rounded-full flex items-center gap-2"
          onClick={toggleInput}
        >
          <SearchIcon className="cursor-pointer" />
        </div>
      </div>

      {showInput && (
        <div className="mt-4 flex justify-center">
          <Search />
        </div>
      )}
    </>
  );
};

export default Categories;
