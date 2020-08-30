import React from "react";
import Logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="company logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            HOME
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            ABOUT
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            TOURS
          </a>
        </li>
      </ul>
    </nav>
  );
}
