import React, { use, useState } from "react";
import { CiSearch } from "react-icons/ci";
import App from "../components/App";
import { ToastContainer } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const AllApp = ({ allAppPromise }) => {
  const allAppData = use(allAppPromise);

  const [isFocused, setIsFocused] = useState(false);
  const [appData, setAppData] = useState(allAppData);
  const navigate = useNavigate();

  // const notify = () => toast("No App Found!");
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.nameSearch.value;

    const filteredData = allAppData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
    if (filteredData.length == 0) {
      navigate("/error");
      // <Navigate to="/error" />;
      // <Navigate to="/login" replace />
      // notify();
      // <Navigate to="/Error"></Navigate>;
    }

    setAppData(filteredData);
    e.target.nameSearch.value = "";
  };

  return (
    <div className="mx-auto px-5 bg-[#d2d2d2] pb-10 ">
      <div className="text-center pt-10 md:pt-20">
        <h1 className="text-5xl font-bold">Our All Applications</h1>

        <p className="text-[#627382] text-xl pt-5">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row pt-10 justify-between items-center mb-5 md:mb-10">
        <div>
          <p className="pl-5">
            <span>( {appData.length} )</span>App Found
          </p>
        </div>

        <div className="mt-2">
          <form
            className="flex gap-2 text-center items-center"
            onSubmit={handleSearch}
          >
            {!isFocused && (
              <button className="absolute pl-2">
                <CiSearch />
              </button>
            )}

            {/* !isFocused && `
            <button className="absolute">
              <CiSearch />
            </button>{" "}
            ` */}
            <input
              onFocus={() => setIsFocused(true)}
              type="text"
              name="nameSearch"
              placeholder="   Search App"
              className="input-field border-2 border-gray-400 px-3 py-2 w-75 md:w-125"
            ></input>
          </form>
        </div>
      </div>
      <ToastContainer />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:px-10 ">
        {appData.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default AllApp;
