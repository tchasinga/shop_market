import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import image1 from './img/Image01.jpg';
import image2 from './img/image02.webp';
import image3 from './img/image03.jpg';

const Parallax = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section').forEach((s, i) => {
      const getRatio = () => {
        const innerHeight = window.innerHeight;
        return innerHeight / (innerHeight + s.offsetHeight);
      };

      gsap.to(s.querySelector('.bg'), {
        backgroundPosition: () => (i ? `50% ${-getRatio() * 100}%` : '50% 0px'),
        ease: 'none',
        scrollTrigger: {
          trigger: s,
          start: i ? 'top bottom' : 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      <section>
        <div className="bg" style={{ backgroundImage: `url(${image1})` }} />
        <h1>Welcome to shop-market</h1>
      </section>

      <section>
        <div className="bg" style={{ backgroundImage: `url(${image2})` }} />
        <h1>Market news</h1>
      </section>

      <section>
        <div className="bg" style={{ backgroundImage: `url(${image3})` }} />
        <h1>Jordan 04 Generation</h1>
      </section>
    </>
  );
};

export default Parallax;
