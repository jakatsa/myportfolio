import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { MdReorder } from "react-icons/md";
export const Navbar = () => {
  const [expandNavBar, setExpandNavBar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);
  return (
    <div className="navbar" id={expandNavBar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavBar((prev) => !prev);
          }}
        >
          <MdReorder />
        </button>
      </div>
      <div className="links container px-4">
        <Link to="/" className="text-gradient ">
          Joe Akatsa
        </Link>
        <Link to="/projects" className="text-gradient">
          Projects
        </Link>
        <Link to="/experience" className="text-gradient ">
          Resume
        </Link>
      </div>
    </div>
  );
};
