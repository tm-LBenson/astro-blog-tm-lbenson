/** @format */

import React from 'react';
import logo from '../images/logo.png';
export default function NavDrawer({ isOpen }) {
  return (
    <nav className={`nav-drawer ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <img
          className="drawer-logo"
          src={logo}
          alt="logo"
        />
      )}
      {isOpen && (
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
