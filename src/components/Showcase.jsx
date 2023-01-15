/** @format */

import React, { useRef, useEffect } from 'react';
import './Showcase.css';
import Typed from 'typed.js';
import { Icon } from '@iconify/react';
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
      <section className="showcase">
        <div className="showcase-text">
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
          <div className="showcase-img">
            <div className="logos">
            <Icon icon="vscode-icons:file-type-mongo" color="green" width="50" height="50" />
            <Icon icon="simple-icons:express" color="green" width="50" height="50" />
            <Icon icon="mdi:react" color="green" width="50" height="50" />
            <Icon icon="vscode-icons:file-type-node" color="green" width="50" height="50" />
            <Icon icon="akar-icons:postgresql-fill" color="green" width="50" height="50" />
            <Icon icon="logos:html-5" color="green" width="50" height="50" />
            <Icon icon="logos:css-3" color="green" width="50" height="50" />
            <Icon icon="tabler:brand-javascript" width="50" height="50" />
            <Icon icon="fa-brands:bootstrap" color="purple" width="50" height="50" />
            <Icon icon="vscode-icons:file-type-sass" color="purple" width="50" height="50" />
            <Icon icon="mdi:git" color="black" width="50" height="50" />
            <Icon icon="bxl:heroku" color="black" width="50" height="50" />
            <Icon icon="mdi:github" color="black" width="50" height="50" />
            <Icon icon="simple-icons:inkscape" color="black" width="50" height="50" />
            <Icon icon="logos:aws" color="black" width="50" height="50" />
            <Icon icon="logos:figma" color="black" width="50" height="50" />
            <Icon icon="ri:invision-fill" color="black" width="50" height="50" />
            <Icon icon="logos:bash-icon" color="black" width="50" height="50" />
            <Icon icon="openmoji:wireframes" color="black" width="50" height="50" />
            <Icon icon="logos:visual-studio-code" color="black" width="50" height="50" />
            <Icon icon="vscode-icons:file-type-jest" color="black" width="50" height="50" />

            </div>
          </div>

          <p className="showcase-demo">
            <small>
              Empowering developers to create, innovate, and captivate a
              connected world
            </small>
          </p>
        </>
      </section>
    
    </>
  );
}
