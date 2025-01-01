import React from "react";
import SocialIcon from "../../components/HomeContent/SocialIcon";
import ProfileInfo from "../../components/HomeContent/ProfileInfo";

const Home = () => {
  return (
    <>
      {/*---------------- Main Content --------------------*/}
        <div className="h-[calc(100vh-180px)] flex flex-col justify-around ">
        <div>
        {/* Identification content Start*/}
        <ProfileInfo />
        {/* Profile Details */}
        <div className="py-10 text-justify">
          <p>
            Hi there! I'm Jharna Khatun. I am a Front End Web Developer where my
            expertise on HTML, CSS, Tailwind, Sass, Bootstrap, JavaScript,
            TypeScript, and React JS. Also I am comfortable with NextJS, Redux,
            Firebase, NodeJS, ExpressJS, MongoDB and more. I have 1.5 years
            experience in web development and completed over 45 projects. As a
            React Front End developer I design pixel perfect website to meet
            client project requirements, mobile-based features, reusable
            components, translate design and wireframes into high-quality
            efficient code. I aim to contribute to a dynamic team and drive
            digital success. My objective is to leverage my comprehensive
            knowledge of the Front-end and my problem-solving abilities to
            create seamless user experiences.
          </p>
        </div>
        </div>
        <SocialIcon/>
        </div>
    </>
  );
};

export default Home;
