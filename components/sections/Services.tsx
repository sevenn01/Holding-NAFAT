import React from 'react'



function Services() {

   const fishIndustrieCompanies = [
      { name: "ASMAK RAHAL", description: "Leader dans l’import, l’export et la commercialisation de produits de la mer congelés" },
      { name: "PREST CONG", description: "Spécialiste du poisson congelé et du négoce international" },
      { name: "Marchés aux poissons", description: "Agadir & Tiznit Point de distribution central pour les produits frais et surgelés." }
   ];

  return (
    <div className='services w-full  px-10 py-40'>
        <h2 className='text-6xl font-bold mb-4 '>Nos Services</h2>
        <div className="fish-industrie py-10">
            <h3 className='text-2xl text-gray-700 font-semibold mb-2 underline'>Produits de la mer & Pêche</h3>
            <div className="two-boxes flex flex-col md:flex-row gap-6 mt-6">
                <div className="box1 bg-blue-100 p-6 rounded-lg mb-6">
                    <p className='text-2xl text-gray-700'>
                        Un pôle stratégique incarnant l’excellence et l’innovation dans le secteur halieutique, 
                        couvrant l’ensemble de la chaîne de valeur : 
                        pêche, approvisionnement, transformation, congélation, logistique, distribution et export.
                    </p>
                </div>
                <div className="box2 bg-blue-100 p-6 rounded-lg mb-6">
                    
                    <p className='text-2xl text-gray-700'>
                        Ce pôle s’appuie sur des entreprises disposant de plus de 35 années d’expertise, 
                        garantissant des produits conformes aux plus hauts standards de qualité, 
                        traçabilité et sécurité alimentaire, 
                        adaptés aux exigences des marchés nationaux et internationaux.
                    </p>
                </div>
            </div>
            <div className="comps w-full flex md:flex-row flex-col md:items-start  md:justify-between items-center gap-1 ">

                {fishIndustrieCompanies.map((company, index) => (
                    <div key={index} className={`comp${index} relative `}>
                        <p className={`text-lg pl-5 md:w-[30vw]  bg-amber-200  font-extralight font-sans before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-blue-500 before:drop-shadow-[0_0_3px_rgba(0,0,255,.6)]`}>
                            {company.name} - {company.description}
                            {/* w-[${index}/6] */}
                        </p>
                        <div className="ticket w-full h-[20px] rounded-2xl bg-blue-200">
                            <div className="notch notch-left"></div>
                            <div className="notch notch-right"></div>
                        </div>
                    </div>
                ))}                                                                                
            </div>
        </div>
    </div>
  )
}

export default Services