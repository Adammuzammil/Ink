import React, { useState } from "react";

const Comment = ({ comment, addReply }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [showReplies, setShowReplies] = useState(false);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      addReply(comment.id, {
        user: {
          name: "Current User",
          avatar: "https://via.placeholder.com/40",
        },
        time: "Just now",
        content: replyText,
      });
      setReplyText("");
      setIsReplying(false);
    }
  };

  const handleLike = () => setLikeCount((prev) => prev + 1);
  const handleDislike = () => setDislikeCount((prev) => prev + 1);
  return (
    <div className="border-b border-gray-200 pb-4 mb-4 text-white">
      <div className="flex items-center gap-3">
        <img
          src={comment.user.avatar}
          alt={comment.user.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium">{comment.user.name}</p>
          <p className="text-sm text-gray-500">{comment.time} ago</p>
        </div>
      </div>
      <p className="mt-2 text-white">{comment.content}</p>

      <div className="flex items-center gap-6 mt-3">
        <button className="flex items-center gap-1 text-gray-600 hover:text-orange-500">
          👍 <span className="text-white">{comment.likes}</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-red-500">
          👎 <span className="text-white">{comment.dislikes}</span>
        </button>
        <button
          onClick={() => setIsReplying(!isReplying)}
          className="text-blue-500 hover:underline"
        >
          Reply
        </button>
        {/* {comment?.replies.length > 0 && (
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="flex items-center text-gray-600 hover:text-blue-500"
          >
            {showReplies ? (
              <>
                <span>Hide Replies</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 15l6-6 6 6"
                  />
                </svg>
              </>
            ) : (
              <>
                <span className="text-white">Show Replies</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 9l-6 6-6-6"
                  />
                </svg>
              </>
            )}
          </button>
        )} */}
      </div>

      {/* Reply Input */}
      {/* {isReplying && (
        <div className="mt-4">
          <textarea
            className="w-full border rounded-lg p-2 text-sm"
            placeholder="Write your reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea>
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => setIsReplying(false)}
              className="text-sm text-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={handleReplySubmit}
              className="text-sm bg-blue-500 text-white px-3 py-1 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      )} */}

      {/* Replies */}
      {/* <div
        className={`transition-all duration-300 ease-in-out ${
          showReplies ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {comment.replies.map((reply, index) => (
          <Reply key={index} reply={reply} />
        ))}
      </div> */}
    </div>
  );
};

export default Comment;

const Reply = ({ reply }) => (
  <div className="ml-8 mt-4 border-l pl-4 text-white">
    <div className="flex items-center gap-2">
      <img
        src={reply.user.avatar}
        alt={reply.user.name}
        className="w-8 h-8 rounded-full"
      />
      <div>
        <p className="font-medium">{reply.user.name}</p>
        <p className="text-sm text-gray-500">{reply.time} ago</p>
      </div>
    </div>
    <p className="mt-2 text-white">{reply.content}</p>
  </div>
);
