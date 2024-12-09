import {
  ChevronRight,
  MessageSquare,
  MoveRight,
  MoveUpRight,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import PostsList from "../components/PostsList";
import CategoryNews from "../components/CategoryNews";
import Category from "../components/Category";
import Vault from "../components/Vault";

const categories = [
  { name: "TECH" },
  { name: "SPORTS" },
  { name: "BUSINESS" },
  { name: "ENTERTAINMENT" },
];

const Home = () => {
  return (
    <div className="mt-6 max-w-screen-xl mx-auto px-4 lg:px-8">
      {/* Today's Picks Section */}
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <h2 className="uppercase text-sm tracking-widest font-bold mb-4">
            Today's Picks
          </h2>
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="flex flex-col items-start gap-4">
              <img
                src="https://images.pexels.com/photos/25211868/pexels-photo-25211868/free-photo-of-pink-light-at-platform-of-subway-station-in-germany.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Jensen Huang"
                className="w-full aspect-video rounded-md"
              />
              <div className="text-right p-4 w-full  lg:ml-auto">
                <h3 className="text-xs text-black uppercase">
                  The Big Interview
                </h3>
                <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">
                  Jensen Huang Wants to Make AI the New World Infrastructure
                </h1>

                <div className="flex items-center gap-2 mt-2 justify-end">
                  <p className="text-sm text-black">Zeyi Yang</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Most Recent Section */}
        <div className="">
          <h2 className="uppercase text-sm tracking-widest font-bold mb-4">
            Top Stories
          </h2>
          <div className="space-y-6">
            {/* List Item 1 */}
            {[...Array(5)].map((_, index) => (
              <div className="flex items-center space-x-5 border-b border-gray-700 pb-4 relative">
                <span className="absolute text-2xl font-bold text-gray-500">
                  {index + 1}
                </span>
                <img
                  src="https://images.pexels.com/photos/27585633/pexels-photo-27585633/free-photo-of-london-big-ben.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Article"
                  className="w-16 h-16 aspect-square object-cover rounded-md"
                />
                <div>
                  <h3 className="text-md font-bold leading-tight">
                    A Parasite That Eats Cattle Alive Is Creeping North Toward
                    the US
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Geraldine Castro</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      {/* <div className="mt-8">
        <Categories />
      </div> */}

      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Link className="text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center group">
              Show More
              <MoveRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                image:
                  "https://images.pexels.com/photos/29629773/pexels-photo-29629773/free-photo-of-charming-irish-pub-in-gothenburg-sweden.jpeg",
                author: "Leslie Alexander",
                time: "7 hours ago",
                title:
                  "Kagami Yuka of Japan wins women's wrestling freestyle 76kg gold",
                category: "Olympics",
                readTime: "3 minute read",
              },
              {
                image:
                  "https://images.pexels.com/photos/27559206/pexels-photo-27559206/free-photo-of-a-group-of-people-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                author: "Maggie Hendricks",
                time: "7 hours ago",
                title:
                  "Australia and the U.S. are familiar foes in semi-final faceoff",
                category: "Olympics",
                readTime: "5 minute read",
              },
              {
                image:
                  "https://images.pexels.com/photos/29629773/pexels-photo-29629773/free-photo-of-charming-irish-pub-in-gothenburg-sweden.jpeg",
                author: "Sam Peene",
                time: "7 hours ago",
                title: "Curry dices up France to lead Team USA to another gold",
                category: "Olympics",
                readTime: "3 minute read",
              },
              {
                image:
                  "https://images.pexels.com/photos/27559206/pexels-photo-27559206/free-photo-of-a-group-of-people-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                author: "Michael Charles",
                time: "7 hours ago",
                title: "Kim Yujin of Republic of Korea battles her way to gold",
                category: "Olympics",
                readTime: "4 minute read",
              },
            ].map((article, idx) => (
              <div key={idx} className=" overflow-hidden group">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110 "
                  />
                </div>
                <div className="py-4 space-y-2">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                    <img
                      src="https://images.pexels.com/photos/27559206/pexels-photo-27559206/free-photo-of-a-group-of-people-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt={article.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <p>{article.author}</p>
                    <span>·</span>
                    <p>{article.time}</p>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 hover:text-orange-500">
                    <a href="#">{article.title}</a>
                  </h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <p className="text-orange-500 font-medium">
                      {article.category}
                    </p>
                    <span className="mx-2">|</span>
                    <p>{article.readTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {/* <Featured /> */}

      {/* <div className="">
        <h1 className="my-8 text-2xl text-white">Recent Posts</h1>
        <PostsList />
      </div> */}

      {categories.map((category, idx) => (
        <React.Fragment key={idx}>
          <Category category={category.name} />
          {/* Add a separator line unless it's the last item */}
          {idx !== categories.length - 1 && (
            <hr className="my-6 border-gray-300" />
          )}
        </React.Fragment>
      ))}

      <p className="text-center pt-4">
        <Link to="/posts" className="underline text-[#1C325B] tracking-wide">
          MORE ARTICLES
        </Link>
      </p>

      {/* <Category />
      <Category />
      <Category />
      <Category /> */}

      <Vault />
    </div>
  );
};

export default Home;
