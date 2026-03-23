import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import ErrorPages from "../components/ErrorPages";
import AppNotFound from "./AppNotFound";

const AppError = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AppNotFound></AppNotFound>
      <Footer></Footer>
    </div>
  );
};

export default AppError;
