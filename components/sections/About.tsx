import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);
//const containerRef = useRef(null);

function About() {




  return (
    <div className="about-section   w-full  px-10 py-40 flex md:flex-row flex-col items-start justify-between text-gray-800 overflow-x-hidden">


      <h2 className="md:w-[20rem] text-6xl font-bold mb-4">À propos de Holding NAFAT</h2>
      <p className="md:w-2/3 md:mt-0 mt-6 text-5xl font-bold text-gray-600 leading-14">
        Holding NAFAT est un groupe marocain structuré autour de pôles d’activités complémentaires,
        avec une expertise reconnue dans les domaines des produits de la mer, du commerce et de l’immobilier.
        Présent dans plusieurs villes du Royaume, le groupe s’appuie sur une vision à long terme,
        une gouvernance rigoureuse et un fort ancrage local.
      </p>

    </div>
  )
}

export default About