import React from "react"

const Blogs = () => {
  return (
    <main className="container mx-auto py-8 px-8 lg:px-0">
  {/* header and total blogs  */}
  <div className="flex flex-row items-center">
    <h1 className="text-3xl mb-6 uppercase font-extrabold">Blog</h1>
    <div
      id="blogCount"
      className="bg-gray text-white px-1 rounded text-xs ml-3 self-start"
    ></div>
  </div>
  {/* Page-specific content goes here */}
  {/* sidebar */}
  <div className="block md:flex gap-8">
    {/* Left Side */}
    <div className="w-full md:w-9/12 ">
      {/* search bar */}
      <div className="relative flex items-center w-full md:w-4/12 h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray">
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
          placeholder="Search ..."
        />
      </div>
      {/* Blog Cards */}
      <div className="blog-container">
        {/* Blog Card */}
        <div
          data-tags="javascript"
          className="blogCard max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <span className="font-light text-gray">Sep 18, 2024</span>
            <p className="text-sm px-2 py-1 bg-neutral text-white font-bold rounded hover:bg-gray">
              Javascript
            </p>
          </div>
          <div className="mt-2">
            <a
              className="title text-2xl font-bold hover:text-gray"
              href="https://jharnakhatun.medium.com/the-debounce-technique-for-javascript-form-validation-91d39f3fad46"
              target="_blank"
            >
              The debounce technique for JavaScript form validation
            </a>
            <p className="description mt-2 text-gray text-justify">
              We use the debounce technique for JavaScript form validation to
              prevent excessive validation calls, improve performance, reduce
              network/API calls and more.
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a
              className="read-more text-secondary hover:underline"
              href="https://jharnakhatun.medium.com/the-debounce-technique-for-javascript-form-validation-91d39f3fad46"
              target="_blank"
            >
              Read more
            </a>
            <div>
              <a className="flex items-center" href="#">
                <img
                  className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                  src="https://i.ibb.co.com/G29Bn3G/profile.png"
                  alt="avatar"
                />
                <h1 className="text-gray-700 font-bold">Jharna Khatun</h1>
              </a>
            </div>
          </div>
        </div>
        {/* Blog Card */}
        <div
          data-tags="next"
          className="blogCard max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <span className="font-light text-gray">Oct 18, 2024</span>
            <p className="text-sm px-2 py-1 bg-neutral text-white font-bold rounded hover:bg-gray">
              js DOM
            </p>
          </div>
          <div className="mt-2">
            <a
              className="title text-2xl font-bold hover:text-gray"
              href="https://dev.to/jharna_khatun/what-is-a-batch-dom-update-and-why-is-it-useful-d3k"
              target="_blank"
            >
              What is a Batch DOM update and Why is it useful?
            </a>
            <p className="description mt-2 text-gray text-justify">
              Batching DOM updates refers to making multiple changes to the DOM
              in a way that reduces the number of reflows and repaints, which
              are costly operations for the browser.
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a
              className="text-secondary hover:underline"
              href="https://dev.to/jharna_khatun/what-is-a-batch-dom-update-and-why-is-it-useful-d3k"
              target="_blank"
            >
              Read more
            </a>
            <div>
              <a className="flex items-center" href="#">
                <img
                  className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                  src="https://i.ibb.co.com/G29Bn3G/profile.png"
                  alt="avatar"
                />
                <h1 className="text-gray-700 font-bold">Jharna Khatun</h1>
              </a>
            </div>
          </div>
        </div>
        {/* Blog Card */}
        <div
          data-tags="jsdom"
          className="blogCard max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <span className="font-light text-gray">Oct 18, 2024</span>
            <p className="text-sm px-2 py-1 bg-neutral text-white font-bold rounded hover:bg-gray">
              Js DOM
            </p>
          </div>
          <div className="mt-2">
            <a
              className="title text-2xl font-bold hover:text-gray"
              href="https://dev.to/jharna_khatun/reflows-and-repaints-in-javascript-2ep1"
              target="_blank"
            >
              What are the best practices for optimizing CSS to reduce
              unnecessary reflows and repaints, especially in large-scale
              applications?
            </a>
            <p className="description mt-2 text-gray text-justify">
              A reflow (also called layout or re-layout) occurs when the browser
              recalculates the position, size, and layout of elements on the
              page.
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a
              className="text-secondary hover:underline"
              href="https://dev.to/jharna_khatun/reflows-and-repaints-in-javascript-2ep1"
              target="_blank"
            >
              Read more
            </a>
            <div>
              <a className="flex items-center" href="#">
                <img
                  className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                  src="https://i.ibb.co.com/G29Bn3G/profile.png"
                  alt="avatar"
                />
                <h1 className="text-gray-700 font-bold">Jharna Khatun</h1>
              </a>
            </div>
          </div>
        </div>
        {/* search missing content */}
        <div className="no-results hidden mt-8">
          <p className="font-bold ">No blogs found matching your search.</p>
        </div>
      </div>
    </div>
    {/* right side */}
    <div className="right-sidebar w-full md:w-3/12 ">
      <h1 className="text-lg uppercase font-bold">Categories</h1>
      {/* categories */}
      <div id="category-select" className="flex flex-wrap gap-3 py-2 text-sm">
        <button
          value="html"
          className="sort-btn bg-neutral py-1 px-2 rounded border border-neutral hover:border-white hover:bg-opacity-0 text-black transition-colors"
        >
          HTML
        </button>
        <button
          value="tailwind"
          className="sort-btn bg-neutral py-1 px-2 rounded border border-neutral hover:border-white hover:bg-opacity-0 text-black transition-colors"
        >
          Tailwind
        </button>
        <button
          value="javascript"
          className="sort-btn bg-neutral py-1 px-2 rounded border border-neutral hover:border-white hover:bg-opacity-0 text-black transition-colors"
        >
          JavaScript
        </button>
        <button
          value="react"
          className="sort-btn bg-neutral py-1 px-2 rounded border border-neutral hover:border-white hover:bg-opacity-0 text-black transition-colors"
        >
          React.js
        </button>
        <button
          value="next"
          className="sort-btn bg-neutral py-1 px-2 rounded border border-neutral hover:border-white hover:bg-opacity-0 text-black transition-colors"
        >
          Next.js
        </button>
      </div>
      {/* Recent post */}
      <div className="mt-8">
        <h1 className="text-lg uppercase font-bold">Recent Posts</h1>
        <ul id="recent-posts-list" className="divide-y divide-gray font-light">
          {/* 4 most recent posts will be dynamically inserted here */}
        </ul>
      </div>
      {/* social Icons Start*/}
      <div className="flex justify-start py-8">
        <ul className="flex flex-row flex-wrap justify-start">
          <li className="flex flex-row items-center last:mr-0 mr-4 mb-2">
            <a
              href="https://www.linkedin.com/in/jharna-khatun2/"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:text-neutral"
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
          <li className="flex flex-row items-center last:mr-0 mr-4 mb-2 hover:text-neutral">
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
          <li className="flex flex-row items-center last:mr-0 mr-4 mb-2">
            <a
              href="https://twitter.com/Jharna203"
              className="transition duration-200 ease-in-out flex flex-row items-center hover:text-neutral"
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
              className="transition duration-200 ease-in-out flex flex-row items-center hover:text-neutral"
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
        </ul>
      </div>
    </div>
  </div>
</main>

  )
};

export default Blogs;
