import { title } from 'process';
import React from 'react'


function Blogs() {

    const blogs = [
        { image: "", title: "Fish industrie", description: "Leader dans l’import, l’export et la commercialisation de produits de la mer congelés", content: 'Acteur majeur de l’importation, de l’exportation et de la commercialisation de produits de la mer.' },
        { image: "", title: "Immobilier", description: "Spécialiste du poisson congelé et du négoce international", content: "Exploitation d’unités de froid et de congélation pour la conservation des produits alimentaires." },
        { image: "", title: "Point des ventes", description: "Agadir & Tiznit Point de distribution central pour les produits frais et surgelés.", content: "Exploitation d’unités de froid et de congélation pour la conservation des produits alimentaires." }
    ];

    return (
        <div className="blog-section w-full md:px-10 px-5 py-10 mt-10">
            <div className="title w-full md:px-10 px-5 py-10 mt-10 flex md:flex-row flex-col md:items-end md:justify-between justify-start gap-5 md:gap-0">
                <h1 className="max-[415px]:text-5xl text-6xl font-bold">Blogs</h1>

                <div className="pagination-content flex flex-row items-center justify-start gap-5">
                    <p className='text-sm font-regular text-gray-300'>Allez vers les blogs</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-300  mt-2 w-4 rotate-269" fill="none" viewBox="0 0 20 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
            {/* <div className="pagination w-full md:px-10 px-5 py-0 mt-1 flex items-center justify-end">
            </div> */}
            <div className="blogs w-full md:px-10 px-5 py-10 mt-10 flex md:flex-row items-center justify-center flex-col md:gap-2 gap-8  ">

                {blogs.map((blog, index) => (
                    <div key={index} className={`blog${index} relative flex flex-col gap-2`}>

                        <div className="ticket w-[95%] py-5 p-3 rounded-2xl bg-white drop-shadow-[0_0_5px_rgba(0,0,0,.1)] flex flex-col gap-10">
                            <div className="logo w-[100%] h-[200px] rounded-2xl   bg-blue-50/50 "></div>
                            <div className="p-2 flex flex-col gap-2">
                                <div className="text-lg font-semibold flex items-center justify-between">
                                    {blog.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-black  mt-2 w-4 rotate-269" fill="none" viewBox="0 0 20 24" stroke="currentColor" strokeWidth={4}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>
                                <p className='w-[95%] text-light font-sans text-gray-600 font-light leading-5'>{blog.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Blogs