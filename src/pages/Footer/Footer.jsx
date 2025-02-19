import React from "react"

const Footer = () => {
  return (
    <footer className="footer items-center border-base-300 border-t py-4 text-xs">
        <aside className="grid-flow-col items-center gap-5 text-gray-500">
          <p>© {new Date().getFullYear()} By Jharna Khatun</p>
        </aside>
      </footer>
  )
};

export default Footer;
