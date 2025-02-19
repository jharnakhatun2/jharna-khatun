import React, { useState } from "react"
import { Link } from "react-router-dom";

const SmallNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    // Close the menu when a link is clicked
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Reusable transition class
    const transitionClass = `transition-all duration-300 ease-in-out`;
    return (
        <>
            <div>
                <button
                    onClick={toggleMenu}
                    className="bg-[#444] hover:bg-gray text-white py-1 px-2 font-bold cursor-pointer block md:hidden"
                >
                    {isOpen ? "×" : "☰"}
                </button>
            </div>

            {/* Dropdown Menu */}
            <nav className={`absolute z-50 left-0 w-full bg-[#e2e2e2] overflow-hidden ${transitionClass} ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                <ul className="divide-y divide-[#f8f8f8] text-sm">
                    <li className={`px-5 py-3 hover:shadow-lg ${transitionClass}`}>
                        <Link to='/' onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className={`px-5 py-3 hover:shadow-lg ${transitionClass}`}>
                        <Link to='about' onClick={handleLinkClick}>About</Link>
                    </li>
                    <li className={`px-5 py-3 hover:shadow-lg ${transitionClass}`}>
                        <Link to='projects' onClick={handleLinkClick}>Projects</Link>
                    </li>
                    <li className={`px-5 py-3 hover:shadow-lg ${transitionClass}`}>
                        <Link to='blogs' onClick={handleLinkClick}>Blogs</Link>
                    </li>
                    <li className={`px-5 py-3 hover:shadow-lg ${transitionClass}`}>
                        <Link to='contact' onClick={handleLinkClick}>Contact me</Link>
                    </li>
                </ul>
            </nav></>
    )
};

export default SmallNav;
