import React from "react"
import { blogs } from "../../data/blog";

const Post = () => {
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}
        data-tags="javascript"
        className="blogCard max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md"
      >
        <div className="flex justify-between items-center">
          <span className="font-light text-gray">{blog.date}</span>
          <p className="text-sm px-2 py-1 bg-zinc-500 text-white font-bold rounded hover:bg-gray">
            {blog.tag}
          </p>
        </div>
        <div className="mt-2">
          <a
            className="title text-2xl font-bold hover:text-secondary"
            href={blog.href}
            target="_blank"
          >
            {blog.title}
          </a>
          <p className="description mt-2 text-gray text-justify">
            {blog.description}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a
            className="read-more text-secondary hover:underline"
            href={blog.href}
            target="_blank"
          >
            Read more
          </a>
          <div>
            <a className="flex items-center" href="#">
              <img
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                src="https://i.ibb.co.com/G29Bn3G/profile.png"
                alt="avatar"
              />
              <h1 className="text-gray-700 font-bold text-sm">Jharna Khatun</h1>
            </a>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
};

export default Post;
