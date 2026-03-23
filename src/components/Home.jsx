import React from "react";
import Footer from "./Footer";
import Banner from "../components/Banner";
import BuiltForYou from "../components/BuiltForYou";
import TrendingApps from "../components/TrendingApps";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BuiltForYou></BuiltForYou>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
