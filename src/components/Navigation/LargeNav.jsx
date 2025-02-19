import React from "react"
import { Link, useLocation } from "react-router-dom";

const LargeNav = () => {
    const location = useLocation();
  return (
    <div className="flex items-center justify-between">
          <nav className="contents text-base lg:text-sm">
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
              <li className="p-5 xl:p-8 ">
                <Link to="/contact" style={{ color: location.pathname === '/blogs' ? '#60a5fa' : 'black' }}>Contact me</Link>
              </li>
            </ul>
          </nav>
          <div>
          </div>
          </div>
  )
};

export default LargeNav;
