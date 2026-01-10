import React from 'react'


function Hero() {
    return ( 
      //hero w-full h-screen  px-10 pt-50 pb-50 padding-bottom:20vh flex flex-col items-center justify-center bg-background text-foreground
      <main className="hero relative w-full h-screen px-10 pt-50 pb-5 flex flex-col items-center justify-between bg-background text-foreground ">
      <div className="hero-content mb-20 text-center flex flex-col items-center justify-center gap-2 ">
        <div className="rate w-full mb-8 flex flex-col items-center justify-center text-1xl gap-2">
            <div className="stars align flex items-center justify-center gap-1 ">
              {Array.from({length: 5}).map((_, index) => (
                <img 
                  key={index} 
                  src={'Star.svg'} 
                  width={20} 
                  alt="star"
                  className="w-6 h-6 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]"
                  />
              ))}
            </div>
            <p className="text-[1rem] text-gray-300 ">5/5 basé sur 120 avis clients</p>
        </div>
        <h1 className="hero-title md:text-[10vw] text-7xl font-bold bg-linear-200 from-blue-500 from-40% to-blue-200 text-transparent bg-clip-text">NAFAT HOLDING</h1>
        <p className="hero-description md:w-4xl w-80vw md:text-[1.2rem] sm:text-1xl leading-6 mt-2 text-gray-600">Un groupe marocain de référence opérant dans des secteurs stratégiques, au service de la qualité, de la performance et de la création de valeur durable.</p>
        <div className="buttons mt-5 flex items-center justify-center gap-4">
          <button className="btn btn-primary cursor-pointer px-5 py-2 rounded-2xl font-bold text-background bg-blue-600 bg-linear-200 from-blue-600 from-55% to-blue-300 hover:bg-blue-700 border-0">Découvrir Nafat</button>
          {/* <div className="btn-border rounded-2xl p-0.5 bg-gradient-to-tl from-blue-500  from-10% to-blue-100 to-90%  hover:bg-gradient-to-br  transition-all duration-300 ease-in-out">  */}
          <div className="
                btn-border rounded-2xl p-0.5
                bg-linear-to-tl from-blue-100 from-30% via-blue-500 via-60% to-blue-100 to-90% 
                bg-[length:200%_200%] 
                hover:bg-[position:50%_80%]
                transition-all duration-300 ease-in-out
              ">
            <button className="btn btn-outline cursor-pointer px-5 py-2 rounded-[12px] font-bold text-gray-500 bg-white ">Nos Services</button>       
          </div>
        </div>
       
      </div>
      <div className="scroll-down w-full   flex flex-col md:items-start md:justify-end items-center justify-center">
          <div className="all">
            <p className="font-medium text-gray-300">scroll for more</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce  text-gray-300 mx-auto mt-2 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {/* <img src="arrow.svg" alt="down arrow" className="animate-bounce text-gray-300 mx-auto mt-2 w-3"/> */}
          </div>
        </div>
    </main>
  )
}

export default Hero