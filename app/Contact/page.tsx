import ContactSection from '../../components/sections/Contact';
import Image from 'next/image';

export default function Contact() {
    return (
        <div className="bg-background">
            {/* PREMIUM HEADER SECTION */}
            <header className="w-full pt-32 pb-16 flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Image key={i} src="/Star.svg" width={20} height={20} alt="Star" />
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-[10px] font-bold tracking-widest uppercase border border-blue-100 italic">
                        Contact Direct
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600">Disponibilité Mondiale</span>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="w-full text-5xl md:text-8xl font-bold text-center bg-linear-200 from-blue-500 from-40% to-blue-200 text-transparent bg-clip-text uppercase tracking-tighter py-2">
                        CONTACTEZ-NOUS
                    </h1>
                </div>

                <p className="text-gray-500 text-center text-lg max-w-2xl mt-6 px-10">
                    Nos experts sont à votre écoute pour accompagner vos projets et répondre à vos besoins avec excellence.
                </p>
            </header>

            <ContactSection />
        </div>
    );
}
