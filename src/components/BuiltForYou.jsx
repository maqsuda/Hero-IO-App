import React from "react";

const BuiltForYou = () => {
  return (
    <div className="bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white pb-10">
      <h1 className="text-2xl md:text-5xl pt-20 text-center font-bold">
        Trusted by Millions, Built for You
      </h1>
      <div className="pt-10 flex flex-col md:flex-row  justify-center items-center ">
        <div className="md:p-5 text-center ">
          <p className="text-xs text-gray-300">Total Downloads</p>
          <h3 className="text-5xl font-bold py-5">29.6M</h3>
          <p className="text-xs text-gray-300">21% more than last month</p>
        </div>
        <div className="md:p-5 text-center ">
          <p className="text-xs text-gray-300">Total Reviews</p>
          <h3 className="text-5xl font-bold py-5">906K</h3>
          <p className="text-xs text-gray-300">46% more than last month</p>
        </div>
        <div className="md:p-5 text-center">
          <p className="text-xs text-gray-300 ">Active Apps</p>
          <h3 className="text-5xl font-bold py-5">132+</h3>
          <p className="text-xs text-gray-300">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default BuiltForYou;
