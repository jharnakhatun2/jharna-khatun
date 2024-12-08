import React from "react"
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen grid content-stretch">
    <Navigation/>
    <main>
        <Outlet/>
    </main>
      
    </div>
  )
};

export default Layout;
