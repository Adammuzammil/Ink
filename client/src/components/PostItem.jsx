import { Link } from "react-router-dom";
import { format } from "date-fns";

const PostItem = ({ post, index, isLastItem }) => {
  const extractDateAndTime = (dateString) => {
    const dateObject = new Date(dateString);

    // Extract date as "MMM d" (e.g., Nov 5)
    const formattedDate = format(dateObject, "MMM d");

    // Extract time as "HH:mm" (e.g., 04:54)
    const formattedTime = format(dateObject, "HH:mm");

    return { date: formattedDate, time: formattedTime };
  };

  const { date, time } = extractDateAndTime(post.createdAt);

  return (
    <div
      key={post.id}
      className={`flex justify-between items-center gap-4 py-10 relative ${
        isLastItem ? "" : "border-b border-black"
      }`}
    >
      {/* Category */}
      <div className="flex flex-col gap-2">
        <span className="block text-green-400 text-sm uppercase tracking-widest">
          {post.category}
        </span>

        {/* Title and Meta Info */}
        <div className=" flex-1">
          <Link
            to={`/${post.slug}`}
            className="text-black text-lg font-bold leading-snug hover:underline cursor-pointer "
          >
            {post.title}
          </Link>
          <div className="flex gap-3 items-center text-sm pt-2">
            <Link
              to={`/posts/author/${post.user.username}`}
              className="text-blue-400 text-sm  uppercase"
            >
              {post.username}
            </Link>
            <span> {date}</span>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 w-28 h-20">
        <img
          src="https://images.pexels.com/photos/29014372/pexels-photo-29014372/free-photo-of-scenic-coastal-landscape-with-mountains-and-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PostItem;
