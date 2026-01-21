import React from 'react'

function MentionLegal() {
    return (
        <main className="container mx-auto px-6 py-24 font-sans text-gray-700">
            <h1 className="text-4xl font-bold text-[#0a2e5c] mb-12">Mentions Légales</h1>

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
        </main>
    )
}

export default MentionLegal
