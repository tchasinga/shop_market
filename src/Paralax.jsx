import { useState , useEffect } from 'react'
import './styles.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import image1 from './img/Image01.jpg'
import image2 from './img/image02.webp'
import image3 from './img/image03.jpg'

const Paralax = () => {
    const {innerHeight} = window;

    const getRatio = el => innerHeight / (innerHeight + el.offsetHeight)
    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('section')
        .forEach((s, i)=>{
            s.bg, {
                backgroundPosition: () =>
                i
                ? `50% ${
                    -innerHeight * getRatio(s)}px
                    `
                    :"50% 0px"
            },
            {
                backgroundPosition: () =>
                `50% ${
                innerHeight * (1 - getRatio)    
                }px`,
                ease : "none",
                ScrollTrigger: {
                    trigger: s, 
                    start: () =>(i
                        ? "top bottom" : "top top"
                    ),
                    end: "bottom top",
                    scrub : true
                }
            }
        })
    }, [])
    return (
        <>
          <section>
            <div className="bg" style={{backgroundImage : `url(${image1})`}}/>
            <h1>Welcom to shop-market</h1>
          </section>

          <section>
            <div className="bg" style={{backgroundImage: `url(${image2})`}}/>
            <h1>Market news</h1>
          </section>

          <section>
            <div className="bg" style={{backgroundImage: `url(${image3})`}}/>
            <h1>Jordan 04 Generation</h1>
          </section>
        </>
    )
}
export default  Paralax
