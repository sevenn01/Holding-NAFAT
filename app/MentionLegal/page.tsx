import Image from 'next/image';

function MentionLegal() {
    return (
        <main className="bg-background font-sans text-gray-700">
            {/* PREMIUM HEADER SECTION */}
            <header className="w-full pt-32 pb-16 flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Image key={i} src="/Star.svg" width={20} height={20} alt="Star" />
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-[10px] font-bold tracking-widest uppercase border border-blue-100 italic">
                        Cadre Légal
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600">Transparence NAFAT</span>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="w-full text-5xl md:text-8xl font-bold text-center bg-linear-200 from-blue-500 from-40% to-blue-200 text-transparent bg-clip-text uppercase tracking-tighter py-2">
                        MENTIONS LÉGALES
                    </h1>
                </div>
            </header>

            <div className="container mx-auto px-6 pb-24">

                <div className="space-y-12 max-w-4xl">
                    <section>
                        <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">1. Éditeur du site</h2>
                        <div className="space-y-2 leading-relaxed">
                            <p><strong>Dénomination sociale :</strong> NAFAT HOLDING</p>
                            <p><strong>Forme juridique :</strong> Société Anonyme (SA)</p>
                            <p><strong>Siège social :</strong> 314D Riad Salam, Agadir, Maroc</p>
                            <p><strong>Téléphone :</strong> +212 05 28 82 54 12</p>
                            <p><strong>Email :</strong> contact@nafat-holding.ma</p>
                            {/* Add RC, Patente, IF if available or use placeholders */}
                            <p><strong>RC :</strong> XXXXX</p>
                            <p><strong>Patente :</strong> XXXXX</p>
                            <p><strong>IF :</strong> XXXXX</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">2. Hébergement</h2>
                        <div className="space-y-2 leading-relaxed">
                            <p>Le site est hébergé par :</p>
                            <p><strong>Nom de l'hébergeur :</strong> [Nom de l'hébergeur]</p>
                            <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                            <p><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">3. Propriété intellectuelle</h2>
                        <p className="leading-relaxed">
                            L'ensemble de ce site relève de la législation marocaine et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">4. Limitation de responsabilité</h2>
                        <p className="leading-relaxed">
                            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes,
                            des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email
                            en décrivant le problème de la manière la plus précise possible.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default MentionLegal
