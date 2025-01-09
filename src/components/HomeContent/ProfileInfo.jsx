import React from "react"
import SocialIcon from "./SocialIcon";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
       {/* Profile Image */}
       <img
        src="https://i.ibb.co.com/G29Bn3G/profile.png"
        alt="profile"
        className="w-10/12 h-1/2 md:w-1/3 md:h-1/3 lg:w-1/5 lg:h-1/5 rounded-full"
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
              JavaScript
              </span>
            </li>
            <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
              <span className="inline-block bg-neutral-400 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">
                Front-End
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
          <button className="bg-zinc-400 hover:bg-opacity-0 text-white border md:uppercase border-zinc-400 hover:border-white hover:text-zinc-700 transition-colors rounded-sm">
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
        {/* social media icon */}
        <div className="py-3"><SocialIcon/></div>
        
      </div>
    </div>
  )
};

export default ProfileInfo;
