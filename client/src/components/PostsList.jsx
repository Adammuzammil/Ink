import InfiniteScroll from "react-infinite-scroll-component";

import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import PostItem from "./PostItem";
import React from "react";
import { useSearchParams } from "react-router-dom";

const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);

  console.log(searchParamsObj);
  const response = await axios.get("/api/v1/posts", {
    params: {
      page: pageParam,
      limit: 5,
      ...searchParamsObj,
    },
  });
  return response.data;
};

const PostsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  if (isFetching) return "Loading...";

  if (error) return "Something went wrong!";

  const allPosts =
    data?.pages
      .flatMap((page) => page.posts)
      .filter(
        (post, index, self) =>
          index === self.findIndex((p) => p._id === post._id)
      ) || [];
  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {allPosts.map((post, index) => (
        <PostItem key={`${post._id}-${index}`} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostsList;
