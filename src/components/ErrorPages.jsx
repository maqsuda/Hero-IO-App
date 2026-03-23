import React from "react";
import { Link } from "react-router";
import imageError from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="bg-gray-300 text-center p-10">
      <div className="flex justify-center">
        <img className=" w-75" src={imageError}></img>
      </div>
      <h1 className="text-5xl mt-10">Oops, page not found!</h1>
      <p className="text-[#627382] mt-3">
        The page you are looking for is not available.
      </p>
      <Link to="/">
        <button className="bg-linear-to-r from-[#632ee3] to-[#9f62f2]  text-white px-5 py-3 mt-5 rounded-lg">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
