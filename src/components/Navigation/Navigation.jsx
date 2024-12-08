import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {/*----------- small navbar ---------------*/}
      <header className="bg-white bg-opacity-5  block md:hidden">
        <div className="container mx-auto flex items-center justify-between h-14">
          <a href="index.html" className="flex items-center justify-center">
            <span className="ml-4 uppercase font-black">JHARNA KHATUN</span>
          </a>
          {/* toggle Button */}
          <button
            id="open"
            className="bg-[#444] hover:bg-gray text-white py-1 px-2 font-bold mr-4 cursor-pointer block md:hidden"
          >
            ☰
          </button>
          <button
            id="close"
            className="py-1 px-2 font-bold mr-4 text-xl cursor-pointer hidden"
          >
            ×
          </button>
        </div>
      </header>
      {/* Dropdown Menu */}
      <nav id="dropdown" className="bg-[#e2e2e2] block md:hidden dropdown">
        <ul className="divide-y divide-[#f8f8f8]">
          <li className="px-5 py-3">
            <a href="about.html">
              <span>About</span>
            </a>
          </li>
          <li className="px-5 py-3 xl:p-8">
            <a href="projects.html">
              <span>Projects</span>
            </a>
          </li>
          <li className="px-5 py-3">
            <a href="blogs.html">
              <span>Blog</span>
            </a>
          </li>
          <li className="font-semibold px-5 py-3">
            <a href="contact.html">
              <span>Contact me</span>
            </a>
          </li>
        </ul>
      </nav>
      {/*----------- large navbar ---------------*/}
      <header className="hidden md:block  bg-white bg-opacity-5 px-5">
        <div className="container mx-auto flex items-center h-16">
        <div>
          <Link to="/" className="uppercase font-black">JHARNA KHATUN</Link>
          </div>
          
          <nav className="contents text-base lg:text-md">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 ">
                <Link to="/">Home</Link>
              </li>
              <li className="p-5 xl:p-8 ">
                <Link to="/about">About</Link>
              </li>
              <li className="p-5 xl:p-8 ">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="p-5 xl:p-8 ">
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </nav>
          <div>
          <Link to="/contact" className="border border-white rounded-full font-bold px-8 py-3 hover:border-transparent hover:bg-zinc-400 hover:text-white transition-all">Contact me</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
