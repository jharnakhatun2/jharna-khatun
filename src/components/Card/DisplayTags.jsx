import React, { useState } from "react"

const DisplayTags = ({ project }) => {
    const [showAllTags, setShowAllTags] = useState(false);
    const handleToggle = () => {
        setShowAllTags(pre => !pre)
    }

    const displayTags = showAllTags ? project?.tagsList : project?.tagsList.slice(0, 3);
    return (
        <div className="tags">
            <ul className="flex flex-row flex-wrap">
                {
                    displayTags.map((tag, index) => (
                        <li key={index} className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                            <span className="inline-block bg-zinc-400 rounded-sm px-2 py-1 text-xs font-normal">
                                {tag}
                            </span>
                        </li>
                    ))
                }
                <li onClick={handleToggle} className="flex flex-row items-center mb-2">
                    <button
                        className="toggle-tags transition duration-200 ease-in-out flex flex-row items-center hover:text-[#fde047] text-xs font-light"
                        title="Show more"
                    >
                        {showAllTags ? '- less' : '+ more'}
                    </button>
                </li>
            </ul>
        </div>
    )
};

export default DisplayTags;
