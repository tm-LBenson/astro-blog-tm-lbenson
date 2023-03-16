/** @format */

import logo from '../images/logo.png';
import DarkModeIcon from './icons/DarkModeIcon.jsx';

import React, { useEffect, useState } from 'react';
import './Header.css';
import MoonSun from './MoonSun';
import { Icon } from '@iconify/react';
import NavDrawer from './NavDrawer';
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
    const sendDataToServer = async (siteName) => {
      try {
        // Collect the necessary data
        const data = {
          siteName,
          date: new Date().toISOString(),
          screenSize: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
          deviceType:
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent,
            )
              ? 'mobile'
              : 'desktop',
          ipAddress: await fetch('https://api.ipify.org?format=json')
            .then((res) => res.json())
            .then((data) => data.ip),
        };
        console.log(data);
        // Send the data to the server
        const response = await fetch(
          'https://astro-server-z1u9.onrender.com/traffic-data',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        );

        // Check if the request was successful
        if (!response.ok) {
          throw new Error(
            `Error sending data to the server: ${response.statusText}`,
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    sendDataToServer('Astro LocalHost');
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
          )}
        </nav>
      </div>
      {icon && <MoonSun isDarkModeEnabled={isDarkModeEnabled} />}
    </header>
  );
}
