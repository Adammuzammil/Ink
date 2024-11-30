import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/posts.route.js";
import commentRouter from "./routes/comment.route.js";
import webHooksRouter from "./routes/webhooks.route.js";
import { connectDB } from "./lib/connectDB.js";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();

const app = express();
app.use(clerkMiddleware());

app.use("/webhooks", webHooksRouter);

app.use(express.json());
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});

//rJq345zHfy#PPvM
