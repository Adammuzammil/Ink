import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="scrollbar-stable">
      <div className="mx-auto">
        <Navbar />
      </div>
      <main className="relative mt-16 md:mt-20 px-8 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
