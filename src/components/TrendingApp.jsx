import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const TrendingApp = ({ app }) => {
  const { title, ratingAvg, downloads, image } = app;
  return (
    <div className="card bg-base-100 w-80 shadow-sm">
      <figure className="px-2 pt-5">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between gap-24 mt-2">
          <button className="btn ">
            <span className="text-emerald-300">
              <FaDownload />
            </span>
            <span className="text-emerald-300"> {downloads / 100000}M</span>
          </button>
          <button className="btn text-[#632ee3]">
            <span>
              <IoStar />
            </span>
            {ratingAvg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingApp;
