import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "./logo.jpg";

const Header = () => {
  return (
    <div className="Header">
      <nav>
        <ul className="Navigation">
          <li className="Navigation-item">
            <Link className="Navigation-link" to="/">
              Start
            </Link>
          </li>
          <li className="Navigation-item">
            <Link className="Navigation-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="Logo">
        <img className="Logo-image" src={logo} alt="Blog" />
      </div>
    </div>
  );
};

export default Header;
