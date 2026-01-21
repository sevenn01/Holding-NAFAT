import Image from 'next/image';
import Map from './Map';

export default function Contact() {
    return (
        <div className="  w-full  md:px-20 px-10  relative py-20  mb-10 ">
            {/* Contact Form w-full  md:px-20 px-10  */}
            <img className='absolute --z-10 w-[300rem] top-0 left-0' src="/line01.svg" alt="line" />

            <h2 className=" relative z-10 max-[415px]:text-5xl text-6xl font-bold text-gray-800 mb-5">Contact</h2>
            <div className="forms max-[700px]:p-5 p-10 bg-blue-100/30 backdrop-blur-xl  rounded-lg mt-20 flex flex-row max-[1000px]:flex-col items-center justify-between gap-10 overflow-hidden">

                <div className="max-[1000px]:w-full w-2/3 h-full  max-[700px]:p-5 p-10  rounded-lg">

                    <p className="max-[700px]:text-[5vw] text-3xl text-gray-600 mb-8">
                        Vous souhaitez en savoir plus sur Holding NAFAT ou entrer en relation avec l’un de nos pôles d’activités ?
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-2 p-3 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="mt-2 p-3 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                required
                                className="mt-2 p-3 w-full bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="md:w-[150px] w-full self-end py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer shadow-[0_20px_50px_rgba(8,_110,_164,_0.7)]"
                        >

                            Envoyer
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
        </div >
    );
}
