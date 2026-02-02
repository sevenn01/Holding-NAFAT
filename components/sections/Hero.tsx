
"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Hero() {

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const animation = useRef<gsap.core.Tween | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Ref for drag management
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);

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
    { img: '/asmakRahal.png', title: 'ASMAK RAHAL', description: 'Leader de l\'exportation maritime internationale.' },
    { img: '/immo.png', title: 'IMMO NAFAT', description: 'Expertise immobilière et projets d\'exception.' },
    { img: '/owner.png', title: 'PREST CONG', description: 'Maîtrise technologique de la chaîne du froid.' },
    { img: '/owner.png', title: 'SEA FOOD MARKET', description: 'La fraîcheur de l\'océan à votre table.' },
    { img: '/owner.png', title: 'NAFAT HOLDING', description: 'Vision stratégique et synergie multisectorielle.' },
  ]
  // Double for safe dragging
  const events = [...rahalEvents, ...rahalEvents];

  const heroClasses = [
    { name: '.hero-title', duration: 1.2, delay: 0 },
    { name: '.hero-badges', duration: 0.8, delay: "-=1" },
    { name: '.hero-description', duration: 0.8, delay: "-=0.6" },
    { name: '.buttons', duration: 0.8, delay: "-=0.6" },
    { name: '.scroll-down', duration: 1, delay: "-=0.4" }
  ]

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

    // Premium Staggered Intro
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" }
    });

    heroClasses.forEach((item) => {
      tl.from(item.name, {
        y: 60,
        opacity: 0,
        duration: item.duration,
      }, item.delay);
    });
  }, { scope: heroRef });

  // Helper for wrapping values
  const valWrap = (val: number, max: number) => {
    const res = val % max;
    return res > 0 ? res - max : res;
  };

  // Carousel Animation
  useGSAP(() => {
    if (!carouselRef.current || !cardWidth) return;

    const totalWidth = cardWidth * rahalEvents.length;

    animation.current = gsap.to(carouselRef.current, {
      x: -totalWidth,
      duration: 30, // Smoother speed
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const val = parseFloat(x);
          return val % totalWidth;
        })
      }
    });

    return () => animation.current?.kill();
  }, { dependencies: [cardWidth], scope: heroRef });

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!animation.current) return;
    isDragging.current = true;
    animation.current.pause();

    startX.current = 'touches' in e ? e.touches[0].pageX : e.pageX;
    currentX.current = gsap.getProperty(carouselRef.current, "x") as number;
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !carouselRef.current || !cardWidth) return;

    const x = 'touches' in e ? (e as React.TouchEvent).touches[0].pageX : (e as React.MouseEvent).pageX;
    const offset = (x - startX.current) * 1.2;

    const totalWidth = cardWidth * rahalEvents.length;
    let newX = currentX.current + offset;

    // Seamless wrapping during drag
    newX = valWrap(newX, totalWidth);

    gsap.set(carouselRef.current, { x: newX });
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    animation.current?.play();
  };


  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, autoKill: true },
        ease: "power4.inOut",
      });
    }
  };
  return (
    <main ref={heroRef} className="hero h-screen relative w-full px-20 md:pt-30 pt-30 max-[479px]:pt-10 flex flex-col items-center justify-between bg-background text-foreground ">
      <div className="hero-content mb-20 text-center flex flex-col items-center justify-center gap-2 max-[479px]:mt-10">
        <div className="rate w-full mb-8 flex flex-col items-center justify-center text-1xl gap-2 max-[479px]:">
          <div className="stars align flex items-center justify-center gap-1 ">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src={'Star.svg'}
                width={20}
                height={20}
                alt="star"
                className="w-6 h-6 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]"
              />
            ))}
          </div>
          <div className="rate-text overflow-hidden">
            <p className="text-[1rem] text-gray-300 ">5/5 basé sur 120 avis clients</p>
          </div>

          {/* HOME HERO PRESTIGE BADGES */}
          <div className="hero-badges flex flex-wrap items-center justify-center gap-3 mt-4">
            <span className="px-3 py-1 rounded-full bg-blue-50/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase border border-blue-500/20 backdrop-blur-sm">
              Groupe Multisectoriel
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Excellence Marocaine</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Vision 2030</span>
            </div>
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
        <div className="buttons mt-5 flex items-center justify-center max-[479px]:flex-col gap-4">
          <button onClick={() => scrollToSection('#about')} className="btn btn-primary cursor-pointer px-5 py-2 rounded-2xl font-bold text-background bg-blue-600 bg-linear-200 from-blue-600 from-55% to-blue-300 hover:bg-blue-700 border-0">Découvrir Nafat</button>
          <div onClick={() => scrollToSection('#services')} className="
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
      <div className="scroll-down w-full mb-40 md:mb-40 flex flex-col items-start justify-end max-[864px]:items-center max-[864px]:justify-center">
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

      {/* Carousel Container 
      absolute md:w-[25rem] rounded-2xl w-[20rem] overflow-hidden 
          z-99 md:bottom-40 bottom-30 md:right-10 flex items-start justify-start
           max-[479px]:scale-90 max-[479px]:top-10 
      */}
      <div
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        className="
          absolute md:w-[25rem] rounded-2xl w-[20rem] overflow-hidden 
          z-99 md:bottom-40 bottom-20 md:right-10 flex items-start justify-start
           max-[479px]:scale-90 max-[864px]:hidden cursor-grab active:cursor-grabbing
          ">

        {/* Blurred Edge Overlays */}

        <div className="absolute h-auto -left-5 top-0 bottom-0 z-20 w-16 bg-linear-to-r from-white/20 from-20% to-transparent backdrop-blur-[5px] "></div>
        <div className="absolute h-auto right-0 top-0 bottom-0 z-20 w-16 bg-linear-to-l from-white/50 from-30% to-transparent/50 backdrop-blur-[5px] "></div>


        <div
          ref={carouselRef}
          className="carousel flex items-start justify-start gap-5"
        >
          {events.map((event, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className="event md:w-[400px] w-[65vw] h-[100px] bg-white border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-5 z-99 flex items-center justify-center gap-5 shrink-0 overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="box-img relative w-20 h-20 flex items-center justify-center overflow-hidden rounded-lg bg-white/50 p-2">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <div>
                  <h1 className="text-2xl max-[479px]:text-xl md:text-2xl font-bold text-black">{event.title}</h1>
                  <p className="text-gray-400 text-sm line-clamp-1">{event.description}</p>
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