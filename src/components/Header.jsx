/** @format */

import logo from '../images/logo.png';
import DarkModeIcon from './icons/DarkModeIcon.jsx';
import React, { useEffect, useState } from 'react';
import './Header.css';
import MoonSun from './MoonSun';
import { Icon } from '@iconify/react';
import NavDrawer from './NavDrawer';
import { analytics } from 'analytics-benson';

import { useMediaQuery } from 'react-responsive';
export default function Header() {
  const [icon, setIcon] = useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(
    localStorage.getItem('darkMode') === 'enabled',
  );
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const toggleDarkMode = async () => {
    setIcon(true);
    setTimeout(() => setIcon(false), 3000);
    if (isDarkModeEnabled) {
      localStorage.setItem('darkMode', 'disabled');
      setIsDarkModeEnabled(false);
    } else {
      localStorage.setItem('darkMode', 'enabled');
      setIsDarkModeEnabled(true);
    }
  };
  useEffect(() => {
    console.log('sending');
    analytics('Astro Portfolio', 'd526e49d-cc0f-468f-b04d-f59e21f6365a');
  }, []);
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
          {isMobile && <NavDrawer isOpen={isNavDrawerOpen} />}

          {isMobile && (
            <button
              className="nav-drawer-toggle"
              onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)}
            >
              <Icon
                icon="prime:bars"
                color="black"
                width="25"
                height="25"
              />
            </button>
          )}

          {!isMobile && (
            <ul>
              <li>
                <a href="/">Home</a>
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
          )}
        </nav>
      </div>
      {icon && <MoonSun isDarkModeEnabled={isDarkModeEnabled} />}
    </header>
  );
}
