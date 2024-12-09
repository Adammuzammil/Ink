import {
  Facebook,
  Instagram,
  MessageSquare,
  MessagesSquare,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostActions from "../components/PostActions";
import Comments from "../components/Comments";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CommentForm from "@/components/CommentForm";

const fetchPost = async (slug) => {
  const res = await axios.get(`/api/v1/posts/${slug}`);
  return res.data;
};

const SinglePost = () => {
  const { slug } = useParams();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

  const content = data?.content;

  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div className="min-h-screen px-6 md:px-16 py-8">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Blog Content */}
        <div className="md:col-span-2">
          <div className="text-sm text-purple-600 uppercase mb-4">
            Xbox / Gaming / Entertainment
          </div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            iFixit now sells official Xbox parts
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            If you need a part to repair your Xbox Series X / S, check iFixit's
            selection.
          </p>
          <div className="flex items-center space-x-4 text-gray-600 text-sm mb-6">
            <span>By Ciao Ciao</span>
            <span>|</span>
            <span>Dec 6, 2024, 6:32 AM GMT+5:30</span>
          </div>
          <div className="mb-6">
            <img
              src="https://images.pexels.com/photos/27176219/pexels-photo-27176219/free-photo-of-young-woman-decorating-a-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-auto rounded-lg"
            />
            <p className="text-gray-400 text-xs text-center mt-2">
              Photo by Tom Warren / The Verge
            </p>
          </div>
          <div className="text-gray-800 leading-relaxed">
            <p className="mb-4">
              iFixit now sells genuine Xbox parts you can use to repair your
              Xbox Series X or S and offers official guides to help with fixes.
              You can browse what’s available from iFixit’s{" "}
              <Link to="#" className="text-blue-600 hover:underline">
                Microsoft Repair Hub
              </Link>
              .
            </p>
            <p>
              “We’re excited to be working with Microsoft to keep Xboxes running
              longer and out of the waste heap,” Elizabeth Chamberlain, iFixit’s
              director of sustainability, says in a statement to The Verge.
            </p>
          </div>
        </div>

        {/* Right Column: Most Popular */}
        <div className="bg-white p-6 rounded-lg shadow-md max-h-[300px] overflow-auto">
          <h2 className="text-xl font-semibold mb-4">Most Popular</h2>
          <ul className="text-gray-700 space-y-4">
            <li className="text-lg">
              <span className="text-green-500 font-bold mr-2">1</span>
              Verizon is once again raising its fees
            </li>
            <li className="text-lg">
              <span className="text-green-500 font-bold mr-2">2</span>
              OpenAI is charging $200 a month for an exclusive version
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-5 border w-fit px-4 py-2">
        <button
          className="flex items-center gap-2 text-[12px]"
          onClick={() => setIsCommentsOpen(true)}
        >
          <MessageSquare size={16} />
          12 Comments
        </button>
      </div>

      <Sheet
        open={isCommentsOpen}
        onOpenChange={setIsCommentsOpen}
        className="bg-gray-500"
      >
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          <SheetHeader className="h-full flex flex-col">
            <SheetTitle>Comments</SheetTitle>
            <SheetDescription>Welcome to our comment section.</SheetDescription>
            <div className="p-4 bg-gray-50 rounded-lg">
              <CommentForm />
            </div>
            <Comments />
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* Right to Repair Stream: Full Width Section */}
      <div className="w-full mt-12">
        <h2 className="text-lg font-bold mb-4">
          More from this stream{" "}
          <Link
            to="#"
            className="text-blue-600 hover:underline font-normal text-base"
          >
            Right to repair: all the latest news and updates
          </Link>
        </h2>
        <div className="rounded-lg p-6">
          <ul className="space-y-6">
            <li>
              <div className="flex space-x-4 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                <div>
                  <h3 className="text-lg font-bold">
                    Apple now sells iPhone 16 and 16 Pro repair parts
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nov 10, 2024, 10:46 PM GMT+5:30
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex space-x-4 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                <div>
                  <h3 className="text-lg font-bold">
                    McDonald’s busted ice cream machines can now be fixed —
                    legally
                  </h3>
                  <p className="text-sm text-gray-600">
                    Oct 25, 2024, 10:03 PM GMT+5:30
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex space-x-4 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                <div>
                  <h3 className="text-lg font-bold">
                    The FTC is trying to find out if John Deere’s repair
                    policies broke the law
                  </h3>
                  <p className="text-sm text-gray-600">
                    Oct 18, 2024, 11:22 PM GMT+5:30
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex space-x-4 items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                <div>
                  <h3 className="text-lg font-bold">
                    John Deere accused of ‘excluding’ right-to-repair language
                    in its manuals
                  </h3>
                  <p className="text-sm text-gray-600">
                    Oct 3, 2024, 6:30 PM GMT+5:30
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className="mt-6 text-center">
            <Link
              to="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              SEE ALL 105 STORIES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
