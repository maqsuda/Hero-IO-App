import React from "react";
import { Link } from "react-router";
import imageError from "../assets/Error-App Not Found.png";

const AppNotFound = () => {
  return (
    <div className="bg-gray-300 text-center p-10">
      <div className="flex justify-center">
        <img className=" w-75" src={imageError}></img>
      </div>
      <h1 className="text-5xl mt-10">Oops, App not found!</h1>
      <p className="text-[#627382] mt-3">
        The App you are looking for is not available.
      </p>
      <Link to="/allApp">
        <button className="bg-linear-to-r from-[#632ee3] to-[#9f62f2]  text-white px-5 py-3 mt-5 rounded-lg">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default AppNotFound;
