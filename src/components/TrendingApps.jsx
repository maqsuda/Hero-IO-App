import { useEffect, useState } from "react";
import TrendingApp from "./TrendingApp";
import { Link } from "react-router";

const TrendingApps = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    fetch("/herodata8.json")
      .then((res) => res.json())
      .then((data) => setTrendingData(data));
  }, []);

  return (
    <div className="pt-10 text-center bg-[#f1f5e8] px-5 md:px-10 mx-auto">
      <h2 className="text-5xl font-bold">Trending Apps</h2>
      <p className="py-5">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {trendingData.map((app) => (
          <TrendingApp key={app.id} app={app}></TrendingApp>
        ))}
      </div>
      <div>
        <Link to="/allApp">
          <button className="text-center my-10 gap-2 py-2 px-5 rounded-md bg-linear-to-r from-[#632ee3] to-[#9f62f2]  text-white pmt-5">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
