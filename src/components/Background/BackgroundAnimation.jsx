import React, { useEffect } from 'react';
import { bgSquare } from 'assets';
import './background.scss';

function BackgroundAnimation() {
  useEffect(() => {
    const animationContainer = document.querySelector('.animation-container');
    const img = document.querySelectorAll('.animation-container img');
    const random = (max) => Math.floor(Math.random() * max);

    for (let i = 0; i < img.length; i++) {
      img[i].style.position = 'absolute';
      img[i].style.top = `${random(101)}%`;
      img[i].style.left = `${random(60)}%`;
      img[i].style.width = `${random(25) + 5}vw`;
    }

    animationContainer.style.height = '100%';
    animationContainer.style.width = '100%';
  }, []);

  return (
    <div
      className="animation-container"
      style={{ position: 'fixed', height: '100vh', width: '100vw' }}
    >
      <img src={bgSquare} alt="bg-square" className="bg-square" />
      <img src={bgSquare} alt="bg-square" className="bg-square" />
      <img src={bgSquare} alt="bg-square" className="bg-square" />
      <img src={bgSquare} alt="bg-square" className="bg-square" />
      <img src={bgSquare} alt="bg-square" className="bg-square" />
      <img src={bgSquare} alt="bg-square" className="bg-square" />
      <img src={bgSquare} alt="bg-square" className="bg-square" />
    </div>
  );
}

export default BackgroundAnimation;
