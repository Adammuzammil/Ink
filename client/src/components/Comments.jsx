import React, { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";

const fetchComments = async (postId) => {
  const res = await axios.get(`/api/v1/comments/${postId}`);
  return res.data;
};

const Comments = ({ postId }) => {
  const {
    isPending,
    error,
    data: comments,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  // console.log(comments);

  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(`/api/v1/comments/${postId}`, newComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },

    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred";
      toast.error(errorMessage);
    },
  });

  if (isPending) return <p>Loading comments...</p>;
  if (error) return <p>Error loading comments: {error.message}</p>;
  // const [comments, setComments] = useState([
  //   {
  //     id: 1,
  //     user: {
  //       name: "Lyle Kauffman",
  //       avatar:
  //         "https://images.pexels.com/photos/5723982/pexels-photo-5723982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     },
  //     time: "1 day",
  //     content:
  //       "How do we measure the amount of water vapor in the air? Is it something we'll cover later?",
  //     likes: 12,
  //     dislikes: 0,
  //     replies: [
  //       {
  //         user: {
  //           name: "Amanda Lowery",
  //           avatar:
  //             "https://images.pexels.com/photos/28975831/pexels-photo-28975831/free-photo-of-autumn-foliage-in-the-mist-lincoln-nh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //         },
  //         time: "12 hours",
  //         content:
  //           "Yes, I think we’ll dive deeper into that in the next module on humidity. But the short answer is: we measure it using a tool called a hygrometer.",
  //       },
  //       {
  //         user: {
  //           name: "Owen Garcia",
  //           avatar:
  //             "https://images.pexels.com/photos/28921096/pexels-photo-28921096/free-photo-of-colorful-architecture-in-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //         },
  //         time: "2 hours",
  //         content:
  //           "Exactly! The next lesson will cover humidity, and I’m excited to see how it all connects back to the water cycle.",
  //       },
  //     ],
  //   },
  // ]);

  // const addReply = (commentId, reply) => {
  //   setComments((prev) =>
  //     prev.map((comment) =>
  //       comment.id === commentId
  //         ? { ...comment, replies: [...comment.replies, reply] }
  //         : comment
  //     )
  //   );
  // };
  return (
    <div className="flex flex-col gap-8 lg:w-3/5 my-8">
      <h1 className="text-xl font-medium">Comments</h1>
      <div>
        <CommentForm mutation={mutation} />
      </div>

      {comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
