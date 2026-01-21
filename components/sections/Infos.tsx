"use client"
import Image from 'next/image'
import React from 'react'

function Infos() {


    const chiffres = [
        { title: '35+', description: 'Années d’expertise dans les produits de la mer' },
        { title: '3', description: 'Navires de pêche opérés par ASMAK RAHAL' },
        { title: 'Multi-villes', description: 'Présence au Maroc, notamment à Agadir et Tiznit' },
        { title: 'International', description: 'Exportations vers l’Europe, le Japon et d’autres marchés' },
        { title: 'Intégrée', description: 'Chaîne de valeur conforme aux standards nationaux et internationaux' },
    ]

    return (
        <div className=' w-full  md:px-20 px-10  '>
            <h2 className='relative max-[415px]:text-5xl text-6xl font-bold mb-10 '>Chiffres clés</h2>
            <div className="chiffres py-10  flex flex-col md:flex-row items-center justify-center md:flex-wrap md:gap-20 gap-10">
                {/* First box */}
                <div className="py-10 order-1 px-5 flex flex-col md:items-center items-start md:justify-center justify-start gap-15">
                    {chiffres.map((chiffre, index) => (
                        index <= 2 ? (
                            <div key={index} className="md:w-[340px] max-[415px]:w-[15rem] w-[20rem] flex flex-col items-start justify-start gap-2">
                                <div className="px-5 overflow-hidden flex items-start justify-start">
                                    <p className="title-chiffre max-[415px]:text-4xl   md:text-6xl text-5xl font-medium">{chiffre.title}</p>
                                </div>
                                <div className="px-7 overflow-hidden">
                                    <p className="description-chiffre max-[415px]:text-xl text-2xl font-medium text-gray-600 leading-6 relative before:content-[''] before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:drop-shadow-[0_0_3px_rgba(0,150,255,.6)] before:z-10">
                                        {chiffre.description}
                                    </p>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>

                {/* Image (badge) with scaling */}
                <div className="card order-2 min-[1069px]:order-3 py-15  px-2 overflow-hidden ">
                    <Image
                        src="/HN-BADGE.png"
                        alt="badge"
                        className="md:scale-100 scale-100"
                        width={500}
                        height={500}
                    />
                </div>

                {/* Second box */}
                <div className="py-10 order-3 min-[1069px]:order-2 flex flex-col md:items-center items-start md:justify-center justify-start md:gap-20 gap-10">
                    {chiffres.map((chiffre, index) => (
                        index > 2 ? (
                            <div key={index} className="md:w-[450px] max-[415px]:w-[15rem] w-[20rem] md:px-5 px-0 flex flex-col items-start justify-start gap-2">
                                <div className="px-5 overflow-hidden flex items-start justify-start">
                                    <p className="title-chiffre max-[415px]:text-4xl  md:text-6xl text-5xl font-medium">{chiffre.title}</p>
                                </div>
                                <div className="max-[415px]: px-7 bg-amber-200 overflow-hidden">
                                    <p className="description-chiffre max-[415px]:text-xl text-2xl font-medium text-gray-600 leading-6 relative before:content-[''] before:absolute before:-left-6 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:drop-shadow-[0_0_3px_rgba(0,150,255,.6)] before:z-10">
                                        {chiffre.description}
                                    </p>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </div>

            <div className="relative w-full  py-20 mt-30 flex max-[1102px]:flex-col flex-row items-start justify-between gap-20">
                <div className="title max-[800px]:w-full  max-[1102px]:w-1/2 w-1/3  overflow-hidden ">
                    <h2 className='max-[415px]:text-5xl text-6xl px-3 font-bold mb-4 '>Qualité, Sécurité & Durabilité</h2>
                </div>
                <div className="quali-des max-[1102px]:w-[95%] w-[60%] flex flex-col items-center justify-center gap-10">
                    <div className=" max-[1102px]:text-[5.5vw] max-[415px]:text-2xl max-[415px]:leading-8 leading-11 md:leading-16 text-5xl text-gray-700 ">
                        Holding NAFAT place la qualité, la conformité réglementaire et la durabilité au cœur de ses activités.
                        Le groupe applique des standards stricts en matière de sécurité alimentaire,
                        de traçabilité et de respect de l’environnement,
                        en cohérence avec les réglementations nationales et internationales.
                    </div>
                    <div className="icons  flex flex-row bg-amber-300 items-center justify-center md:gap-20 gap-10 max-[480px]:gap-0">
                        <div className="iso max-[480px]:scale-75 flex flex-col items-center justify-center gap-2">
                            <Image src={'quality 1.svg'} alt="badge" className="" width={80} height={80} />
                            <p className='text-2xl md:w-[150px] text-center font-medium text-gray-300 leading-6'>global verification</p>
                        </div>
                        <div className="assurace max-[480px]:scale-75 flex flex-col items-center justify-center gap-2">
                            <Image src={'assurance 1.svg'} alt="badge" className="" width={80} height={80} />
                            <p className='text-2xl md:w-[150px] text-center font-medium text-gray-300 leading-6'>Assurance qualité</p>
                        </div>
                        <div className="haccp max-[480px]:scale-75 flex flex-col items-center justify-center gap-2">
                            <Image src={'guaranteed 1.svg'} alt="badge" className="" width={80} height={80} />
                            <p className='text-2xl md:w-[150px] text-center font-medium text-gray-300 leading-6'>100% guaranteed</p>
                        </div>
                    </div>
                </div>

                <Image src={'premiumS.svg'} alt="badge" className="absolute left-10 top-0 opacity-30" width={500} height={500} />
            </div>

        </div >
    )
}

export default Infos