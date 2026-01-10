import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

function About() {

     useGSAP(() => {
    gsap.to(".owner-image", {
      scrollTrigger: {
        trigger: ".main",
        start: "start start",
        end: "bottom bottom",
        scrub: true,
        markers: true
      },
      y: -1100,
      rotation: 0,
      ease: "none",
    });
  }, [ 'container']);


  return (
    <div className="about-section   w-full  px-10 py-40 flex md:flex-row flex-col items-start justify-between text-gray-800 overflow-x-hidden">
        <img 
            className="owner-image absolute z-0 -bottom-5 left-1/2 translate-x-[-50%] rotate-[5deg] w-2xl pointer-events-none select-none user-select-none"
            src="owner.png" 
            alt="Company owner in professional setting, displaying confident and welcoming demeanor in office environment" 
        />

      <h2 className="md:w-[20rem] text-6xl font-bold mb-4">À propos de Holding NAFAT</h2>
      <p className="md:w-2/3 md:mt-0 mt-6 text-5xl font-bold text-gray-600 leading-14">
        Holding NAFAT est un groupe marocain structuré autour de pôles d’activités complémentaires,
         avec une expertise reconnue dans les domaines des produits de la mer, du commerce et de l’immobilier. 
         Présent dans plusieurs villes du Royaume, le groupe s’appuie sur une vision à long terme, 
        une gouvernance rigoureuse et un fort ancrage local.
      </p>
        <img className='absolute z-0 w-[100rem] top-60 blur-2xl translate-x-[0%] rotate-[-20deg]' src="line01.svg" alt="" />
    </div>
  )
}

export default About