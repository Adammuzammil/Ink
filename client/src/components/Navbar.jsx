import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import { MenuIcon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/posts" },
  { label: "Sign Up", href: "/signup" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { getToken } = useAuth();
  useEffect(() => {
    getToken().then((token) => console.log(token));
  }, []);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div>
        <Link to={"/"}>Blog</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div onClick={() => setOpen((prev) => !prev)}>
          {open ? <X className="size-8" /> : <MenuIcon className="size-8" />}
        </div>
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16   transition-all ease-in-out ${
            open ? "-right-0" : "-right-full"
          }`}
        >
          {navLinks.map((link) => (
            <a href={link.href}>{link.label}</a>
          ))}
          <button className="px-4 py-2 rounded-3xl bg-blue-400 text-white">
            Login👋
          </button>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        {navLinks.map((link) => (
          <a href={link.href}>{link.label}</a>
        ))}
        <SignedOut>
          <Link to="/login">
            <button className="px-4 py-2 rounded-3xl bg-blue-400 text-white">
              Login👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
