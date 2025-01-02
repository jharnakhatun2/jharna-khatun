import React, { useEffect, useState } from "react"
import Post from "../../components/Blogs/Post";
import RightSidebar from "./RightSidebar";
import { searchFiltered } from "../../ultf/search";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //fetch data
  useEffect(()=>{
    fetch('blog.json')
    .then((result)=>{
      console.log(result);
      setBlogs(result);
      setFilteredBlogs(result)
    })
    .catch((error)=> console.error(error))
  },[])

  // Handle category selection
  const handleCategorySelect = (category) => {
    if (category === "All") {
      // Show all blogs
      setFilteredBlogs(blogs);
    } else {
      // Filter blogs by category
      setFilteredBlogs(blogs.filter((blog) => blog.tag === category));
    }
  };

  //Search function
  const handleSearchQuery = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = searchFiltered(blogs, query, ["title", "description", "tag"]);
    setFilteredBlogs(filtered);
  }
  return (
    <div>
      {/* header and total blogs  */}
      <div className="flex flex-row items-center">
        <h1 className="text-3xl mb-6 uppercase font-extrabold">Blog</h1>
        <div
          id="blogCount"
          className="bg-zinc-500 text-white px-1 rounded text-xs ml-3 self-start"
        >{filteredBlogs.length}</div>
      </div>
      {/* Page-specific content goes here */}

      <div className="block lg:flex gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-9/12 ">
          {/* search bar */}
          <div className="relative flex items-center w-full md:w-4/12 h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-zinc-400"
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
              value={searchQuery}
              onChange={handleSearchQuery}
            />
          </div>
          {/* Blog Cards */}
          
          <div className="blog-container ">
            {/* Blog Card */}
            {filteredBlogs.length > 0 ?  <Post blogs={filteredBlogs} /> : (
              /* search missing content */
              <div className="flex my-20 sm:mt-24 justify-center bg-secondary w-full sm:w-2/4 mx-auto py-5 text-white text-center">
              <p className="font-bold text-xl lg:text-2xl">No blogs found matching your search.</p>
            </div>
            )}
          </div>
        </div>
        {/* right side */}
        <RightSidebar blogs={blogs} handleCategorySelect={handleCategorySelect} />
      </div>
    </div>

  )
};

export default Blogs;
