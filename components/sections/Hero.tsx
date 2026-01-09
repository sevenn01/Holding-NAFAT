import React from 'react'

function Hero() {
  return (
    <main className="hero pt-50 padding-top:20vh padding-bottom:20vh flex flex-col items-center justify-center bg-background text-foreground">
      <div className="hero-content text-center">
        <div className="rate w-full mb-4 flex items-center justify-center text-1xl gap-2">
            <div className="stars">⭐⭐⭐⭐⭐</div>
          <h3 className=" font-light text-gray-400">Rate: 5/5</h3>
        </div>
        <h1 className="hero-title md:text-9xl text-5xl font-bold bg-linear-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text">NAFAT HOLDING</h1>
        <p className="hero-description">This is a sample hero section.</p>
      </div>
    </main>
  )
}

export default Hero