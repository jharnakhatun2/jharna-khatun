import React from "react"
import { Link, Outlet } from "react-router-dom";
import LargeNav from "../../components/Navigation/LargeNav";
import SmallNav from "../../components/Navigation/SmallNav";

const Layout = () => {
  return (
    <div className="container mx-auto">
        <header className="flex items-center justify-between px-5 py-3">
        <Link to="/" className="uppercase font-black">JHARNA KHATUN</Link>
        <div className="hidden md:block">
          <LargeNav />
        </div>
        <div className="block md:hidden">
          <SmallNav />
        </div>
        </header>
        
        <main className="py-8 px-5">
            <Outlet/>
        </main>
      
    </div>
  )
};

export default Layout;
