import React from "react"
import { frontEnd, css, backend,database, tools, imageData } from '../../data/about';

const About = () => {

  return (
    <div>
      <h1 className="text-3xl mb-6 uppercase font-extrabold">MY SKILLS</h1>
      {/* skills*/}
      <div className="sm:flex gap-10">
        <div className="w-full sm:w-2/4">
          {/* Skill dynamic buttons */}
          <div className="my-6">
            <h2 className="text-lg mb-1 uppercase font-semibold">Frontend Technologies:  :</h2>
            {frontEnd.map((item, index) => (
              <button key={index} className="skillBtn">
                {item}
              </button>
            ))}
          </div>
          <div className="my-6">
            <h2 className="text-lg mb-1 uppercase font-semibold">CSS tools and libraries :</h2>
            {css.map((item, index) => (
              <button key={index} className="skillBtn">
                {item}
              </button>
            ))}
          </div>
          <div className="my-6">
            <h2 className="text-lg mb-1 uppercase font-semibold">
            Backend :
            </h2>
            {backend.map((item, index) => (
              <button key={index} className="skillBtn">
                {item}
              </button>
            ))}
          </div>
          <div className="my-6">
            <h2 className="text-lg mb-1 uppercase font-semibold">Database :</h2>
            {database.map((item, index) => (
              <button key={index} className="skillBtn">
                {item}
              </button>
            ))}
          </div>
          <div className="my-6">
            <h2 className="text-lg mb-1 uppercase font-semibold">Tools & Platforms :</h2>
            {tools.map((item, index) => (
              <button key={index} className="skillBtn">
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* skill image Start*/}
        <div className="w-full sm:w-2/4 ">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {
              imageData.map((item, index) => (
                <div key={index} className="flex w-1/4 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt={item.alt}
                      className="h-auto w-full rounded-lg  bg-white"
                      src={item.src}
                    />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>

  )
};

export default About;
