import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      if (location.pathname === "/posts") {
        setSearchParams({ ...Object.fromEntries(searchParams), search: query });
      } else {
        navigate(`/posts?search=${query}`);
      }
    }
  };
  return (
    <div
      onKeyDown={handleSearch}
      className="flex items-center bg-white rounded-full px-4 py-2 shadow-md max-w-md mx-auto"
    >
      <SearchIcon className="text-gray-500 w-5 h-5 mr-2" />
      <input
        type="text"
        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
        placeholder="Search"
      />
      {/* <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-1 ml-2 transition-all duration-200"
      >
        Search
      </button> */}
    </div>
  );
};

export default Search;
