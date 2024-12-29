import React, { useState } from "react"
import Card from "../../components/Card/Card";
import CustomSelect from "./CustomSelect";
import projects from '../../data/projects';
import { searchFiltered } from "../../ultf/search";

const Projects = () => {
  const [filterProjects, setFilterProjects] = useState(projects);
  const [searchProject, setSearchProject] = useState("");

  const handleCategorySort = (category) => {
    if (!category) {
      setFilterProjects(projects);
    } else {
      setFilterProjects(
        projects.filter((project) =>
          project.tags.some((tag) => tag.toLowerCase() === category.toLowerCase())
        )
      );
    }
  }

  //Project search function 
  const handleSearchProject = (e) => {
    const query = e.target.value;
    setSearchProject(query);

    const searchFilteredProject = searchFiltered(projects, query, ["title", "description", "tagsList", "tags"]);
    setFilterProjects(searchFilteredProject);
  }

  return (
    <>
      {/*------------- Project Page ---------------*/}
      <main className="container mx-auto py-8 px-5">
        {/* Project utility section */}
        <div>
          {/* header and total projects  */}
          <div className="flex flex-row items-center">
            <h1 className="text-3xl mb-6 uppercase font-extrabold">Projects</h1>
            <div
              id="projectCount"
              className="bg-white text-blue-400 px-2 rounded text-sm ml-3 self-start"
            >
              {filterProjects.length}
            </div>
          </div>
          <div className="sm:flex flex-row items-center mb-6 justify-between">
            {/*----------- Sorting ------------*/}
            <div className="flex flex-row items-center">
              <div className="text-sm text-gray-500 mr-1">Sort by:</div>
              <CustomSelect handleCategorySort={handleCategorySort} />
            </div>
            {/* search bar */}
            <div className="relative flex items-center sm:w-2/12 h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden mt-3 sm:mt-0">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                className="search-input peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
                value={searchProject}
                onChange={handleSearchProject}
              />
            </div>
          </div>
        </div>
        {/* Page-specific content goes here */}
        {filterProjects.length > 0 ? (<div className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-12 justify-items-center">
          <Card filterProjects={filterProjects} />
        </div>) : ( <div className="grid grid-cols-1 justify-items-center">
            <div className="flex my-20 justify-center bg-secondary w-full lg:w-2/4 py-5 text-white text-center">
              <p className="font-bold text-xl lg:text-2xl">
                No projects found matching your search.
              </p>
            </div>
        </div>)}
        
       
        {/* bottom */}
        <div className="flex justify-center mt-10 w-full">
          <button
            id="view-more"
            className="border border-white hover:border-stone-500 hover:text-stone-500 rounded bg-stone-500 hover:bg-white text-white text-sm transition-all py-2 px-5 uppercase font-bold"
          >
            View More
          </button>
        </div>
      </main>
    </>

  )
};

export default Projects;
