import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
commentSchema.index({ post: 1 }, { unique: false });
const Comment = mongoose.model("Comment", commentSchema);

// Comment.collection.getIndexes((err, indexes) => {
//   if (err) {
//     console.error("Error getting indexes:", err);
//   } else {
//     console.log("Existing indexes:", indexes);
//   }
// });

// async function dropPostIndex() {
//   try {
//     await Comment.collection.dropIndex("post_1");
//     console.log("Post index dropped successfully");
//   } catch (err) {
//     console.error("Error dropping index:", err);
//   }
// }

// dropPostIndex();

export default Comment;
