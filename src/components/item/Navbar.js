import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            Logo
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">Javascript</a>
            </li>
            <li>
              <a href="mobile.html">Mobile</a>
            </li>
            <li>
              <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                Dropdown<i class="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>

      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
