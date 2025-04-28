'use client';
import React, { useRef, useEffect, useState } from 'react';
import styl from '@/app/styles/Balloon.module.css';

// Array of SVG paths for balloon backgrounds (replace with your actual SVG paths)
const balloonSVGs = [
  '/Balloon1.svg',
  '/Balloon2.svg',
  '/Ballon3.svg',
  '/Balloon4.svg',
  '/Balloon5.svg',
  '/Balloon6.svg',
  // Add more SVG paths as needed
];

function BalloonComponent() {
  const balloonContainerRef = useRef<HTMLDivElement>(null);
  const [balloonImages, setBalloonImages] = useState<string[]>([]);

  // Load SVG images (you might want to do this differently based on your setup)
  useEffect(() => {
    // In a real app, you might import these or fetch them
    setBalloonImages(balloonSVGs);
  }, []);

  function random(num: number): number {
    return Math.floor(Math.random() * num);
  }

  function getRandomStyles() {
    const mt = random(200);
    const ml = random(50);
    const dur = random(8) + 8;

    // Choose a random SVG from the available ones
    const randomSvg =
      balloonImages.length > 0
        ? balloonImages[random(balloonImages.length)]
        : '';

    return {
      position: 'relative',
      backgroundImage: `url(${randomSvg})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      margin: `${mt}px 0 0 ${ml}px`,
      animationDuration: `${dur}s`,
    } as React.CSSProperties;
  }
  function createBalloons(num: number) {
    if (!balloonContainerRef.current || balloonImages.length === 0) return;

    // Clear existing balloons
    balloonContainerRef.current.innerHTML = '';

    for (let i = num; i > 0; i--) {
      const balloon = document.createElement('div');
      // Apply styles directly to the element
      const styles = getRandomStyles();

      Object.assign(balloon.style, styles);
      balloon.classList.add('balloon');

      balloonContainerRef.current.appendChild(balloon);
    }
  }
  useEffect(() => {
    // Only create balloons when we have images loaded
    if (balloonImages.length > 0) {
      createBalloons(15);
    }
  }, [balloonImages]);

  return <div className={styl.balloonContainer} ref={balloonContainerRef} />;
}

export default BalloonComponent;
