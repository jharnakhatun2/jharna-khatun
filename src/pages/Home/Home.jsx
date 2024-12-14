import React from "react";
import HomeContent from "../../components/HomeContent/HomeContent";
import SocialIcon from "../../components/HomeContent/SocialIcon";

const Home = () => {
  return (
    <div className="h-full flex flex-col">
      <HomeContent/>
      <SocialIcon/>
    </div>
  );
};

export default Home;
