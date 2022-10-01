import React from 'react'

function Header() {
    return (
      //   NavBar
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Pizza-Restaurants
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fa fa-home" aria-hidden="true"></i>
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fa fa-cutlery" aria-hidden="true"></i> Restaurants
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fa fa-cutlery" aria-hidden="true"></i> Pizzas
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="fa fa-phone" aria-hidden="true"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header