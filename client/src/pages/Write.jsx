import { useAuth, useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Upload from "../components/Upload";
import toast from "react-hot-toast";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post("/api/v1/posts", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },

    onSuccess: (res) => {
      toast.success("Post has been created");
    },
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn && isLoaded) {
    return <div>You need to sign in to write.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      img: cover.url || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    console.log(data);

    mutation.mutate(data, {
      onSuccess: () => {
        e.target.reset();
        setCover("");
        setValue("");
        setProgress(0);
      },
    });
  };
  return (
    <div className="md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-xl font-light text-white">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6 mb-6">
        <Upload
          type="image"
          setProgress={setProgress}
          setData={setCover}
          data={cover}
        >
          <button
            type="button"
            className="w-fit bg-white text-black rounded-full px-4 p-2 shadow-md hover:bg-gray-100"
          >
            Add a cover image
          </button>
        </Upload>

        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-4xl text-white font-semibold bg-transparent outline-none"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="category" className="text-md">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="seo">SEO</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          name="desc"
          id=""
          placeholder="A Short Description"
          className="p-4 rounded-xl bg-white shadow-md"
        />
        <div className="flex flex-1 ">
          {/* <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div> */}
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 px-4 w-fit disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Publish"}
        </button>
        {"Progress:" + progress}
      </form>
    </div>
  );
};

export default Write;
