"use client"
import Image from 'next/image'

function Qualite() {
    return (
        <div className="relative md:px-20 px-10 w-full  py-20 mt-10 flex max-[1102px]:flex-col flex-row items-start justify-between gap-20">
            <div className="title max-[800px]:w-full  max-[1102px]:w-1/2 w-1/3  overflow-hidden ">
                <h2 className='max-[415px]:text-5xl text-6xl px-3 font-bold mb-4 '>Qualité, Sécurité & Durabilité</h2>
            </div>
            <div className="quali-des max-[1102px]:w-[95%] w-[60%] flex flex-col items-center justify-center gap-20">
                <div className=" max-[1102px]:text-[5.5vw] max-[415px]:text-2xl max-[415px]:leading-8 leading-11 md:leading-16 text-5xl text-gray-700 ">
                    Holding NAFAT place la qualité, la conformité réglementaire et la durabilité au cœur de ses activités.
                    Le groupe applique des standards stricts en matière de sécurité alimentaire,
                    de traçabilité et de respect de l&apos;environnement,
                    en cohérence avec les réglementations nationales et internationales.
                </div>
                <div className="icons  flex flex-row items-center justify-center md:gap-20 gap-10 max-[480px]:gap-0">
                    <div className="iso max-[480px]:scale-75 font-sans flex flex-col items-center justify-center gap-5">
                        <Image src={'quality 1.svg'} alt="badge" className="" width={80} height={80} />
                        <p className='text-2xl md:w-[150px] text-center font-light text-gray-700 leading-6'>global verification</p>
                    </div>
                    <div className="assurace max-[480px]:scale-75 font-sans flex flex-col items-center justify-center gap-5">
                        <Image src={'assurance 1.svg'} alt="badge" className="" width={80} height={80} />
                        <p className='text-2xl md:w-[150px] text-center font-light text-gray-700 leading-6'>Assurance qualité</p>
                    </div>
                    <div className="haccp max-[480px]:scale-75 font-sans flex flex-col items-center justify-center gap-5">
                        <Image src={'guaranteed 1.svg'} alt="badge" className="" width={80} height={80} />
                        <p className='text-2xl md:w-[150px] text-center font-light text-gray-700 leading-6'>100% guaranteed</p>
                    </div>
                </div>
            </div>

            <Image src={'premiumS.svg'} alt="badge" className="absolute left-10 top-0 opacity-30" width={500} height={500} />
        </div>
    )
}

export default Qualite