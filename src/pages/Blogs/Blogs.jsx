import React from "react"
import SocialIcon from "../../components/HomeContent/SocialIcon";
import Categories from "../../components/Blogs/Categories";
import Post from "../../components/Blogs/Post";
import { blogs } from "../../data/blog";

const Blogs = () => {
  return (
    <main className="container mx-auto py-8 px-5">
  {/* header and total blogs  */}
  <div className="flex flex-row items-center">
    <h1 className="text-3xl mb-6 uppercase font-extrabold">Blog</h1>
    <div
      id="blogCount"
      className="bg-white text-blue-400 px-2 rounded text-sm ml-3 self-start"
    >{blogs.length}</div>
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
        <Post/>
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
