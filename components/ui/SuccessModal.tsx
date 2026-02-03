"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            const tl = gsap.timeline();
            tl.set(modalRef.current, { display: 'flex' });
            tl.fromTo(overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, ease: 'power2.out' }
            );
            tl.fromTo(contentRef.current,
                { opacity: 0, scale: 0.8, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' },
                '-=0.2'
            );
        } else {
            if (modalRef.current) {
                gsap.to(modalRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        gsap.set(modalRef.current, { display: 'none', opacity: 1 });
                    }
                });
            }
        }
    }, [isOpen]);

    if (!isOpen && !modalRef.current) return null;

    return (
        <div ref={modalRef} className="fixed inset-0 z-[9999] hidden items-center justify-center p-4">
            {/* Overlay */}
            <div
                ref={overlayRef}
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            {/* Content */}
            <div
                ref={contentRef}
                className="relative bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl text-center flex flex-col items-center gap-6"
            >
                {/* Success Icon */}
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Message Envoyé !</h3>
                    <p className="text-gray-500 leading-relaxed font-light">
                        Merci de nous avoir contactés. Nos experts reviendront vers vous dans les plus brefs délais pour répondre à votre demande.
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20"
                >
                    Fermer
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;
