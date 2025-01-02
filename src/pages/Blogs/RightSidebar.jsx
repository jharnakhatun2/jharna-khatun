import React, { useEffect, useState } from "react"
import Categories from "../../components/Blogs/Categories";
import RecentPost from "../../components/Blogs/RecentPost";
import SocialIcon from "../../components/HomeContent/SocialIcon";

const RightSidebar = ({blogs, handleCategorySelect}) => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll)
  }, []);
  return (
    <div>
      <div className={` ${isScrolled ? 'lg:fixed lg:top-10' : 'absolute'} w-full lg:w-3/12 transition-all duration-300 `}>
      <h1 className="text-lg uppercase font-bold">Categories</h1>
      {/* categories */}
      <Categories blogs={blogs} onCategorySelect={handleCategorySelect}/>
      {/* Recent post */}
      <div className="my-8">
        <h1 className="text-lg uppercase font-bold">Recent Posts</h1>
        <RecentPost blogs={blogs}/>
      </div>
      {/* social Icons Start*/}
      <div className="flex">
        <SocialIcon/>
      </div>
    </div>
    </div>
  )
};

export default RightSidebar;
