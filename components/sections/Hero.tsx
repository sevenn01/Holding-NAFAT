
"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

function Hero() {

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const [cardWidth, setCardWidth] = useState(0);

  // Measure card width for responsive animation
  useEffect(() => {
    const measure = () => {
      if (!cardRef.current) return;
      setCardWidth(cardRef.current.offsetWidth + 20); // 20px is the gap
    };

    measure(); // initial
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  const rahalEvents = [
    { img: '/owner.png', title: 'ASMAK RAHAL', description: 'is the biggest fish company of exportation to the world' },
    { img: '/owner.png', title: 'NAFAT', description: 'delivering quality products to the world since 1990' },
    { img: '/owner.png', title: 'PREST CONG', description: 'are delivering 30T of fish per year' },
    { img: '/owner.png', title: 'FISH', description: 'are delivering 30T of fish per year' },
    { img: '/owner.png', title: 'NAFAT', description: 'are delivering 30T of fish per year' },
  ]
  // Duble the events for seamless looping
  const events = [...rahalEvents, ...rahalEvents];

  const heroClasses = [
    { name: '.hero-title', duration: 1.5 },
    { name: '.hero-description', duration: 1 },
    { name: '.buttons', duration: 1 },
    { name: '.scroll-down', duration: 1.5 }
  ]

  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power3.out",
    },
  });

  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Parallax logic
    gsap.to(".owner-image", {
      scrollTrigger: {
        trigger: heroRef.current!,
        start: "center top",
        end: "+=1000",
        scrub: true,
      },
      y: -2000,
      rotation: 0,
      ease: "none",
    });

    // Intro animation
    heroClasses.forEach((className) => {
      tl.from(className.name, {
        y: 100,
        opacity: 0,
        duration: className.duration,
        ease: "power3.out",
      })
    });
  }, { scope: heroRef });

  // Carousel Animation
  useGSAP(() => {
    if (!carouselRef.current || !cardWidth) return;

    const totalWidth = cardWidth * rahalEvents.length;

    // Reset position
    gsap.set(carouselRef.current, { x: 0 });

    // Create seamless loop
    tweenRef.current = gsap.to(carouselRef.current, {
      x: -totalWidth,
      duration: 20, // Adjust speed here
      ease: "none",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, { dependencies: [cardWidth], scope: heroRef });


  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.play();
  };

  return (
    <main ref={heroRef} className="hero h-screen relative w-full px-20 md:pt-40 pt-30  pb-5 flex flex-col items-center justify-between bg-background text-foreground ">
      <div className="hero-content mb-20 text-center flex flex-col items-center justify-center gap-2 ">
        <div className="rate w-full mb-8 flex flex-col items-center justify-center text-1xl gap-2">
          <div className="stars align flex items-center justify-center gap-1 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <img
                key={index}
                src={'Star.svg'}
                width={20}
                alt="star"
                className="w-6 h-6 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]"
              />
            ))}
          </div>
          <div className="rate-text overflow-hidden">
            <p className="text-[1rem] text-gray-300 ">5/5 basé sur 120 avis clients</p>
          </div>
        </div>
        <div className="title-box  overflow-hidden">
          <h1 className="hero-title max-[479px]:text-6xl md:text-[10vw] text-8xl font-bold bg-linear-200 from-blue-500 from-40% to-blue-200 text-transparent bg-clip-text">NAFAT HOLDING</h1>
        </div>
        <div className="description-box flex items-center justify-center overflow-hidden max-[1000px]:w-[70vw]">
          <p className="hero-description max-[479px]:text-xl max-[479px]:leading-6 md:w-5xl max-[1000px]:w-full font-medium   text-[1.5rem]  leading-8 mt-2 text-gray-600">
            Un groupe marocain de référence opérant dans des secteurs stratégiques,
            au service de la qualité, de la performance et de la création de valeur durable.
          </p>
        </div>
        <div className="buttons mt-5 flex items-center justify-center gap-4">
          <button className="btn btn-primary cursor-pointer px-5 py-2 rounded-2xl font-bold text-background bg-blue-600 bg-linear-200 from-blue-600 from-55% to-blue-300 hover:bg-blue-700 border-0">Découvrir Nafat</button>
          <div className="
                btn-border rounded-2xl p-0.5
                bg-linear-to-tl from-blue-100 from-30% via-blue-500 via-60% to-blue-100 to-90% 
                bg-[length:200%_200%] 
                hover:bg-[position:50%_80%]
                transition-all duration-300 ease-in-out
              ">
            <button className="btn btn-outline cursor-pointer px-5 py-2 rounded-[12px] font-bold text-gray-500 bg-white ">Nos Services</button>
          </div>
        </div>

      </div>
      <div className="scroll-down w-full mb-10 md:mb-40 flex flex-col md:items-start md:justify-end items-center justify-center">
        <div className="all">
          <p className="font-medium text-gray-300">scroll for more</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce  text-gray-300 mx-auto mt-2 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      <img className='absolute -z-10 w-[200rem] top-60 blur-3xl -translate-x-[0%] rotate-[-20deg]' src="line01.svg" alt="" />
      <img
        className="owner-image absolute z-99 -bottom-300 left-1/2 translate-x-[-50%] rotate-[5deg] w-2xl pointer-events-none select-none user-select-none"
        src="owner.png"
        alt="Company owner"
      />

      {/* Carousel Container */}
      <div
        //onMouseEnter={handleMouseEnter}
        //onMouseLeave={handleMouseLeave}
        className="
          absolute md:w-[25rem] rounded-2xl w-[20rem] overflow-hidden 
          z-99 md:bottom-40 bottom-15 md:right-10 flex items-start justify-start
          
          ">

        {/* Blurred Edge Overlays */}
        <div className="absolute -left-5 top-0 bottom-0 z-20 w-16 bg-linear-to-r from-white/20 to-transparent backdrop-blur-[3px]"></div>
        <div className="absolute right-0 top-0 bottom-0 z-20 w-16 bg-linear-to-l from-white/20 to-transparent backdrop-blur-[3px]"></div>

        <div
          ref={carouselRef}
          className="carousel flex items-start justify-start gap-5"
        >
          {events.map((event, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="event md:w-[400px] w-[65vw] bg-gray-100/50 backdrop-blur-3xl rounded-2xl p-5 z-99 flex items-center justify-center gap-5 shrink-0"
            >
              <div className="box-img relative w-20 h-20  flex items-center overflow-hidden rounded-lg">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover top-10"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <div>
                  <h1 className="text-2xl font-bold text-black">{event.title}</h1>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Hero