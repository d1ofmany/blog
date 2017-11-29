import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <nav>
        <ul className="Navigation">
          <li className="Navigation-item">
            <Link className="Navigation-link" to="/">Start</Link>
          </li>
          <li className="Navigation-item">
            <Link className="Navigation-link" to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="Logo">
        <h1>Logo</h1>
      </div>
    </div>
  );
};

export default Header;
