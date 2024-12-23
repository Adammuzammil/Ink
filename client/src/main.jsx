import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Write from "./pages/Write.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import SinglePost from "./pages/SinglePost.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import AllPosts from "./pages/AllPosts.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import UserProfile from "./pages/UserProfile";

const queryClient = new QueryClient();

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <AllPosts />,
      },
      {
        path: "/posts/author/:username",
        element: <UserProfile />,
      },
      {
        path: "/:slug",
        element: <SinglePost />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
