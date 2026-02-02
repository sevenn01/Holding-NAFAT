import React from 'react'
import Services from '../../components/sections/Services'
import Infos from '@/components/sections/Infos'

import Image from 'next/image';

function ServicesPage() {
    return (
        <div className="bg-background">
            {/* PREMIUM HEADER SECTION */}
            <header className="w-full pt-32 pb-16 flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Image key={i} src="/Star.svg" width={20} height={20} alt="Star" />
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-[10px] font-bold tracking-widest uppercase border border-blue-100 italic">
                        Solutions Leaders
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600">Expertise Multisectorielle</span>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="w-full text-5xl md:text-8xl font-bold text-center bg-linear-200 from-blue-500 from-40% to-blue-200 text-transparent bg-clip-text uppercase tracking-tighter py-2">
                        NOS SERVICES
                    </h1>
                </div>

                <p className="text-gray-500 text-center text-lg max-w-2xl mt-6 px-10">
                    Découvrez l'étendue des compétences de NAFAT HOLDING, de l'excellence maritime à l'innovation immobilière.
                </p>
            </header>

            <Services />
            <Infos />
            <div className='w-full py-20'></div>
        </div>
    )
}

export default ServicesPage