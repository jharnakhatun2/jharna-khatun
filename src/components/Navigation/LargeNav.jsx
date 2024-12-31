import React from "react"
import { Link, useLocation } from "react-router-dom";

const LargeNav = () => {
    const location = useLocation();
  return (
    <div className="flex items-center justify-between">
          <nav className="contents text-base lg:text-md">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 ">
                <Link to="/" style={{ color: location.pathname === '/' ? '#60a5fa' : 'black' }}>Home</Link>
              </li>
              <li className="p-5 xl:p-8 ">
                <Link to="/about" style={{ color: location.pathname === '/about' ? '#60a5fa' : 'black' }}>About</Link>
              </li>
              <li className="p-5 xl:p-8 ">
                <Link to="/projects" style={{ color: location.pathname === '/projects' ? '#60a5fa' : 'black' }}>Projects</Link>
              </li>
              <li className="p-5 xl:p-8 ">
                <Link to="/blogs" style={{ color: location.pathname === '/blogs' ? '#60a5fa' : 'black' }}>Blogs</Link>
              </li>
            </ul>
          </nav>
          <div>
          <Link to="/contact" className="border border-white rounded-full font-bold px-8 py-3 hover:border-transparent hover:bg-zinc-300 hover:text-white transition-all" style={{ color: location.pathname === '/contact' ? '#60a5fa' : 'black' }}>Contact me</Link>
          </div>
          </div>
  )
};

export default LargeNav;
