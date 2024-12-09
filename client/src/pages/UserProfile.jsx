import React from "react";

const UserProfile = () => {
  const posts = [
    {
      category: "VERGECAST",
      title: "AGI is coming and nobody cares",
      author: "David Pierce",
      date: "Dec 6",
      comments: 29,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      category: "TECH",
      title:
        "Twos is a handy to-do list app with exactly the right amount of AI",
      author: "David Pierce",
      date: "Dec 5",
      comments: 11,
      image: "https://via.placeholder.com/150", // Replace with actual image URL
    },
  ];
  return (
    <div className="text-black min-h-screen w-full max-w-3xl mx-auto bg-white">
      <header className="bg-gradient-to-r from-[#7E22CE] to-[#2563EB] p-10 text-center">
        <h1 className="text-4xl font-bold text-white">David Pierce</h1>
        <p className="text-lg mt-2 uppercase tracking-wide text-gray-300">
          Editor-At-Large
        </p>
      </header>

      <section className="max-w-4xl mx-auto p-8 text-center">
        <img
          src="https://images.pexels.com/photos/27219452/pexels-photo-27219452/free-photo-of-woman-in-white-dress-lying-down-on-couch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Profile"
          className="w-32 h-32 mx-auto object-cover rounded-full mb-4 border-4 border-[#7E22CE]"
        />
        <p className="text-gray-600">
          David Pierce is The Verge's Editor-at-Large. In previous lives, he
          worked at Protocol, The Wall Street Journal, and Wired. He owns all
          the phones.
        </p>
        <p className="text-gray-500 mt-2">
          He's @imdavidpierce on Threads and davidpierce.11 on Signal.
        </p>
      </section>

      <section className="space-y-6 px-8 py-10">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-1">
              <p className="text-[#7E22CE] text-sm font-medium uppercase">
                {post.category}
              </p>
              <h2 className="text-xl font-bold mt-1 text-gray-800">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {post.author} • {post.date} • {post.comments} Comments
              </p>
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="w-24 h-24 rounded-md object-cover shadow-sm"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default UserProfile;
