'use client';
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollToPlugin);

function Header() {
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    const rahalEvents = [
        { img: '/asmakRahal.png', title: 'ASMAK RAHAL', description: 'Leader de l\'exportation maritime internationale.' },
        { img: '/immo.png', title: 'IMMO NAFAT', description: 'Expertise immobilière et projets d\'exception.' },
        { img: '/owner.png', title: 'PREST CONG', description: 'Maîtrise technologique de la chaîne du froid.' },
        { img: '/owner.png', title: 'SEA FOOD MARKET', description: 'La fraîcheur de l\'océan à votre table.' },
        { img: '/owner.png', title: 'NAFAT HOLDING', description: 'Vision stratégique et synergie multisectorielle.' },
    ]
    // Duble the events for seamless looping
    const events = [...rahalEvents, ...rahalEvents];

    const [mobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
        //alert(mobileMenu);
    }
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
    }, { dependencies: [cardWidth] });

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
        <div>
            <div className="header relative w-full p-5  overflow-hidden">
                <div className="header-content px-10  py-5 max-[880px]:hidden flex flex-row items-center justify-between">
                    <div className=" header-logo font-black text-5xl bg-linear-200 from-blue-500 from-05% to-blue-200 text-transparent bg-clip-text">
                        NH
                    </div>
                    <div className="header-menu md:flex  flex-row items-center justify-between">
                        <ul className="flex flex-row items-center justify-between gap-10">
                            <li><a className='text-xl font-medium hover:text-blue-500 transition duration-300' href="/">Home</a></li>
                            <li><a onClick={(e) => { e.preventDefault(); scrollToSection('#about') }} className='text-xl font-medium hover:text-blue-500 transition duration-300' href="#about">About</a></li>
                            <li><a className='text-xl font-medium hover:text-blue-500 transition duration-300' href="/Services">Services</a></li>
                            <li><a className='text-xl font-medium hover:text-blue-500 transition duration-300' href="/Blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className='header-contact '>
                        <div className="
                                        btn-border rounded-2xl p-0.5
                                        bg-linear-to-tl from-blue-100 from-30% via-blue-500 via-60% to-blue-100 to-90% 
                                        bg-[length:200%_200%] 
                                        hover:bg-[position:50%_80%]
                                        transition-all duration-300 ease-in-out
                                   ">
                            <button className="btn btn-outline cursor-pointer px-10 py-2 rounded-[12px] font-bold text-blue-500 bg-white hover:text-blue-500 transition duration-300">
                                <Link href="/Contact">Contact</Link></button>
                        </div>
                    </div>


                </div>

                {/* Toggle Button Container */}
                <div
                    className="fixed top-8 right-8 z-[1000] max-[880px]:flex hidden flex-col items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-blue-50 cursor-pointer transition-all duration-300 active:scale-95"
                    onClick={handleMobileMenu}
                >
                    <div className="relative w-6 h-5 flex flex-col justify-between items-center">
                        <span className={`w-full h-0.5 bg-blue-500 rounded-full transition-all duration-300 origin-left ${mobileMenu ? 'rotate-45 translate-x-1' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-blue-500 rounded-full transition-all duration-300 ${mobileMenu ? 'opacity-0 scale-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-blue-500 rounded-full transition-all duration-300 origin-left ${mobileMenu ? '-rotate-45 translate-x-1' : ''}`}></span>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu fixed top-0 w-full h-[100vh] bg-white/95 backdrop-blur-xl z-[999] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center justify-start pt-16 pb-10 px-10 overflow-hidden
                    ${mobileMenu ? 'left-0' : 'left-full'}`}>

                    <div className="w-full flex justify-between items-center mb-12">
                        <div className="font-black text-3xl bg-linear-200 from-blue-500 to-blue-200 text-transparent bg-clip-text whitespace-nowrap">NAFAT HOLDING</div>
                    </div>

                    <div className="w-full flex flex-col gap-10">
                        <div className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 opacity-50">Navigation</div>
                        <ul className="flex flex-col gap-6">
                            {[
                                { name: 'Home', href: '/', num: '01' },
                                { name: 'About', href: '#about', num: '02', scroll: true },
                                { name: 'Services', href: '/Services', num: '03' },
                                { name: 'Blog', href: '/Blog', num: '04' },
                                { name: 'Contact', href: '/Contact', num: '05' }
                            ].map((item, i) => (
                                <li key={i} className="group overflow-hidden">
                                    <div className={`flex items-end justify-between transition-all duration-500 delay-[${i * 100}ms] ${mobileMenu ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => {
                                                if (item.scroll) {
                                                    e.preventDefault();
                                                    scrollToSection(item.href);
                                                }
                                                setMobileMenu(false);
                                            }}
                                            className="text-4xl sm:text-5xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300"
                                        >
                                            {item.name}
                                        </a>
                                        <span className="text-gray-300 font-mono text-lg mb-2">{item.num}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto w-full flex flex-col gap-6">
                        <div className="h-[1px] w-full bg-gray-100"></div>
                        <div className="flex justify-between items-center text-gray-400 text-xs">
                            <span>NAFAT HOLDING © 2026</span>
                            <div className="flex gap-4">
                                <span className="hover:text-blue-500 cursor-pointer transition-colors">LinkedIn</span>
                                <span className="hover:text-blue-500 cursor-pointer transition-colors">Instagram</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;