"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Map from './Map';
import SuccessModal from '../ui/SuccessModal';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate an API call
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            // Reset form could be handled here if needed
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <div className="  w-full  md:px-20 px-10  relative py-20  mb-10 ">
            {/* Contact Form w-full  md:px-20 px-10  */}
            <img className='absolute --z-10 w-[300rem] top-0 left-0' src="/line01.svg" alt="line" />

            <h2 className=" relative z-10 max-[415px]:text-5xl text-6xl font-bold text-gray-800 mb-5">Contactez-nous</h2>
            <div id="contact" className="forms max-[700px]:p-5 p-10 bg-white/30 backdrop-blur-xl  rounded-lg mt-20 flex flex-row max-[1000px]:flex-col items-center justify-between gap-10 overflow-hidden">

                <div className="max-[1000px]:w-full w-2/3 h-full  max-[700px]:p-5 p-10  rounded-lg">

                    <p className="max-[700px]:text-[5vw] text-3xl text-gray-600 mb-8 font-light leading-snug">
                        Une question, un projet ou une demande de collaboration ? <span className="font-bold text-blue-600">Nos experts </span> vous accompagnent pour bâtir l&apos;avenir de vos ambitions.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="votre@email.com"
                                required
                                className="mt-2 p-4 w-full bg-white/50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Téléphone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+212 ..."
                                required
                                className="mt-2 p-4 w-full bg-white/50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Votre Message</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Décrivez votre projet..."
                                rows={4}
                                required
                                className="mt-2 p-4 w-full bg-white/50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`md:w-full w-full py-4 bg-blue-600 text-white text-lg font-bold rounded-xl hover:bg-blue-700 transition duration-300 cursor-pointer shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] active:scale-[0.98] flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Envoi en cours...
                                </>
                            ) : (
                                "Envoyer le message"
                            )}
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="max-[1000px]:w-full w-1/2 h-full max-[700px]:h-[400px] flex items-center justify-center overflow-hidden bg-gray-100  rounded-lg ">
                    {/* Embed the iframe with the map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.458267662656!2d-9.626518599999999!3d30.4231084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7629b48e08d%3A0xe0b846b032d99492!2sASMAK%20RAHAL%20SARL!5e0!3m2!1sen!2sma!4v1768589588834!5m2!1sen!2sma"
                        width="100%" height="600" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
            />
        </div >
    );
}
