import React, { useEffect, useRef } from 'react';
import { bgSquare } from 'assets';
import './background.scss';

function BackgroundAnimation() {
  const animationContainer = useRef(null);
  const img = useRef([]);

  useEffect(() => {
    const random = (max) => Math.floor(Math.random() * max);

    for (let i = 0; i < img.current.length; i++) {
      img.current[i].style.position = 'absolute';
      img.current[i].style.top = `${random(101)}%`;
      img.current[i].style.left = `${random(60)}%`;
      img.current[i].style.width = `${random(25) + 5}vw`;
    }

    animationContainer.current.style.height = '100%';
    animationContainer.current.style.width = '100%';
  }, []);

  return (
    <div
      ref={animationContainer}
      className="animation-container"
      style={{ position: 'fixed', height: '100vh', width: '100vw' }}
    >
      <img
        src={bgSquare}
        alt="bg-square"
        ref={(el) => img.current.push(el)}
        className="bg-square"
      />
      <img
        src={bgSquare}
        alt="bg-square"
        ref={(el) => img.current.push(el)}
        className="bg-square"
      />
      <img
        src={bgSquare}
        alt="bg-square"
        ref={(el) => img.current.push(el)}
        className="bg-square"
      />
      <img
        src={bgSquare}
        alt="bg-square"
        ref={(el) => img.current.push(el)}
        className="bg-square"
      />
      <img
        src={bgSquare}
        alt="bg-square"
        ref={(el) => img.current.push(el)}
        className="bg-square"
      />
      <img
        src={bgSquare}
        alt="bg-square"
        ref={(el) => img.current.push(el)}
        className="bg-square"
      />
      <img
        src={bgSquare}
        alt="bg-square"
        ref={(el) => img.current.push(el)}
        className="bg-square"
      />
    </div>
  );
}

export default BackgroundAnimation;
