import React from "react";
import PostItem from "./PostItem";
import { allPosts } from "@/all-posts";

const DemoPosts = () => {
  return (
    <div>
      {allPosts.map((post, index) => (
        <PostItem
          key={`${post._id}-${index}`}
          post={post}
          index={index}
          isLastItem={index === allPosts.length - 1}
        />
      ))}
    </div>
  );
};

export default DemoPosts;
