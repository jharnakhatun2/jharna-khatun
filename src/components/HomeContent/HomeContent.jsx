import React from "react"

const HomeContent = () => {
  return (
    <>
  {/*---------------- Home page --------------------*/}
  <main className="container mx-auto py-8 px-8 lg:px-0">
    {/* Identification content Start*/}
    <div className="flex flex-col md:flex-row justify-start items-center">
      {/* Profile Image */}
      <img
        src="https://i.ibb.co.com/G29Bn3G/profile.png"
        alt="profile"
        className="w-1/2 h-1/2 md:w-1/3 md:h-1/3 lg:w-1/5 lg:h-1/5 rounded-full"
      />
      {/* Profile Details*/}
      <div className="pl-0 md:pl-8 pt-2 md:pt-0">
        <div className="flex flex-row text-center">
          <h2 className="text-xl sm:text-2xl mb-1 uppercase font-bold">
            Jharna Khatun
          </h2>
        </div>
        <div className="mb-3 font-light text-gray flex flex-row items-center">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1 w-4 h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          React Web Developer
        </div>
        <div className="mb-3 text-gray">
          <div className="flex flex-row items-center font-light">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 w-4 h-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx={12} cy={10} r={3} />
            </svg>
            <div>Dhaka, Bangladesh</div>
          </div>
        </div>
        <div>
          <ul className="flex flex-row flex-wrap">
            <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
              <span className="inline-block bg-neutral-400 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">
                Front-End
              </span>
            </li>
            <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
              <span className="inline-block bg-neutral-400 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">
                JavaScript
              </span>
            </li>
            <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
              <span className="inline-block bg-neutral-400 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">
                React
              </span>
            </li>
          </ul>
        </div>
        {/* buttons */}
        <div className="flex flex-col sm:flex-row justify-between">
          <button className="bg-zinc-400 hover:bg-opacity-0 text-white border md:uppercase border-zinc-400 hover:border-white hover:text-gray transition-colors rounded-sm">
            <a
              className="flex items-center py-1 px-1 md:px-2"
              href="https://drive.google.com/file/d/1XZdE78zwakW8di6uez9NtbR6DuVCOiyH/view?usp=drive_link"
              target="_blank"
            >
              <svg
                aria-label="Location icon"
                role="img"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <span className="pl-2">Resume</span>
            </a>
          </button>
          <button className="border border-white font-bold md:uppercase px-2 hover:border-zinc-400 hover:bg-zinc-400 hover:text-white transition-colors sm:ml-2 mt-2 sm:mt-0 rounded-sm">
            <a
              className="flex items-center py-1 px-1 md:px-2"
              href="https://www.linkedin.com/in/jharna-khatun2/"
              target="_blank"
            >
              <svg
                aria-label="Location icon"
                role="img"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              <span className="pl-2">Hire Me</span>
            </a>
          </button>
        </div>
      </div>
    </div>
    {/* Profile Details */}
    <div className="py-8 text-justify">
      <p>
        Hi there! I'm Jharna Khatun. I am a Front End Web Developer where my
        expertise on HTML, CSS, Tailwind, Sass, Bootstrap, JavaScript,
        TypeScript, and React JS. Also I am comfortable with NextJS, Redux,
        Firebase, NodeJS, ExpressJS, MongoDB and more. I have 1.5 years
        experience in web development and completed over 45 projects. As a React
        Front End developer I design pixel perfect website to meet client
        project requirements, mobile-based features, reusable components,
        translate design and wireframes into high-quality efficient code. I aim
        to contribute to a dynamic team and drive digital success. My objective
        is to leverage my comprehensive knowledge of the Front-end and my
        problem-solving abilities to create seamless user experiences.
      </p>
    </div>
    {/* social Icons Start*/}
    <div className="flex justify-center pt-10">
      <ul className="flex flex-row flex-wrap justify-start pl-3">
        <li className="flex flex-row items-center last:mr-0 mr-4 mb-2">
          <a
            href="https://www.linkedin.com/in/jharna-khatun2/"
            className="transition duration-200 ease-in-out flex flex-row items-center hover:text-zinc-400"
            title="Jharna Khatun on LinkedIn"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              className="w-6 h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </li>
        <li className="flex flex-row items-center last:mr-0 mr-4 mb-2 hover:text-zinc-400">
          <a
            href="https://github.com/jharnakhatun2"
            className="transition duration-200 ease-in-out flex flex-row items-center"
            b_link=""
            title="Jharna Khatun on GitHub"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 496 512"
              className="w-6 h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
        </li>
        <li className="flex flex-row items-center last:mr-0 mr-4 mb-2 hover:text-zinc-400">
          <a
            href="https://leetcode.com/u/jharnakhatun203/"
            className="transition duration-200 ease-in-out flex flex-row items-center"
            b_link=""
            title="Jharna Khatun on GitHub"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              id="leetcode"
              className="w-6 h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z" />
              <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z" />
            </svg>
          </a>
        </li>
        <li className="flex flex-row items-center last:mr-0 mr-4 mb-2">
          <a
            href="https://twitter.com/Jharna203"
            className="transition duration-200 ease-in-out flex flex-row items-center hover:text-zinc-400"
            title="Jharna Khatun on Twitter"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="w-6 h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
        </li>
        <li className="flex flex-row items-center last:mr-0 mr-4 mb-2">
          <a
            href="https://jharnakhatun.medium.com/"
            className="transition duration-200 ease-in-out flex flex-row items-center hover:text-zinc-400"
            title="Jharna Khatun on Medium"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              className="w-6 h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z" />
            </svg>
          </a>
        </li>
        <li className="flex flex-row items-center last:mr-0 mr-4 mb-2">
          <a
            href="https://dev.to/jharna_khatun"
            className="transition duration-200 ease-in-out flex flex-row items-center hover:text-zinc-400"
            title="Jharna Khatun on Medium"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              id="dev-to"
            >
              <path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </main>
</>

  )
};

export default HomeContent;