import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const PostItem = ({ post }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-12">
      {/* Image */}
      <div className="md:hidden lg:block lg:w-1/3">
        <img
          src="https://images.pexels.com/photos/29014372/pexels-photo-29014372/free-photo-of-scenic-coastal-landscape-with-mountains-and-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="rounded-2xl object-cover"
        />
      </div>
      {/* Details */}
      <div className="flex flex-col gap-4 w-2/3">
        <Link to={`/${post.slug}`} className="text-2xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link to={`/posts?author=${post.user.username}`} className="">
            {post.user.username}
          </Link>
          <span>on</span>
          <Link className="">{post.category}</Link>
          <span>
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </span>
        </div>

        <p>{post.desc}</p>
        <Link
          to={`/${post.slug}`}
          className="underline text-blue-300/80 text-sm"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
