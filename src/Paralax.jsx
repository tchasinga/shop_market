import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css'

import image1 from './img/Image01.jpg';
import image2 from './img/image02.webp';
import image3 from './img/image03.jpg';

// Import any styles you may need

// Initialize GSAP with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  useEffect(() => {
    // Create GSAP timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.carousel-container', // Use a specific class or element as the trigger
        start: 'top center', // Start the animation when the trigger is at the top center of the viewport
        end: 'bottom center', // End the animation when the trigger is at the bottom center of the viewport
        scrub: true, // Smoothly transition the animation as you scroll
        pin: true, // Pin the trigger element while the animation is active
      },
    });

    // Create animations for each image
    tl.to('.image1', { xPercent: -100 });
    tl.to('.image2', { xPercent: -100 });
    tl.to('.image3', { xPercent: -100 });
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img className="image1" src={image1} alt="Image 1" />
        <img className="image2" src={image2} alt="Image 2" />
        <img className="image3" src={image3} alt="Image 3" />
      </div>
    </div>
  );
};

export default { Parallax , image1, image2, image3};
