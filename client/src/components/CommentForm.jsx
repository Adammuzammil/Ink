import React, { useState } from "react";

const CommentForm = ({ mutation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      comment: formData.get("comment"),
    };

    console.log(data);

    mutation.mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-4 rounded-lg shadow-md"
    >
      <textarea
        name="comment"
        placeholder="Add comment..."
        className="w-full h-20 p-2 text-black border rounded-lg outline-none resize-none focus:ring focus:ring-orange-500"
      ></textarea>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3 text-gray-600">
          <button className="p-2 hover:text-black">
            <b>B</b>
          </button>
          <button className="p-2 hover:text-black">
            <i>I</i>
          </button>
          <button className="p-2 hover:text-black">
            <u>U</u>
          </button>
          <span className="w-px h-5 bg-gray-400"></span>
          <button className="p-2 hover:text-black">🔗</button>
          <button className="p-2 hover:text-black">🖼️</button>
          <button className="p-2 hover:text-black">😊</button>
          <button className="p-2 hover:text-black">@</button>
        </div>

        {/* Submit button */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
