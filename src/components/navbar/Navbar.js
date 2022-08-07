import React from 'react';

import { NavLink } from 'react-router-dom';

import ImageLogo from '../../images/marvel_logo.png';
import './Navbar.modules.scss';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <a
          href="https://www.marvel.com/"
          target="_blank"
          rel="noreferrer"
          className="logo-navbar"
        >
          <img src={ImageLogo} className="img-logo" alt="logo" />
        </a>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Home
          </NavLink>
          <NavLink
            to="/characters"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Characters
          </NavLink>
          <NavLink
            to="/comics"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Comics
          </NavLink>
          {/* <NavLink to="/" style={navLinkChange}>
            Home
          </NavLink>
          <NavLink to="/characters" style={navLinkChange}>
            Characters
          </NavLink>
          <NavLink to="/comics" style={navLinkChange}>
            Comics
          </NavLink> */}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
