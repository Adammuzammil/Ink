import { MessageSquare } from "lucide-react";
import React from "react";

const CategoryNews = ({ category }) => {
  return (
    <section className="sticky top-6 bg-pink-100 py-6 px-4 rounded-lg text-black max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="uppercase text-sm font-bold">{category}</h3>
        <a
          href="#"
          className="text-sm font-semibold text-gray-800 hover:underline"
        >
          See All {category.toLowerCase()}
        </a>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold leading-tight mb-2">
          A universal ‘Plug and Charge’ protocol for EV charging is coming in
          2025
        </h2>
        <p className="text-xs text-gray-600 flex items-center gap-2">
          Andrew J. Hawkins <span>•</span> Dec 4 <span>•</span>
          <span className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            10
          </span>
        </p>
      </div>

      <div className="mb-4">
        <img
          src="https://images.pexels.com/photos/20189714/pexels-photo-20189714/free-photo-of-couple-standing-in-train-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="EV Charging"
          className="w-full h-auto rounded-md"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 mt-1"></div>
          <div>
            <p className="text-sm font-semibold hover:underline">
              Spotify Wrapped 2024 adds an AI podcast to recap your listening
              habits
            </p>
            <p className="text-xs text-gray-600">Emma Roth • Dec 4 • 8</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 mt-1"></div>
          <div>
            <p className="text-sm font-semibold hover:underline">
              Misinformation researcher admits ChatGPT added fake details to his
              court filing
            </p>
            <p className="text-xs text-gray-600">Gaby Del Valle • Dec 4 • 7</p>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-[calc(100%-40px)] right-[-10px] text-6xl font-bold text-pink-300 opacity-10 -rotate-90">
          Tech
        </div> */}
    </section>
  );
};

export default CategoryNews;
