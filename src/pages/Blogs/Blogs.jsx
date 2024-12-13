import React from "react"
import SocialIcon from "../../components/HomeContent/SocialIcon";
import Categories from "../../components/Blogs/Categories";

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
            <p className="text-sm px-2 py-1 bg-zinc-500 text-white font-bold rounded hover:bg-gray">
              Javascript
            </p>
          </div>
          <div className="mt-2">
            <a
              className="title text-2xl font-bold hover:text-secondary"
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
                <h1 className="text-gray-700 font-bold text-sm">Jharna Khatun</h1>
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
      <Categories/>
      {/* Recent post */}
      <div className="mt-8">
        <h1 className="text-lg uppercase font-bold">Recent Posts</h1>
        <ul id="recent-posts-list" className="divide-y divide-gray font-light">
          {/* 4 most recent posts will be dynamically inserted here */}
        </ul>
      </div>
      {/* social Icons Start*/}
      <div className="flex">
        <SocialIcon/>
      </div>
    </div>
  </div>
</main>

  )
};

export default Blogs;
