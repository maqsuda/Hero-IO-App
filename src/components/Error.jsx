import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import ErrorPage from "../components/ErrorPages";

const Error = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ErrorPage></ErrorPage>
      <Footer></Footer>
    </div>
  );
};

export default Error;
