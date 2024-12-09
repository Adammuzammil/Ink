import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import { ChevronDown, MenuIcon, SearchIcon, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "DEVELOPMENT", href: "/security" },
  { label: "POLITICS", href: "/politics" },
  { label: "CRICKET", href: "/gear" },
  { label: "BLOGS", href: "/posts" },
  { label: "BUSINESS", href: "/business" },
  { label: "SCIENCE", href: "/science" },
  { label: "CULTURE", href: "/culture" },
  { label: "IDEAS", href: "/ideas" },
  { label: "MARKETING", href: "/merch" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showSearchDialog, setShowSearchDialog] = useState(false);

  const toggleInput = () => {
    setShowInput((prev) => !prev);
  };

  const toggleSearchDialog = () => {
    setShowSearchDialog((prev) => !prev);
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const { getToken } = useAuth();
  useEffect(() => {
    getToken().then((token) => console.log(token));
  }, []);

  const tabletNavLinks = navLinks.slice(0, 3);
  const moreNavLinks = navLinks.slice(3);

  return (
    <>
      <nav className="fixed top-0 z-50 bg-white w-full h-16 border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
            <Link
              to="/"
              className="text-2xl font-bold ml-4 md:ml-0 hover:text-gray-800"
            >
              INK
            </Link>
          </div>

          <ul className="hidden lg:flex items-center md:space-x-4 lg:space-x-6 font-semibold text-sm uppercase tracking-widest text-gray-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="hover:text-black transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="hidden lg:hidden md:flex items-center space-x-6 font-semibold text-sm uppercase tracking-widest text-gray-600">
            {/* First 3 menu items */}
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="hover:text-black transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* More Dropdown */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center hover:text-black transition-all duration-200">
                  MORE <ChevronDown size={16} className="ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {navLinks.slice(3).map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link to={link.href} className="cursor-pointer px-4 py-3">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>

          <div className="md:hidden flex items-center space-x-4">
            <Dialog open={showSearchDialog} onOpenChange={setShowSearchDialog}>
              <DialogTrigger asChild>
                <button
                  className="text-gray-600 hover:text-black"
                  onClick={toggleSearchDialog}
                >
                  <SearchIcon size={20} />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl w-full p-6 overflow-hidden rounded-2xl border-none shadow-2xl lg:max-w-screen-lg overflow-y-scroll max-h-screen">
                <div className="flex">
                  <div className="w-full p-6">
                    <div className="relative">
                      <SearchIcon
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="Search articles, topics, authors..."
                        className="w-full pl-12 pr-4 py-3 text-lg border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors duration-300"
                      />
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-500 mb-4">
                        Quick Links
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Technology",
                          "Politics",
                          "Science",
                          "Business",
                          "Culture",
                        ].map((topic) => (
                          <button
                            key={topic}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <SignedOut>
              <Link
                to="/login"
                className="text-gray-600 hover:text-black text-base"
              >
                Sign In
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Desktop Menu */}
          {/* <ul className="hidden md:flex items-center space-x-6 font-semibold text-sm uppercase tracking-widest text-gray-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="hover:text-black transition-all duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul> */}

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            <div>
              <SignedOut>
                <Link to="/login" className="text-gray-600 hover:text-black">
                  Sign In
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <div className="h-5 w-0.5 bg-gray-400" />
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-600 hover:text-black transition-colors duration-200">
                  <SearchIcon size={20} />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl w-full p-6 overflow-hidden rounded-2xl border-none shadow-2xl">
                <div className="flex">
                  {/* Search Input Section */}
                  <div className="w-full p-6">
                    <div className="relative">
                      <SearchIcon
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="Search articles, topics, authors..."
                        className="w-full pl-12 pr-4 py-3 text-lg border-b-2 border-gray-200 focus:border-blue-500 outline-none transition-colors duration-300"
                      />
                    </div>

                    {/* Recent Searches or Quick Links */}
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-500 mb-4">
                        Quick Links
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Technology",
                          "Politics",
                          "Science",
                          "Business",
                          "Culture",
                        ].map((topic) => (
                          <button
                            key={topic}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Search Results Placeholder */}
                    {/* <div className="mt-8">
                      <Search />
                    </div> */}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
              <ul className="flex flex-col items-start p-4 space-y-6 font-semibold text-sm uppercase tracking-widest text-gray-600">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-lg hover:text-black transition-all duration-200"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                {/* <div className="w-full border-t border-black my-4" /> */}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
