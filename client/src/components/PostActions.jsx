import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Bookmark, Star, Trash } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PostActions = ({ post }) => {
  const { getToken } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();

  console.log(user);

  const {
    isPending,
    error,
    data: savedPosts,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      return axios.get(`/api/v1/users/saved`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
  });

  const isAdmin = user?.publicMetadata?.role === "admin" || false;
  const isSaved = savedPosts?.data?.some((p) => p === post._id) || false;
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`/api/v1/posts/${post._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },

    onSuccess: () => {
      toast.success("Post deleted successfully");
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `/api/v1/users/save`,
        {
          postId: post._id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
    },

    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const featureMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `/api/v1/posts/feature`,
        {
          postId: post._id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["post", post.slug] });
    },

    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  const handleSave = () => {
    saveMutation.mutate();
  };

  const handleFeature = () => {
    featureMutation.mutate();
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center gap-2">
        <Bookmark
          onClick={handleSave}
          className={`${
            saveMutation.isPending
              ? isSaved
                ? "fill-transparent"
                : "fill-white"
              : isSaved
              ? "fill-white"
              : "fill-transparent"
          } cursor-pointer`}
        />
        {saveMutation.isPending && (
          <span className="text-xs">(in progress)</span>
        )}

        {user && (post.user.username === user.username || isAdmin) && (
          <Trash
            color="red"
            onClick={handleDelete}
            className="cursor-pointer"
          />
        )}
      </div>
      {isAdmin && (
        <div className="flex items-center gap-2" onClick={handleFeature}>
          <Star
            className={`${
              featureMutation.isPending
                ? post.isFeatured
                  ? "fill-transparent"
                  : "fill-white"
                : post.isFeatured
                ? "fill-white"
                : "fill-transparent"
            } cursor-pointer`}
          />
          <span className="text-sm">Feature</span>
          {featureMutation.isPending && (
            <span className="text-xs">(in progress)</span>
          )}
        </div>
      )}
    </div>
  );
};

export default PostActions;
