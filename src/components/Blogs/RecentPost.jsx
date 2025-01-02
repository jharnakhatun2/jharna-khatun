import React from "react";
import { NavLink } from "react-router-dom";


const RecentPost = ({blogs}) => {
  // Sort blogs by date and get the 4 most recent posts
  const recentPosts = [...blogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <ul className="divide-y divide-zinc-400">
      {recentPosts.map((post) => (
        <li key={post.id} className="py-2">
          <NavLink
            to={post.href}
            target="_blank"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-200 ${isActive ? "text-blue-500 font-bold" : "text-secondary hover:text-zinc-600"}`
            }
          >
            {post.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default RecentPost;
