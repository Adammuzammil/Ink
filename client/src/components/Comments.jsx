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
  const comments = [
    {
      username: "whlr",
      time: "17 hours ago",
      text: "I had to lift my phone up to read it more clearly, because in the graphic, the 5V5 looked like SUS",
      actions: ["Rec", "Reply", "Share", "Report"],
    },
    {
      username: "timpera",
      time: "17 hours ago",
      text: "This looks really fun! Quite excited to try it out. As someone who only casually plays 1 to 2 hours a week, I really enjoy the way there's always something new dropping on Fortnite once you start getting bored with the current game.",
      actions: ["Rec 1", "Reply", "Share", "Report"],
    },
    {
      username: "Benny_Brainless",
      time: "20 hours ago",
      text: "I don't play Fortnite, but damn it's impressive what they've done with this game as a platform",
      actions: ["Rec 6", "Reply", "Share", "Report"],
    },
  ];
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["comments", postId],
  //   queryFn: () => fetchComments(postId),
  // });

  // console.log(comments);

  // const queryClient = useQueryClient();
  // const { getToken } = useAuth();

  // const mutation = useMutation({
  //   mutationFn: async (newComment) => {
  //     const token = await getToken();
  //     return axios.post(`/api/v1/comments/${postId}`, newComment, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   },

  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["comments", postId] });
  //   },

  //   onError: (error) => {
  //     const errorMessage =
  //       error.response?.data?.message || "An unexpected error occurred";
  //     toast.error(errorMessage);
  //   },
  // });

  // if (isPending) return <p>Loading comments...</p>;
  // if (error) return <p>Error loading comments: {error.message}</p>;
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
    <div className="h-full mb-6 p-2 md:p-4 md:py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-2">
        <h1 className="text-lg font-bold ">
          All Comments <span className="text-sm text-gray-500">3</span>
        </h1>
      </div>

      {/* Comments Section */}
      <div className="mt-4 space-y-4 px-4 max-h-[calc(100vh-250px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {comments.map((comment, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${
              index === comments.length - 1 ? "bg-orange-100" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg text-gray-800">
                {comment.username}
              </h2>
              <span className="text-sm text-gray-500">{comment.time}</span>
            </div>
            <p className="text-gray-700 mt-2">{comment.text}</p>
            <div className="flex items-center mt-4 space-x-4 text-sm text-purple-600">
              {comment.actions.map((action, i) => (
                <button key={i} className="hover:underline">
                  {action}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-around mt-6 pt-4 border-t overflow-auto">
        <button className="text-sm text-purple-600 hover:underline">
          Profile & Replies
        </button>
        <button className="text-sm text-purple-600 hover:underline">
          More discussions
        </button>
      </div>
    </div>
  );
};

export default Comments;
