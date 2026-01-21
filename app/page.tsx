"use client";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { use } from "react";
import Infos from "@/components/sections/Infos";
import Contact from "@/components/sections/Contact";
import Blogs from "@/components/sections/Blogs";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {


  // GSAP animations or ScrollTrigger setups can go here if needed

  return (
    <main className="main relative w-full h-full flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Infos />
      <Blogs />
      <Contact />
    </main>
  );
}
