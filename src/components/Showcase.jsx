/** @format */

import React, { useRef, useEffect } from 'react';
import './Showcase.css';
import Typed from 'typed.js';
export default function Showcase() {
  const renderedSpan = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        'Web Developer',
        'Welcome to my blog.',
        'I hope you find value in the content shared on this site.',
      ],
      typeSpeed: 70,
      backSpeed: 50,
      loopDelay: 0,
      startDelay: 1000,
      loop: true,
    };

    typed.current = new Typed(renderedSpan.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <section class="showcase">
        <div class="showcase-text">
          <div className="wrap">
            <h1>Lewis Benson</h1>

            <div className="type-wrap">
              <span
                style={{ whiteSpace: 'pre' }}
                ref={renderedSpan}
              />
            </div>
          </div>
        </div>
        <>
          <div class="showcase-img">
            <div class="logos">
              <img src="mern-icon.png" alt='MERN Stack logo'></img>
            </div>
          </div>

          <p class="showcase-demo">
            <small>This is where you can learn about what I do.</small>
          </p>
        </>
      </section>
    </>
  );
}
