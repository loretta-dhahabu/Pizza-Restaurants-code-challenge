import React from 'react'

function Header() {
    return (
      //   NavBar
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Pizza-Restaurants
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <i className="fa fa-home" aria-hidden="true"></i>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/restaurants">
                <i className="fa fa-cutlery" aria-hidden="true"></i> Restaurants
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/pizzas">
                <i className="fa fa-cutlery" aria-hidden="true"></i> Pizzas
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">
                <i className="fa fa-phone" aria-hidden="true"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header