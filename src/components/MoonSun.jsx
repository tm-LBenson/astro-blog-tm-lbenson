/** @format */

import React, { useEffect, useState } from 'react';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import './darkMode.css';

export default function MoonSun({ isDarkModeEnabled }) {
  return (
    <>
      {isDarkModeEnabled ? (
        <Moon className="moon-svg" />
      ) : (
        <Sun className="sun-svg" />
      )}
    </>
  );
}
