import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });

  res.status(200).json(comments);
};

export const addComment = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const postId = req.params.postId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findOne({ clerkUserId });

  const newComment = new Comment({
    ...req.body,
    user: user._id,
    post: postId,
  });

  const savedComment = await newComment.save();

  res.status(200).json(savedComment);
};

export const deleteComment = async (req, res) => {
  const clerkUserId = req.auth.userId;
  const id = req.params.postId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = await User.findOne({ clerkUserId });

  const deletedComment = await Comment.findOneAndDelete({
    _id: id,
    user: user._id,
  });

  if (!deletedComment) {
    return res.status(404).json({ message: "Comment not found" });
  }

  res.status(200).json("Comment deleted");
};
