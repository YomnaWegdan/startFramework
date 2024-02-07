import React, {  useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scroll , setScroll] = useState(0)

  const handleScroll=()=>{
    setScroll(window.scrollY)
  }
  const navbarPadding = scroll > 100 ? '15px' : '30px';
  window.addEventListener('scroll', handleScroll);
  return (
    <>
      <nav style={{padding:navbarPadding}}
        className="navbar navbar-expand-lg bg-dark border-bottom border-body  fixed-top fw-bold  "
        data-bs-theme="dark"
      >
        <div className="container">
          <Link className="navbar-brand fs-" to="/">
            START FRAMEWORK
          </Link>
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
              <li className="nav-item mx-3">
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
