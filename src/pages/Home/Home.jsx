import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import HomeContent from "../../components/HomeContent/HomeContent";
import SocialIcon from "../../components/HomeContent/SocialIcon";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navigation />
      <HomeContent/>
      <SocialIcon/>
    </div>
  );
};

export default Home;
