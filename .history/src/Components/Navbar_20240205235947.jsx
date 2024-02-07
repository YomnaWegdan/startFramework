import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scroll , setScroll] = us
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body  fixed-top fw-bold py-3 "
        data-bs-theme="dark"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            START FRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
