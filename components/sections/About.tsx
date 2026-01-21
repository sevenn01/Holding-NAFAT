import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);
//const containerRef = useRef(null);

function About() {




  return (
    <div className="about-section   w-full  md:px-20 px-10 py-40 flex max-[886px]:flex-col flex-row items-start justify-between gap-10 text-gray-800 overflow-x-hidden">

      {/* max-[886px]:w-[95%] w-[60%] max-[800px]:text-[6vw] text-5xl */}
      <h2 className="md:w-[20rem] max-[415px]:text-5xl text-6xl font-bold mb-4">À propos de Holding NAFAT</h2>
      <p className="max-[479px]:text-[8vw] max-[479px]:leading-[10vw] font-medium max-[886px]:w-[95%] w-2/3 md:mt-0 mt-6 max-[800px]:text-[6vw] text-5xl  text-gray-600 md:leading-14 leading-10">
        Holding NAFAT est un groupe marocain structuré autour de pôles d’activités complémentaires,
        avec une expertise reconnue dans les domaines des produits de la mer, du commerce et de l’immobilier.
        Présent dans plusieurs villes du Royaume, le groupe s’appuie sur une vision à long terme,
        une gouvernance rigoureuse et un fort ancrage local.
      </p>

    </div>
  )
}

export default About