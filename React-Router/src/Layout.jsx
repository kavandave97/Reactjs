import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Componets/Header/Header";
import Footer from "./Componets/Footer/Footer";
const Layout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
