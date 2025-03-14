import React, { useState } from "react"

const Description = ({ project }) => {
    const [readMore, setReadMore] = useState(false);
    const handleToggle = () =>{
        setReadMore((pre)=> !pre)
    }

    const displayLimit = readMore ? project?.description : project?.description.slice(0, 130)+ "...";
    return (
        <>
        <p className="description font-normal mb-3 text-sm text-zinc-800">
            {displayLimit}
            <button className="ml-2 transition duration-200 ease-in-out hover:text-blue-300 text-[#fde047]  text-xs font-light" onClick={handleToggle}>{readMore ? "⇡ less" :"read ⇣"}</button>
        </p>
        
        </>
    )
};

export default Description;
