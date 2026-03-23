import React, { use, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { useParams } from "react-router";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { addToStoredAppList } from "../components/AddToDB";

const AppDetails = ({ allAppPromise }) => {
  const { id } = useParams();
  // const data = useLoaderData();
  const data = use(allAppPromise);
  const singleApp = data.find((app) => app.id === parseInt(id));
  const { title, ratingAvg, downloads, image, reviews, description, ratings } =
    singleApp;

  const [installed, setInstalled] = useState(false);

  const handleInstalled = (id) => {
    addToStoredAppList(id);
    setInstalled(true);
  };

  return (
    <div className="w-11/12 mx-auto py-10 bg-[#d9d9d9] md:px-10">
      <div className="grid grid-cols-2 md:grid-cols-4 px-2">
        <div className=" col-span-1 justify-center items-center">
          <img className="w-75" src={image}></img>
        </div>
        <div className="col-span-3">
          <h2 className="font-bold text-2xl pt-5 ">{title}</h2>
          <div className="grid grid-cols-3 md:grid-cols-3 pb-6">
            <div className=" p-6">
              <span className="text-emerald-300">
                <FaDownload />
              </span>
              <h3>Downloads</h3>
              <p className="font-bold text-2xl py-5">{downloads / 100000}M</p>
            </div>

            <div className=" p-6">
              <span className="text-[#ff8811]">
                <IoStar />
              </span>
              <h3>Average Ratings</h3>
              <p>{ratingAvg}</p>
            </div>

            <div className=" p-6">
              <span className="text-[#632ee3]">
                <BiSolidLike />
              </span>
              <h3>Total Reviews</h3>

              <p>{reviews}</p>
            </div>
          </div>
          {installed ? (
            <button
              id="btn-Install"
              onClick={() => handleInstalled(id)}
              className="bg-[#81d5ba] p-2 disabled"
            >
              Installed
            </button>
          ) : (
            <button
              id="btn-Install"
              onClick={() => handleInstalled(id)}
              className="bg-[#00d390] p-2 cursor-pointer"
            >
              Install Now (291 MB)
            </button>
          )}
        </div>
      </div>
      <div>
        <h1 className="px-2 py-5 font-bold text-2xl">Ratings</h1>
        <div className="p-3 md:p-10 ">
          <BarChart width={300} md:width={730} height={250} data={ratings}>
            <CartesianGrid horizontal={true} vertical={false} stroke="#eee" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#ff8811" />
            <Bar dataKey="name" fill="#82ca9d" />
          </BarChart>
        </div>
        <div>
          <h3 className="px-2 text-2xl font-bold py-4">Description</h3>
          <p className="px-2">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default AppDetails;
