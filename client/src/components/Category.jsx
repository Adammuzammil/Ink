import React from "react";
import CategoryNews from "./CategoryNews";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Google's NotebookLM leader has left the company.",
    author: "Emma Roth",
    time: "3:51 AM GMT+5:30",
    details:
      "Senior product manager Raiza Martin, along with NotebookLM designer Jason Spielman and engineer Stephen Hughes, say they have left Google to work on a new project.",
    source: "TechCrunch",
    link: "#",
  },
  {
    title: "OpenAI is partnering with defense tech company Anduril",
    author: "Gaby Del Valle",
    time: "3:17 AM GMT+5:30",
    comments: "8",
  },
  {
    title: "Verizon is once again raising its fees",
    author: "Allison Johnson",
    time: "3:06 AM GMT+5:30",
    comments: "1",
  },
];

const highlight = {
  category: "TECH",
  title:
    "A universal 'Plug and Charge' protocol for EV charging is coming in 2025",
  author: "Andrew J. Hawkins",
  date: "Dec 4",
  comments: "11",
  image: "https://via.placeholder.com/150", // Replace with actual image link
};

const Category = ({ category }) => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 relative mb-6 py-6">
    //   {/* Left Section for "TECH" */}
    //   <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 -rotate-90 text-black text-2xl font-medium underline underline-offset-4 decoration-green-600">
    //     {category}
    //   </div>

    //   {/* Right Section for the Card */}
    //   <div className="col-start-3 col-span-1">
    //     <CategoryNews category={category} />
    //   </div>
    // </div>

    <div className="text-black min-h-screen p-2 py-6">
      <h1 className="text-3xl font-bold mb-4">{category}</h1>
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr,1fr] gap-6">
        {/* Left Section */}
        <div className="space-y-6 order-2 md:order-1 lg:col-span-2">
          {articles.map((article, idx) => (
            <div key={idx} className="border-b border-gray-300 pb-4">
              <p className="text-sm text-gray-600">
                {article.author} • {article.time}
              </p>
              <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
              {article.details && (
                <p className="text-gray-700 mt-2 max-w-2xl">
                  {article.details}
                </p>
              )}
              {article.source && (
                <a
                  href={article.link}
                  className="text-green-500 text-sm mt-1 inline-block"
                >
                  {article.source}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="order-1 md:order-2 lg:col-start-3">
          <CategoryNews category={category} />
        </div>
      </div>
    </div>
  );
};

export default Category;
