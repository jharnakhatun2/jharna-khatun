import React from "react";


const Categories = ({blogs, onCategorySelect }) => {
    // Extract unique categories
    const uniqueCategories = ["All", ...new Set(blogs.map((blog) => blog.tag))];

    return (
        <div id="category-select" className="flex flex-wrap gap-3 py-2 text-sm">
            {uniqueCategories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => onCategorySelect(category)}
                    className="sort-btn bg-zinc-400 py-1 px-2 rounded border border-zinc-400 hover:border-white hover:bg-opacity-0 text-white hover:text-blue-400 transition-colors"
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
