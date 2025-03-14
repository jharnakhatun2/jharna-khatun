import React from "react"
import { sortedPosts } from "../../ultf/utility";
import DisplayTags from "./DisplayTags";
import Description from "./Description";
import { Link } from "react-router-dom";


const Card = ({ filterProjects }) => {
    const lastInFirstProject = sortedPosts(filterProjects);

    return (
        <>
            {
                lastInFirstProject.map((project, index) => (
                    <div key={index}
                        data-tags={project.tags.map(item => item)}
                        className="projectCard bg-stone-500 shadow-2xl border border-white rounded-lg max-w-sm "
                    >
                        <div className="h-[255px] w-full cursor-pointer">
                        <a href={project?.live_links} target="_blank"><img
                                className="rounded-t-lg w-full h-full object-cover"
                                src={project?.image}
                                alt=""
                            /></a>
                        </div>
                        <div className="p-5">
                            {/* header */}
                            <a href={project?.live_links} target="_blank">
                                <h5 className="title text-white font-semibold text-xl tracking-tight mb-2">
                                    {project?.title}
                                </h5>
                            </a>
                            {/* date and star */}
                            <div className="flex flex-row items-center mb-3 justify-between">
                                <div>
                                    <div className="text-xs text-gray-500">
                                        <div className="flex flex-row items-center">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="mr-1 text-white"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                                                <line x1={16} y1={2} x2={16} y2={6} />
                                                <line x1={8} y1={2} x2={8} y2={6} />
                                                <line x1={3} y1={10} x2={21} y2={10} />
                                            </svg>
                                            <div className="text-secondary">{project?.date}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row items-center text-xs text-gray-500 font-light">
                                        <a
                                            href={project?.stars?.href}
                                            alt=""
                                            target="_blank"
                                            className="transition duration-200 ease-in-out flex flex-row items-center"
                                            title="Stars on GitHub"
                                        >
                                            <svg
                                                className="text-[#fde047]"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                height={14}
                                                width={14}
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                            <div className="ml-1 text-xs font-bold text-black ">{project?.stars?.totalStars}</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* details */}
                            <Description project={project}/>
                            {/* tags */}
                            <div className="card">
                                <DisplayTags project={project} />
                            </div>
                            {/* buttons */}
                            <div className="flex flex-row items-center">
                                <a
                                    href={project?.live_links}
                                    target="_blank"
                                    className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white mr-3 bg-white py-2 px-3 rounded shadow-sm border border-gray hover:border-black"
                                >
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition-colors duration-200 ease-in-out hover:fill-white"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                    <span className="w-2" />
                                    Preview
                                </a>
                                <a
                                    href={project?.source_code}
                                    target="_blank"
                                    className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white undefined bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray hover:border-black"
                                >
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 496 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                    </svg>
                                    <span className="w-2" />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
};

export default Card;
