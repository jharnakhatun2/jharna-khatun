import React from "react"

const categories = ['HTML', 'Tailwind', 'JavaScript', 'React.js', 'Next.js'];

const Categories = () => {
    return (
        <div id="category-select" className="flex flex-wrap gap-3 py-2 text-sm">
            {
                categories.map((item, index) => (
                    <button key={index}
                        value="html"
                        className="sort-btn bg-zinc-500 py-1 px-2 rounded border border-zinc-500 hover:border-white hover:bg-opacity-0 text-white hover:text-primary transition-colors"
                    >
                        {item}
                    </button>
                ))
            }

        </div>
    )
};

export default Categories;
