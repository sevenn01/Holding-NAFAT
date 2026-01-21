import React from 'react'

function PolitiqueConfidentialite() {
    return (
        <main className="container mx-auto px-6 py-24 font-sans text-gray-700">
            <h1 className="text-4xl font-bold text-[#0a2e5c] mb-12">Politique de Confidentialité</h1>

            <div className="space-y-12 max-w-4xl">
                <section>
                    <p className="leading-relaxed mb-6">
                        NAFAT HOLDING s'engage à protéger la vie privée des utilisateurs de son site web.
                        Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">1. Collecte des données</h2>
                    <p className="leading-relaxed mb-4">
                        Nous pouvons collecter les informations suivantes :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                        <li>Informations de contact (nom, adresse email, numéro de téléphone) lorsque vous remplissez un formulaire de contact.</li>
                        <li>Informations de navigation (adresse IP, type de navigateur, pages visitées) via des cookies.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">2. Utilisation des données</h2>
                    <p className="leading-relaxed mb-4">
                        Les données collectées sont utilisées pour :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                        <li>Répondre à vos demandes et questions.</li>
                        <li>Améliorer le contenu et la navigation de notre site.</li>
                        <li>Vous envoyer des informations sur nos activités (si vous y avez consenti).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">3. Protection des données</h2>
                    <p className="leading-relaxed">
                        Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification,
                        divulgation ou destruction non autorisée. Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">4. Vos droits</h2>
                    <p className="leading-relaxed">
                        Conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel,
                        vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles.
                        Pour exercer ces droits, vous pouvez nous contacter à : contact@nafat-holding.ma.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">5. Cookies</h2>
                    <p className="leading-relaxed">
                        Ce site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies,
                        mais cela pourrait limiter certaines fonctionnalités du site.
                    </p>
                </section>
            </div>
        </main>
    )
}

export default PolitiqueConfidentialite
