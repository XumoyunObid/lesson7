import React from "react";
import Header from "./../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
