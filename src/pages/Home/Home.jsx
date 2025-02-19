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
              I am a passionate and skilled React Web Developer, Front-End Developer, and MERN Stack Developer with a proven track record of building intuitive, user-focused web applications. My expertise centers on JavaScript and TypeScript, along with advanced proficiency in React.js, Next.js, and Redux.

              I excel in integrating modern CSS libraries such as Tailwind CSS, Material UI, and Bulma CSS to create sleek, responsive, and user-centric interfaces. Also I'm proficient in the full MERN stack (MongoDB, Express.js, React.js, Node.js). I specialize in crafting seamless UI/UX experiences, integrating RESTful APIs, and optimizing performance for dynamic web applications.
            </p><br />
            <p>
              As a React Front-End Developer, I design pixel-perfect, mobile-friendly websites that align with client project requirements. My work includes creating reusable components, translating designs and wireframes into high-quality, efficient code, and delivering scalable solutions.

              With strong problem-solving skills, keen attention to detail, and a commitment to delivering high-quality code, I aim to contribute to a dynamic team and drive digital success. Enthusiastic about staying up-to-date with emerging technologies, I am eager to contribute to innovative web development projects.
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
