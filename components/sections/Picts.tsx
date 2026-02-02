"use client"
import React, { useRef, useState, useEffect } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Picts() {
  const images = [
    "/nafat0.png",
    "/rahal.jpg",
    "/rahal01.jpg",
  ]

  // Triple the images to ensure seamless loop coverage
  const displayImages = [...images, ...images, ...images];

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const animation = useRef<gsap.core.Tween | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);

  // Measure actual width including gap
  useEffect(() => {
    const measure = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth;
        const gap = window.innerWidth <= 800 ? 4 : 40; // match gap-1 and gap-10
        setItemWidth(width + gap);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useGSAP(() => {
    if (!trackRef.current || itemWidth === 0) return;

    const totalWidth = itemWidth * images.length;

    animation.current = gsap.to(trackRef.current, {
      x: -totalWidth,
      duration: 25,
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
  }, [images.length, itemWidth]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    startX.current = 'touches' in e ? (e as React.TouchEvent).touches[0].pageX : (e as React.MouseEvent).pageX;
    currentX.current = gsap.getProperty(trackRef.current, "x") as number;
    animation.current?.pause();
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current || itemWidth === 0) return;

    const x = 'touches' in e ? (e as React.TouchEvent).touches[0].pageX : (e as React.MouseEvent).pageX;
    const offset = (x - startX.current) * 1.5; // Slightly faster drag for better feel

    const totalWidth = itemWidth * images.length;
    let newX = currentX.current + offset;

    // Robust wrap during drag
    newX = valWrap(newX, totalWidth);

    gsap.set(trackRef.current, { x: newX });
  };

  const valWrap = (val: number, max: number) => {
    return ((val % max) - max) % max;
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Smoothly resume animation from current position
    animation.current?.play();
  };

  return (
    <div
      className='w-full h-[600px] mb-30 flex items-center justify-center overflow-hidden relative select-none cursor-grab active:cursor-grabbing group'
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => {
        handleDragEnd();
      }}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div
        ref={trackRef}
        className='flex items-center gap-10 max-[800px]:gap-1 will-change-transform'
      >
        {displayImages.map((image, i) => (
          <div
            key={i}
            ref={i === 0 ? cardRef : null}
            className='w-[800px] h-[500px] max-[500px]:w-[400px] max-[500px]:h-[300px] max-[800px]:scale-75 flex-shrink-0 bg-cover bg-center bg-no-repeat rounded-[2rem] shadow-2xl transition-all duration-700 pointer-events-none group-hover:scale-[0.98]'
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="w-full h-full bg-black/10 rounded-[2rem] transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {/* Premium gradients (White to transparent) */}
      <div className="absolute inset-y-0 left-0 w-1/6 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-1/6 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Subtle indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 opacity-30">
        <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  )
}

export default Picts