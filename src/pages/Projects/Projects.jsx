import React from "react"

const Projects = () => {
  return (
    <>
  {/*------------- Project Page ---------------*/}
  <main className="container mx-auto py-8 px-8 lg:px-0">
    {/* Project utility section */}
    <div>
      {/* header and total projects  */}
      <div className="flex flex-row items-center">
        <h1 className="text-3xl mb-6 uppercase font-extrabold">Projects</h1>
        <div
          id="projectCount"
          className="bg-gray text-white px-1 rounded text-xs ml-3 self-start"
        >
          23
        </div>
      </div>
      <div className="sm:flex flex-row items-center mb-6 justify-between">
        {/*----------- Sorting ------------*/}
        <div className="flex flex-row items-center">
          <div className="text-sm text-gray-500 mr-1">Sort by:</div>
          <div>
            <select className="text-sm py-1 px-2" id="sort-select">
              <option value="javascript" selected="">
                JavaScript
              </option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="dom">DOM</option>
              <option value="react">React</option>
              <option value="next">Next</option>
            </select>
          </div>
        </div>
        {/* search bar */}
        <div className="relative flex items-center sm:w-2/12 h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden mt-3 sm:mt-0">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="search-input peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>
    </div>
    {/* Page-specific content goes here */}
    <div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-12 justify-items-center">
      {/* Project Card One */}
      <div
        data-tags="dom,javascript"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/P59sdRF/quiz.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              JavaScript Quiz Game
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Oct 2024</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/quizeapp"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">65</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            Quiz App is an interactive and dynamic web application that allows
            users to test their knowledge through a series of customizable
            quizzes.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JS DOM
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JavaScript
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    QuizApp
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    CustomQuiz
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://quizeapp-six.vercel.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/quizeapp"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card two*/}
      <div
        data-tags="javascript,dom"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/tYDRd8T/form-Validation.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              Dynamic Form Validation
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Sep 2024</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/javascript-form-validation"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">65</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            JavaScript Form Validation project implements real-time validation
            techniques to ensure that users input correct and complete
            information before submission.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    RealTimeValidation
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Form Validation
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JS DOM
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    FormValidation
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://javascript-form-validation-pied.vercel.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/javascript-form-validation"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card three*/}
      <div
        data-tags="javascript,dom"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/r3XGkmd/framework-Manager.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              Framework Manager
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Oct 2024</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/framework-manager"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">5</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            With a simple and intuitive interface, users can quickly add new
            frameworks or remove existing ones, ensuring their framework
            collection stays organized.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Framework manager
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JavaScript
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JS DOM
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web App
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://framework-manager.vercel.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/framework-manager"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card four*/}
      <div
        data-tags="javascript,dom"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/ky8tzBn/realestate-ai.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              AI Property Listings Generator
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Mar 2024</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/real-estate-ai"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">8</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            AI-generated property listings provide a more efficient, accurate,
            and personalized experience for both real estate professionals and
            property seekers, improving the effectiveness of the property market
            as a whole.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    AI-Generator
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Property Listing
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    MERN
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    React.js
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web App
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://realestategenius.netlify.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/real-estate-ai"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card five*/}
      <div
        data-tags="landingpage,html"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/gtm4jk5/landingpage.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              Portable Charger
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Sep 2023</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/portable-charger"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">8</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            The Portable Charger Landing Page is a responsive HTML and CSS web
            page designed to showcase and promote portable charger products.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Landing Page
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    HTML
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    CSS
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web Design
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web App
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://portable-charger.vercel.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/portable-charger"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card Six*/}
      <div
        data-tags="landingpage,html"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/dkVVgtz/image-search-app.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              IMAGE SEARCH APP
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Nov 2023</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/Image-Search-App"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">0</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            This app allows users to search for images by keywords and displays
            the results dynamically.It fetches images from an external API and
            showcases them in a responsive grid layout.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JavaScript
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    HTML
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    CSS
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web Design
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web App
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://image-search-app-khaki.vercel.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/Image-Search-App"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card Seven*/}
      <div
        data-tags="landingpage,html"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/K0BWTWy/strage.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              Web Storage Manager
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Oct 2024</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/Image-Search-App"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">0</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            Web Storage Manager is a simple web application that demonstrates
            how to store, retrieve, and manage data in a browser's local and
            session storage.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JS DOM
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JavaScript
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    HTML
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    CSS
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web App
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://webstoragemanager.netlify.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/storage-manager"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card Eight*/}
      <div
        data-tags="landingpage,html"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/25zRjJD/matchmaster.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              PlayBudget App
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Aug 2022</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/best-five-dom_repo?tab=readme-ov-file"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">1</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            You can Easily add match players and cricket tournament management
            system running cost by PlayBudget App
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JS DOM
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    HTML
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    CSS
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web Design
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web App
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://choice-your-top-players.netlify.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/best-five-dom_repo?tab=readme-ov-file"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card Nine*/}
      <div
        data-tags="landingpage,html"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/bvbGVph/travelzone.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              Tour booking App
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Apr 2023</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/travel-xone"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">0</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            A tour booking app is a digital platform that allows users to
            explore, plan, and book travel experiences and tours.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Next.js
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Node.js
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    MongoDB
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web Development
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Web App
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://travel-xone-2023.vercel.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/travel-xone"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card Ten*/}
      <div
        data-tags="javascript,jsdom"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/NN9wMbN/areaCM.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              Geometry Area Calculation Manager
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Oct 2024</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/geometry-area-calculator"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">0</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            It's a JavaScript-based project that provides an interactive
            interface for calculating areas of various geometry shapes.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JavaScript
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    HTML
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    CSS
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Tailwind
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Daisy UI
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://area-calculator-manager.netlify.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/geometry-area-calculator"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Project Card Eleven*/}
      <div
        data-tags="javascript,jsdom"
        className="projectCard bg-gray shadow-md border border-white rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-[255px] w-full">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src="https://i.ibb.co.com/CwqhnJH/alphabet-game.png"
            alt=""
          />
        </div>
        <div className="p-5">
          {/* header */}
          <a href="#">
            <h5 className="title text-white font-bold text-2xl tracking-tight mb-2">
              Alphabet Clash Pro Game
            </h5>
          </a>
          {/* date and star */}
          <div className="flex flex-row items-center mb-3 justify-between">
            <div>
              <div className="text-xs text-gray-500">
                <div className="flex flex-row items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                  <div className="text-secondary">Nov 2024</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                <a
                  href="https://github.com/jharnakhatun2/alphabet-clash"
                  target="_blank"
                  className="transition duration-200 ease-in-out flex flex-row items-center"
                  title="Stars on GitHub"
                >
                  <svg
                    className="text-[#fde047]"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height={14}
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <div className="ml-1 text-xs font-bold">0</div>
                </a>
              </div>
            </div>
          </div>
          {/* details */}
          <p className="description font-normal mb-3 text-sm">
            Alphabet Clash Pro is a challenging, fast-paced puzzle game designed
            to test your reflexes and pattern recognition skills. Play in window
            / PC.
          </p>
          {/* tags */}
          <div className="card">
            <div className="tags">
              <ul className="flex flex-row flex-wrap">
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    JavaScript
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    HTML
                  </span>
                </li>
                <li className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    CSS
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Tailwind
                  </span>
                </li>
                <li className="extra-tags hidden flex flex-row items-center last:mr-0 mr-2 mb-2">
                  <span className="inline-block bg-neutral rounded-sm px-2 py-1 text-xs font-normal">
                    Daisy UI
                  </span>
                </li>
                <li className="flex flex-row items-center mb-2">
                  <a
                    href="#"
                    className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xs font-light"
                    title="Show more"
                  >
                    + more
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* buttons */}
          <div className="flex flex-row items-center">
            <a
              href="https://alphabet-match-game.netlify.app/"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <span className="w-2" />
              Preview
            </a>
            <a
              href="https://github.com/jharnakhatun2/alphabet-clash"
              target="_blank"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <span className="w-2" />
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* Message to show when no results are found */}
      <div className="no-results hidden">
        <p className="font-bold bg-neutral px-9 py-7">
          No projects found matching your search.
        </p>
      </div>
    </div>
    {/* bottom */}
    <div className="flex justify-center mt-10 w-full">
      <button
        id="view-more"
        className="border font-bold border-white hover:border-neutral rounded bg-neutral hover:bg-white text-black text-sm transition-all py-2 px-5"
      >
        View More
      </button>
    </div>
  </main>
</>

  )
};

export default Projects;