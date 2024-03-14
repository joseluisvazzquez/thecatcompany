import React, { useState } from 'react';


export default function Navbar() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary py-4 shadow-5">
      
      <div className="container-fluid">
       
      <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
        <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
        </ul>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
      
          <ul className="navbar-nav mb-2 mb-lg-0 lead">
           
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                data-mdb-dropdown-init
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                aria-expanded="false"
              >
                Dropdown
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another action</a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"
                >Disabled</a>
            </li>
          </ul>

        </div>
       
      </div>
    </nav>
  );
}