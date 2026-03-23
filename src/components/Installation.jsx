import React, { use, useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
import { getStoreAppList, removeToStoredAppList } from "../components/AddToDB";
import { FaDownload } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";

const Installation = ({ allAppPromise }) => {
  const [myAppData, setMyAppData] = useState([]);

  const [sort, setSort] = useState([]);
  console.log(sort);
  const tdata = use(allAppPromise);

  useEffect(() => {
    const storedApp = getStoreAppList();
    const convertedData = storedApp.map((id) => parseInt(id));
    const appData = tdata.filter((app) => convertedData.includes(app.id));
    setMyAppData(appData);
  }, [tdata]);

  const handleUninstalled = (id) => {
    removeToStoredAppList(id);
  };

  const handleSort = (type) => {
    setSort(type);
    if (type === "downloads") {
      const sortedByDownload = [...myAppData].sort(
        (a, b) => a.downloads - b.downloads,
      );
      setMyAppData(sortedByDownload);
    }
  };

  return (
    <div className="px-2 py-4 md:p-10 bg-[#d2d2d2]">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold">Your Installed Apps</h1>

        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between p-2 items-center">
        <p>
          <span>{myAppData.length} </span>App Found
        </p>

        <button
          onClick={() => handleSort("downloads")}
          className=" border-2 border-gray-400 p-2"
        >
          Sort By Download
        </button>
      </div>

      {myAppData.map((app) => (
        <div
          key={app.id}
          className="p-2 rounded-xs bg-[#ffffff] grid md:grid-cols-12  mt-2"
        >
          <div className="size-28  md:col-span-1">
            <img src={app.image}></img>
          </div>
          <div className="flex flex-col md:flex-col justify-between md:col-span-11">
            <div className="">
              <h2 className="text-2xl font-bold">{app.title}</h2>
              <div className=" grid grid-cols-2 md:flex  items-center pl-2 justify-between">
                <div className=" flex justify-between md:grid md:grid-cols-3 gap-5">
                  <div className="">
                    <span className="text-emerald-300">
                      <FaDownload />
                    </span>
                    <p className="">{app.downloads / 100000}M</p>
                  </div>
                  <div>
                    <span className="text-[#ff8811]">
                      <IoStar />
                    </span>
                    <p>{app.ratingAvg}</p>
                  </div>
                  <div>
                    <span className="text-[#632ee3]">
                      <BiSolidLike />
                    </span>
                    <p>{app.reviews}</p>
                  </div>
                </div>

                <div className=" justify-end">
                  <button
                    onClick={() => handleUninstalled(app.id)}
                    className="bg-[#00d390] p-2 rounded-xs text-white"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Installation;
