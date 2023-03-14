/** @format */

import React, { useState, useEffect } from 'react';
import Contact from './Contact';

export default function Chat() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bodyOverflow, setBodyOverflow] = useState('');

  const handleChatClick = async () => {
    setIsModalOpen(true);
    setBodyOverflow('hidden');
   await fetch('https://astro-server-z1u9.onrender.com/');

  };

  useEffect(() => {
    document.body.style.overflow = bodyOverflow;
  }, [bodyOverflow]);

  return (
    <>
      <div
        onClick={handleChatClick}
        className="chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 16 16"
        >
          <path
            fill="#ab0c0c"
            d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234c-.2.032-.352-.176-.273-.362c.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"
          />
        </svg>
      </div>
      {isModalOpen ? (
        <div
          onClick={() => {
            setIsModalOpen(false);
            setBodyOverflow('');
          }}
          className="modal"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal__inner"
          >
            <Contact />
          </div>
        </div>
      ) : null}
    </>
  );
}
