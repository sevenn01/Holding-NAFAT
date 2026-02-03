import Image from 'next/image';

function PolitiqueConfidentialite() {
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
                        Protection des Données
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600">Confidentialité Totale</span>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="w-full text-5xl md:text-8xl font-bold text-center bg-linear-200 from-blue-500 from-40% to-blue-200 text-transparent bg-clip-text uppercase tracking-tighter py-2">
                        CONFIDENTIALITÉ
                    </h1>
                </div>
            </header>

            <div className="container mx-auto px-6 pb-24">

                <div className="space-y-12 max-w-4xl">
                    <section>
                        <p className="leading-relaxed mb-6">
                            NAFAT HOLDING s&apos;engage à protéger la vie privée des utilisateurs de son site web.
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
                            Conformément à la loi 09-08 relative à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel,
                            vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;opposition au traitement de vos données personnelles.
                            Pour exercer ces droits, vous pouvez nous contacter à : contact@nafat-holding.ma.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#0a2e5c] mb-4">5. Cookies</h2>
                        <p className="leading-relaxed">
                            Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies,
                            mais cela pourrait limiter certaines fonctionnalités du site.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default PolitiqueConfidentialite
