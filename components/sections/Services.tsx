import React from 'react'
import Image from 'next/image'
//import im01 from '@/public/images/im01.jpg'

function Services() {

    const fishIndustrieCompanies = [
        { name: "ASMAK RAHAL", description: "Leader dans l’import, l’export et la commercialisation de produits de la mer congelés", content: 'Acteur majeur de l’importation, de l’exportation et de la commercialisation de produits de la mer.' },
        { name: "PREST CONG", description: "Spécialiste du poisson congelé et du négoce international", content: "Exploitation d’unités de froid et de congélation pour la conservation des produits alimentaires." },
        { name: "Marchés aux poissons", description: "Agadir & Tiznit Point de distribution central pour les produits frais et surgelés.", content: "Exploitation d’unités de froid et de congélation pour la conservation des produits alimentaires." }
    ];

    const immoPhase = [
        { img: '/design.jpg', phase1: 'Design', content: 'Phase de design et de conception des immeubles' },
        { img: '/engineers.png', phase2: 'Conception', content: 'Phase de conception des immeubles' },
        { img: '/construction.jpg', phase3: 'Construction', content: 'Phase de construction des immeubles' },
    ]

    return (
        <div className='services w-full  px-10 py-40'>
            <h2 className='text-6xl font-bold mb-4 '>Nos Services</h2>
            <div className="fish-industrie py-10">
                <h3 className='text-2xl text-gray-700 font-semibold mb-2 underline'>Produits de la mer & Pêche</h3>
                <div className="two-boxes flex flex-col md:flex-row gap-6 mt-10">
                    <div className="box1 bg-blue-50/50 p-6 rounded-lg mb-6">
                        <p className='text-3xl   text-gray-700'>
                            Un pôle stratégique incarnant l’excellence et l’innovation dans le secteur halieutique,
                            couvrant l’ensemble de la chaîne de valeur :
                            pêche, approvisionnement, transformation, congélation, logistique, distribution et export.
                        </p>
                    </div>
                    <div className="box2 bg-blue-50/50 p-6 rounded-lg mb-6">

                        <p className='text-3xl text-gray-700'>
                            Ce pôle s’appuie sur des entreprises disposant de plus de 35 années d’expertise,
                            garantissant des produits conformes aux plus hauts standards de qualité,
                            traçabilité et sécurité alimentaire,
                            adaptés aux exigences des marchés nationaux et internationaux.
                        </p>
                    </div>
                </div>
                <div className="comps w-full md:px-10 px-5 py-10 mt-10 flex md:flex-row items-center justify-center flex-col md:gap-2 gap-8  ">

                    {fishIndustrieCompanies.map((company, index) => (
                        <div key={index} className={`comp${index} relative flex flex-col gap-2`}>
                            <p className={`text-lg pl-5 md:w-[30vw] p-3   font-extralight font-sans before:content-[''] before:absolute before:left-0 before:top-5 before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:drop-shadow-[0_0_3px_rgba(0,150,255,.6)]`}>
                                <span className=" underline">{company.name}</span> - {company.description}
                                {/* w-[${index}/6] */}
                            </p>
                            <div className="ticket w-[95%] py-5 p-3 rounded-2xl bg-white drop-shadow-[0_0_5px_rgba(0,0,0,.1)] flex flex-col gap-10">
                                <div className="logo w-[100%] h-[200px] rounded-2xl   bg-blue-50/50 "></div>
                                <div className="p-2 flex flex-col gap-2">
                                    <div className="text-lg font-semibold flex items-center justify-between">
                                        {company.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-black  mt-2 w-4 rotate-269" fill="none" viewBox="0 0 20 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                    <p className='w-[95%] text-light font-sans text-gray-600 font-light leading-5'>{company.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="immobilier-industrie  py-10 gap-20 flex flex-col items-start justify-start">
                <h3 className='text-2xl text-gray-700 font-semibold mb-2 underline'>Immobilier</h3>
                <div className="imo w-full px-5 md:px-10 flex md:flex-row flex-col items-start justify-between md:gap-20 gap-10">
                    <p className="md:w-2/3 text-3xl text-gray-700">
                        À travers NAFAT IMMO, Holding NAFAT développe,
                        commercialise et gère des actifs immobiliers destinés à la vente et à la location,
                        répondant aux besoins des particuliers et des professionnels.
                    </p>

                </div>

                <div className="relative w-full md:px-10 px-5 py-10 mt-10 flex md:flex-row items-center justify-between flex-col md:gap-10 gap-10 overflow-hidden ">
                    {/* <Image src="/building03.png" alt="" className='absolute scale-200 left-1/2 -translate-x-1/2 opacity-30 mix-blend-luminosity' width={500} height={500} /> */}

                    <div className="cards md:w-2/3 bg-amber-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
                        {
                            immoPhase.map((immo, index) => (
                                <div key={index} className="im w-full relative">
                                    <div className="relative overflow-hidden bg-blue-500 w-full h-[200px] ">
                                        <Image src={immo.img} className="absolute top-1/2 left-1/3 scale-[1.8]  -translate-x-1/2 -translate-y-1/2 object-contain  mix-blend-luminosity hover:mix-blend-normal w-[350px] h-[500px]" alt="dd" width={300} height={500} />
                                    </div>
                                    <h5 className="text-xl font-semibold mt-4">{(immo as any)[`phase${index + 1}`]}</h5>
                                    <p>{immo.content}</p>
                                </div>
                            ))
                        }


                    </div>
                    <div className="ticket md:w-[400px] w-[95%]  py-5 p-3 rounded-2xl bg-white drop-shadow-[0_0_5px_rgba(0,0,0,.1)] flex flex-col gap-10">
                        <div className="logo h-[200px] rounded-2xl   bg-blue-50/50 "></div>
                        <div className="p-2 flex flex-col gap-2">
                            <div className="text-lg font-semibold flex items-center justify-between">
                                NAFAT IMMO
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-black  mt-2 w-4 rotate-269" fill="none" viewBox="0 0 20 24" stroke="currentColor" strokeWidth={4}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                            <p className='w-[95%] text-light font-sans text-gray-600 font-light leading-5'>Développement, vente et location de biens immobiliers.</p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Services