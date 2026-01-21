import React from 'react'

function Footer() {
    return (
        <footer className="relative w-full  pt-20 pb-10  overflow-hidden">
            {/* Background pattern or watermark text-[#0a2e5c]*/}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.2] z-0 flex justify-center items-end">
                <span className="
                text-[20vw] font-black  leading-[0.75] tracking-tighter whitespace-nowrap translate-y-4
                bg-linear-200 from-blue-500/10 from-40% to-blue-300 to-90% text-transparent bg-clip-text
                ">
                    NAFAT HOLDING
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10    ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-xl">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-[#0a2e5c] font-bold text-base mb-4 uppercase tracking-wide">NAFAT HOLDING</h3>
                            <p className="text-gray-500 leading-relaxed max-w-[300px]">
                                Groupe marocain opérant dans les produits de la mer, la logistique du froid et l'immobilier, avec une vision à long terme et des standards de qualité élevés.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[#0a2e5c] font-bold text-base mb-4">Contact</h4>
                            <div className="text-gray-500 space-y-2">
                                <p>Maroc</p>
                                <p>contact@nafat-holding.ma</p>
                                <p>+212 xxx xxx xxx</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-[#0a2e5c] font-bold text-base mb-6 capitalize">Links</h3>
                        <ul className="text-gray-500 space-y-3">
                            <li><a href="#" className="hover:text-[#0a2e5c] transition-colors">À propos</a></li>
                            <li><a href="#" className="hover:text-[#0a2e5c] transition-colors">Vision & Stratégie</a></li>
                            <li><a href="#" className="hover:text-[#0a2e5c] transition-colors">Structure du groupe</a></li>
                            <li><a href="#" className="hover:text-[#0a2e5c] transition-colors">Carrières</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-[#0a2e5c] font-bold text-base mb-6 capitalize">Nos Activités</h3>
                        <ul className="text-gray-500 space-y-3">
                            <li><a href="#" className="hover:text-[#0a2e5c] transition-colors">ASMAK RAHAL</a></li>
                            <li><a href="#" className="hover:text-[#0a2e5c] transition-colors">SWORD FISH</a></li>
                            <li><a href="#" className="hover:text-[#0a2e5c] transition-colors">PREST CONG</a></li>
                            <li><a href="#" className="hover:text-[#0a2e5c] transition-colors">Marches aux poissons <br />(Agadir & Tiznit)</a></li>
                            <li><a href="#" className="hover:text-[#0a2e5c] transition-colors">NAFAT IMMO</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-[#0a2e5c] font-bold text-base mb-6 capitalize">Adress</h3>
                        <div className="text-gray-500 space-y-4">
                            <div>
                                <p>Dépôt : Port d'Agadir</p>
                            </div>
                            <div>
                                <p>Siège : 314D Riad Salam</p>
                                <p>Agadir</p>
                            </div>
                            <div className="pt-2">
                                <p>+212 05 28 82 54 12</p>
                                <p>+212 06 61 91 68 38</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-100/50 pt-8 mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-slate-300 font-light">
                    <p>© 2026 Holding NAFAT. Tous droits réservés.</p>
                    <div className="hidden md:block w-px h-3 bg-slate-300/50"></div>
                    <div className="flex gap-4">
                        <a href="/MentionLegal" className="hover:text-gray-400 transition-colors">Mentions légales</a>
                        <span>|</span>
                        <a href="/PolitiqueConfidentialite" className="hover:text-gray-400 transition-colors">Politique de confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer