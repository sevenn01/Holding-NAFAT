"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/card';
import content from '../content';
import Image from 'next/image';
import Skeleton from '@/components/ui/skeleton';

export default function BlogPage() {
    const [articles, setArticles] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setArticles(content)
            setLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="max-w-4xl mx-auto">
            {/* PREMIUM HEADER SECTION */}
            <header className="w-full pt-10 pb-16 flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Image key={i} src="/Star.svg" width={20} height={20} alt="Star" />
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-[10px] font-bold tracking-widest uppercase border border-blue-100 italic">
                        Insights & Expertises
                    </div>
                    <div className="flex items-center gap-1.5 opacity-60">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-[10px] font-medium tracking-wider uppercase text-gray-600">Actualités du Groupe</span>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="w-full text-5xl md:text-8xl font-bold text-center bg-linear-200 from-blue-500 from-40% to-blue-200 text-transparent bg-clip-text uppercase tracking-tighter py-2">
                        NOTRE BLOG
                    </h1>
                </div>

                <p className="text-gray-500 text-center text-lg max-w-2xl mt-6">
                    Votre source d'expertise sur l'excellence maritime, l'innovation industrielle et l'avenir de NAFAT HOLDING.
                </p>
            </header>

            {/* Blog Grid */}
            <div className="grid gap-12">
                {loading ? (
                    <>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="ticket w-full py-10 px-8 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col gap-6">
                                <Skeleton height={200} className="w-full rounded-2xl" />
                                <div className="space-y-4">
                                    <Skeleton width={150} height={28} />
                                    <Skeleton height={20} className="w-full" />
                                    <Skeleton height={20} className="w-4/5" />
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    articles.map((post) => (
                        <Card key={post.id} {...post} />
                    ))
                )}
            </div>
        </div>
    );
}