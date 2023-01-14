/** @format */

import logo from '../images/logo.png';
import Moon from './icons/Moon.jsx';
import Sun from './icons/Sun.jsx';
import DarkModeIcon from './icons/DarkModeIcon.jsx';

import React, { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(
    localStorage.getItem('darkMode') === 'enabled',
  );

  const toggleDarkMode = async () => {
    if (isDarkModeEnabled) {
      localStorage.setItem('darkMode', 'disabled');
      setIsDarkModeEnabled(false);
    } else {
      localStorage.setItem('darkMode', 'enabled');
      setIsDarkModeEnabled(true);
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');
    isDarkModeEnabled
      ? body.classList.add('dark-mode')
      : body.classList.remove('dark-mode');
  }, [isDarkModeEnabled]);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img
              src={logo}
              alt="tm-LBenson logo"
            />
          </a>
        </div>
        <nav>
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
            <li
              onClick={toggleDarkMode}
              id="toggle-button"
              className="link"
            >
              <DarkModeIcon />
            </li>
          </ul>
        </nav>
      </div>
      {isDarkModeEnabled ? (
        <Moon className="moon-svg" />
      ) : (
        <Sun className="sun-svg" />
      )}
    </header>
  );
}
