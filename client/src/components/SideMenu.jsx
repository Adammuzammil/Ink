import React from "react";
import Search from "./Search";
import { Link, useSearchParams } from "react-router-dom";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    if (searchParams.get("sort") !== e.target.value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        sort: e.target.value,
      });
    }
  };

  const handleCategoryChange = (category) => {
    if (searchParams.get("cat") !== category) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        cat: category,
      });
    }
  };
  return (
    <div className="px-4 h-max sticky top-8">
      <div className="mb-4 text-sm font-medium">
        <Search />
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="">
        <select
          name="sort"
          id=""
          onChange={handleFilterChange}
          className="p-2 rounded-md bg-white shadow-md text-sm"
        >
          <option value="newest">Newest</option>
          <option value="popular">Most Popular</option>
          <option value="trending">Trending</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="mt-8 mb-4 text-sm font-medium">Categories</div>
      <div className="flex flex-col gap-2 text-sm">
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("general")}
        >
          All
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("web-design")}
        >
          Web Design
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("development")}
        >
          Development
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("databases")}
        >
          Databases
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("seo")}
        >
          Search Engines
        </span>
        <span
          className="underline cursor-pointer"
          onClick={() => handleCategoryChange("marketing")}
        >
          Marketing
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
