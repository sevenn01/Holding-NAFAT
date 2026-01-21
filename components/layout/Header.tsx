'use client';
import React, { useState } from 'react'

function Header() {

    const [mobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
        //alert(mobileMenu);
    }
    return (
        <div>
            <div className="header relative w-full p-5  overflow-hidden">
                <div className="header-content px-10  py-5 max-[880px]:hidden flex flex-row items-center justify-between">
                    <div className="header-logo font-black text-5xl bg-linear-200 from-blue-500 from-05% to-blue-200 text-transparent bg-clip-text">
                        NH
                    </div>
                    <div className="header-menu md:flex  flex-row items-center justify-between">
                        <ul className="flex flex-row items-center justify-between gap-10">
                            <li><a className='text-xl text-gray-500 font-medium hover:text-blue-500 transition duration-300' href="#">Home</a></li>
                            <li><a className='text-xl text-gray-500 font-medium hover:text-blue-500 transition duration-300' href="#">About</a></li>
                            <li><a className='text-xl text-gray-500 font-medium hover:text-blue-500 transition duration-300' href="#">Services</a></li>
                            <li><a className='text-xl text-gray-500 font-medium hover:text-blue-500 transition duration-300' href="#">Blog</a></li>
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
                            <button className="btn btn-outline cursor-pointer px-10 py-2 rounded-[12px] font-bold text-gray-500 bg-white hover:text-blue-500 transition duration-300">Contact</button>
                        </div>
                    </div>


                </div>

                {/* Mobile View */}
                <div className={`
                    mobile-view fixed max-[880px]:flex hidden w-full bg-blue-50/20 backdrop-blur-sm  top-0 left-0 px-10 py-5 z-909  flex-row items-center justify-between  
                    ${mobileMenu ? 'block' : 'hidden'}
                    `}>
                    <div className={`
                        header-logo font-black text-5xl bg-linear-200 from-blue-500 from-05% to-blue-200 text-transparent bg-clip-text
                        `}>
                        NH
                    </div>
                    <div
                        className={`toggle-menu relative w-10 h-10   flex flex-row z-9990
                            before:content-[''] before:w-10 before:h-2 before:absolute before:top-5 before:left-0 before:bg-blue-500 
                            before:rounded-full after:content-[''] after:w-10 after:h-2 after:bg-blue-500 after:rounded-full  after:absolute after:top-2 after:left-1 
                            before:z-10 after:z-10 group before:group-hover:bg-blue-500 after:group-hover:left-0 cursor-pointer transition-all duration-300 ease-in-out
                            ${mobileMenu ? 'before:rotate-45 after:-rotate-45 after:top-5 after:-translate-x-1 after:bg-blue-500 before:bg-blue-500 ' : 'after:rotate-0 before:rotate-0 after:top-2 after:translate-x-0'}`}
                        onClick={handleMobileMenu}>

                    </div>
                </div>
                {/* just toggle menu */}
                <div
                    className={`toggle-menu fixed w-10 h-10   flex flex-row items-end z-999099  top-6 right-10
                            before:content-[''] before:w-10 before:h-2 before:absolute before:top-5 before:left-0 before:bg-blue-500 
                            before:rounded-full after:content-[''] after:w-10 after:h-2 after:bg-blue-500 after:rounded-full  after:absolute after:top-2 after:left-1 
                            before:z-10 after:z-10 group before:group-hover:bg-blue-500 after:group-hover:left-0 cursor-pointer transition-all duration-300 ease-in-out
                            ${mobileMenu ? 'before:rotate-45 after:-rotate-45 after:top-5 after:-translate-x-1 after:bg-blue-100 before:bg-blue-100 fixed' : 'hidden after:rotate-0 before:rotate-0 after:top-2 after:translate-x-0'}
                            max-[880px]:block hidden
                            `}
                    onClick={handleMobileMenu}>

                </div>
                {/*  bg-blue-500 z-999 bg-linear-to-tr from-blue-300 from-10% to-blue-700 */}
                <div className={` mobile-menu  max-[880px]:flex hidden h-[calc(100vh)] px-20 py-20  fixed top-0  w-full transition-all duration-800 ease-out 
                     bg-white z-999 flex-col items-center justify-center gap-30
                    ${mobileMenu ? 'left-0' : 'left-[100%]'}`}>
                    <div className="header-content px-10 font-black text-5xl text-gray-700 flex flex-col items-center justify-center">NAFAT HOLDING</div>
                    <ul className="w-full  flex flex-col items-start justify-center gap-6">
                        <li className='flex flex-row items-center justify-between w-full'><a className='text-3xl text-gray-400 font-bold hover:underline transition-all duration-300' href="#">Home</a><div className="w-10 h-10 text-2xl font-bold text-gray-400">01</div></li>
                        <li className='flex flex-row items-center justify-between w-full'><a className='text-3xl text-gray-400 font-bold hover:underline transition-all duration-300' href="#">About</a><div className="w-10 h-10 text-2xl font-bold text-gray-400">02</div></li>
                        <li className='flex flex-row items-center justify-between w-full'><a className='text-3xl text-gray-400 font-bold hover:underline transition-all duration-300' href="#">Services</a><div className="w-10 h-10 text-2xl font-bold text-gray-400">03</div></li>
                        <li className='flex flex-row items-center justify-between w-full'><a className='text-3xl text-gray-400 font-bold hover:underline transition-all duration-300' href="#">Blog</a><div className="w-10 h-10 text-2xl font-bold text-gray-400">04</div></li>
                        <li className='flex flex-row items-center justify-between w-full'><a className='text-3xl text-gray-400 font-bold hover:underline transition-all duration-300' href="#">Contact</a><div className="w-10 h-10 text-2xl font-bold text-gray-400">05</div></li>
                    </ul>
                    <div className="footer-mobile">
                        <div className="footer-mobile-content text-gray-400 font-light">
                            NAFAT HOLDING © 2026
                        </div>
                    </div>
                    <img className='absolute -z-10 w-[200rem] top-60 left-0 blur-xl ' src="/line01.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;