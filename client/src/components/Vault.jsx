import { MoveRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Vault = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">From the Vault</h2>
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
            <div key={idx} className=" shadow-sm overflow-hidden group">
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
  );
};

export default Vault;
