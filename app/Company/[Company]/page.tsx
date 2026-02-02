"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '../../../components/sections/Contact';
import Card from '@/components/ui/card';
import { company_Content } from './companyData';
import { useParams } from 'next/navigation';

const specializations = [
    { title: "Distribution Efficace", desc: "Grâce à un réseau logistique optimisé, nous offrons une livraison rapide et fiable, respectant les délais internationaux." },
    { title: "Importation & Exportation", desc: "Avec une expertise internationale, nous gérons efficacement les flux d'importation et d'exportation pour une distribution fluide." },
    { title: "Importation & Exportation", desc: "Avec une expertise internationale, nous gérons efficacement les flux d'importation et d'exportation pour une distribution fluide." },
    { title: "Distribution Efficace", desc: "Grâce à un réseau logistique optimisé, nous offrons une livraison rapide et fiable, respectant les délais internationaux." },
    { title: "Importation & Exportation", desc: "Avec une expertise internationale, nous gérons efficacement les flux d'importation et d'exportation pour une distribution fluide." },
    { title: "Importation & Exportation", desc: "Avec une expertise internationale, nous gérons efficacement les flux d'importation et d'exportation pour une distribution fluide." },
];

/*
const companies = [
    { name: "PREST CONG", logo: "", content: "Exploitation d’unités de froid et de congélation pour la conservation des produits alimentaires." },
    { name: "DAR RAHA", logo: "", content: "Exploitation d’unités de froid et de congélation pour la conservation des produits alimentaires." },
    { name: "NAFAT IMMO", logo: "/immo.png", content: "Développement, vente et location de biens immobiliers." },
];
*/

export default function AsmakRahalPage() {
    const params = useParams();
    if (!params) return null;

    const Company = params.Company as string;
    const comp_Id = parseInt(Company);
    const company = company_Content.find((c) => c.id === comp_Id);

    if (!company) {
        return (
            <div className="w-full h-[800px] flex items-center justify-center px-10 md:px-20 bg-white selection:bg-blue-100 font-sans text-gray-900">
                <h1 className="w-full text-7xl md:text-[10vw] font-bold text-blue-500 tracking-tighter mb-10 py-10  text-center bg-linear-200 from-blue-500 from-40% to-blue-200 text-transparent bg-clip-text">
                    404
                </h1>
            </div>
        )
    }

    const themes = {
        blue: {
            text: "text-blue-500",
            border: "border-blue-500",
            bgSubtle: "bg-blue-50/30",
            bgHover: "bg-blue-50/50",
            accent: "bg-blue-500",
            selection: "selection:bg-blue-100",
            gradientFrom: "from-blue-500",
            gradientTo: "to-blue-200"
        },
        green: {
            text: "text-green-600",
            border: "border-green-600",
            bgSubtle: "bg-green-50/30",
            bgHover: "bg-green-50/50",
            accent: "bg-green-600",
            selection: "selection:bg-green-100",
            gradientFrom: "from-green-600",
            gradientTo: "to-green-200"
        }
    };
    const theme = themes[company.color as keyof typeof themes] || themes.blue;

    return (
        <div className={`w-full px-10 md:px-20 bg-white ${theme.selection} font-sans text-gray-900`}>
            {/* Styles for Carousel */}
            <style jsx global>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .carousel-track {
                    display: flex;
                    width: max-content;
                    animation: scroll 30s linear infinite;
                    will-change: transform;
                }
                .carousel-track:hover {
                    animation-play-state: paused;
                }
                .carousel-container {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    border: 1px solid #f0f0f0;
                    border-radius: 1.5rem;
                    background: #fff;
                    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05);
                }
            `}</style>

            {/* HEADER AREA */}
            <header className="w-full pt-20 pb-10  flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Image key={i} src="/Star.svg" width={20} height={20} alt="Star" />
                    ))}
                </div>

                {/* PRESTIGE BADGES */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                    <div className={`px-3 py-1 rounded-full ${theme.bgSubtle} ${theme.text} text-[10px] font-bold tracking-widest uppercase border ${theme.border} opacity-80`}>
                        Top Rated Company
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <div className={`w-1 h-1 rounded-full ${theme.accent}`}></div>
                        <span className="text-[10px] font-medium tracking-wider uppercase">Certifié Excellence</span>
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <div className={`w-1 h-1 rounded-full ${theme.accent}`}></div>
                        <span className="text-[10px] font-medium tracking-wider uppercase">Impact Global</span>
                    </div>
                </div>
                {/* hero-title max-[479px]:text-6xl md:text-[10vw] text-8xl font-bold bg-linear-200 from-blue-500 from-40% to-blue-200 text-transparent bg-clip-text */}
                <div className="w-full ">
                    <h1 className={`w-full text-7xl md:text-[10vw] font-bold ${theme.text} tracking-tighter mb-10 py-10  text-center bg-linear-200 ${theme.gradientFrom} from-40% ${theme.gradientTo} text-transparent bg-clip-text uppercase`}>
                        {company.name}
                    </h1>
                </div>
                <a
                    href="/Services"
                    className="w-full inline-flex items-start text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-8 group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    Retour aux services
                </a>
            </header>

            {/* ABOUT SECTION WITH BADGE */}
            <section className={`py-20 ${theme.bgSubtle} rounded-2xl container mx-auto px-20 max-[1000px]:px-5 flex max-[1000px]:flex-col flex-row items-center justify-between gap-20`}>
                {/* <div className="relative flex justify-center lg:justify-start">
                    <div className="w-[350px] h-[450px] border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center p-10 relative bg-white">
                        <Image src="/asmakRahal.png" width={200} height={200} alt="Asmak Rahal" className="mb-6" />
                        <h3 className="text-xl font-bold text-gray-800">ASMAK RAHAL</h3>
                        <p className="text-[10px] text-gray-400 text-center mt-2 px-4">
                            Exploitation d'unités de froid et de congélation pour la conservation des produits alimentaires.
                        </p>
                        <Image src="/premiumS.svg" width={150} height={150} alt="Premium" className="absolute -bottom-10 -right-10 opacity-20 pointer-events-none" />
                    </div>
                </div> */}
                <div className="ticket md:w-[400px] w-[95%]  py-5 p-3 rounded-2xl bg-white drop-shadow-[0_0_5px_rgba(0,0,0,.1)] flex flex-col gap-10">
                    <div className={`logo h-[200px] p-2 rounded-2xl flex items-center justify-center mix-blend-luminosity overflow-hidden  ${theme.bgHover} `}>
                        {company.logo ? (
                            <Image src={company.logo} alt="logo" width={170} height={170} />
                        ) : (
                            <span className="text-2xl font-black text-gray-200 tracking-wider text-center">
                                {company.name}
                            </span>
                        )}
                    </div>
                    <div className="p-2 flex flex-col gap-2">
                        <div className="text-lg font-semibold flex items-center justify-between uppercase">
                            {company.name}
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-black  mt-2 w-4 rotate-269" fill="none" viewBox="0 0 20 24" stroke="currentColor" strokeWidth={4}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                        <p className='w-[95%] text-light font-sans text-gray-600 font-light leading-5'>{company.content}</p>
                    </div>
                </div>
                <div className="space-y-8   max-[1000px]:w-full w-2/3">
                    <div className="flex max-[1000px]:flex-col flex-row items-start justify-between gap-10">
                        <div className="md:w-2/3 w-full flex items-start gap-4">
                            <span className={`w-[30px] h-[10px] ${theme.accent} mt-2 rounded-full `}></span>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-relaxed max-w-md">
                                {company.name} – {company.content}
                            </p>
                        </div>
                        <div className=" flex flex-col  items-start md:justify-center justify-start gap-1">
                            <span className="text-[15px] text-gray-400">Web site</span>
                            <div className="w-full flex items-center gap-2">
                                <Link href="#" className="text-[15px] font-bold underline uppercase">{company.SEO?.slug || company.name}.COM</Link>
                                <Image src="/arrow.svg" width={12} height={12} alt="arrow" className="rotate-[270deg]" />
                            </div>
                        </div>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                        {company.bio}
                    </p>
                </div>
            </section>

            {/* GALLERY CAROUSEL */}
            <section className="container mx-auto px-5 md:px-20 py-20">
                <div className="w-full overflow-hidden py-10 carousel-container">
                    <div className="carousel-track">
                        {[...(company.gallery || []), ...(company.gallery || [])].map((item, i) => (
                            <div key={i} className="flex-shrink-0 w-64 h-64 mx-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105">
                                <img src={item.src} alt={item.name} className="max-w-full max-h-full object-contain rounded-xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* QUALITY & VALUES SECTION */}
            <section className="py-32 container mx-auto px-5 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                        {company.Quality_Section.title}
                    </h2>
                    <div className="space-y-6 max-w-xl">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {company.Quality_Section.desc}
                        </p>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <div className={`rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] relative ${theme.bgSubtle}`}>
                        <Image src={company.Quality_Section.image || "/asmakRahal/fishing_boat.png"} fill className="object-cover" alt="Feature Image" />
                    </div>
                </div>
            </section>

            {/* SPECIALIZATION SECTION */}
            <section className="py-20 bg-[#fafafa]">
                <div className="container mx-auto px-5 md:px-20 text-center lg:text-left">
                    <h2 className="text-4xl font-bold mb-20">Notre spécialisation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                        {company.Speciality_Section.map((spec: any, i) => (
                            <div key={i} className="space-y-6 text-left group/spec">
                                <div className={`w-12 h-12 rounded-xl ${theme.bgSubtle} flex items-center justify-center ${theme.text} group-hover/spec:scale-110 transition-transform duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={spec.icon} />
                                    </svg>
                                </div>
                                <div className="space-y-2">
                                    <h4 className={`${theme.text} font-bold text-xl uppercase tracking-tight`}>{spec.title}</h4>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                                        {spec.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="mt-20 flex justify-center">
                        <Link href="#" className="flex items-center gap-2 group">
                            <span className="text-sm font-medium">autre info</span>
                            <Image src="/arrow.svg" width={16} height={16} alt="arrow" className="rotate-[270deg] group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div> */}
                </div>
            </section>

            {/* NAFAT HOLDING SECTION */}
            <section className="py-20 container mx-auto px-5 md:px-0">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-2 tracking-tight">Synergie & Vision : Nafat Holding</h2>
                    <p className="text-gray-400 font-light max-w-2xl">Découvrez l'écosystème Nafat : une alliance de secteurs stratégiques tournés vers l'excellence et l'innovation durable.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-30">
                    {company_Content.filter(c => c.id !== comp_Id).map((c, i) => (
                        <Link key={i} href={`/Company/${c.id}`} className="group relative flex flex-col gap-6">
                            <div className={`h-[250px] w-full rounded-2xl ${theme.bgSubtle} flex items-center justify-center p-10 transition-colors group-hover:${theme.bgHover}`}>
                                {c.logo ? (
                                    <Image src={c.logo} width={150} height={150} alt={c.name} className="mix-blend-multiply opacity-80" />
                                ) : (
                                    <span className="text-2xl font-black text-gray-200 tracking-wider blur-[1px] group-hover:blur-0 transition-all">
                                        {c.name}
                                    </span>
                                )}
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold">{c.name}</h3>
                                    <Image src="/arrow.svg" width={16} height={16} alt="arrow" className="rotate-[270deg] grayscale" />
                                </div>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">
                                    {c.content}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION  https://albahrnews.com/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A3%D8%B3%D9%85%D8%A7%D9%83-%D8%B1%D8%AD%D8%A7%D9%84-%D8%AA%D9%87%D9%86%D8%A6-%D8%AC%D9%84%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D9%85%D9%84%D9%83-%D8%A8%D9%85/
            <div id="contact" className="relative bg-white pt-20">
                <ContactSection />
            </div>*/}
        </div>
    );
}
