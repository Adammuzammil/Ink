import {
  Facebook,
  Instagram,
  Linkedin,
  MoveUpRight,
  Twitter,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col justify-center col-start-1">
          <h1 className="text-2xl font-bold">INK</h1>
          <p className="text-sm text-gray-400 mt-2">
            Your journey, your stories.
          </p>
        </div>

        <div className="flex justify-center gap-8 col-start-3">
          <ul className="space-y-2 text-center">
            <li>
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                About
              </Link>
            </li>
          </ul>
          <ul className="space-y-2 text-center">
            <li>
              <Link to="/" className="hover:text-orange-500">
                Tech
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                Sports
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                Culture
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-orange-500">
                Politics
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-t border-gray-800 mt-8 pt-4 px-4 md:px-8 text-center text-lg text-gray-500">
        <div className="text-lg order-2">© 2024 INK. All rights reserved.</div>

        <div className="flex flex-col items-center space-y-2">
          {/* <p className="text-gray-400">Follow us:</p> */}
          <div className="flex space-x-4">
            <Link className="hover:text-orange-500 text-lg underline">
              <div className="flex items-center">Facebook</div>
            </Link>
            <Link className="hover:text-orange-500 text-lg underline">
              Twitter
            </Link>
            <Link className="hover:text-orange-500 text-lg underline">
              Instagram
            </Link>
            <Link className="hover:text-orange-500 text-lg underline">
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
