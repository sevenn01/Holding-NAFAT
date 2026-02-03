"use client"
import Card from '@/components/ui/card'
import React, { useState } from 'react'
import content, { BlogPost } from '../content'
import Link from 'next/link'

function RelatedBlogs({ currentArticle }: { currentArticle: BlogPost }) {
    const [articles] = useState<BlogPost[]>(() => {
        // Simple shuffle and filter to get related articles
        return [...content]
            .filter((article) => article.id !== currentArticle.id)
            .sort(() => Math.random() - 0.5);
    });
    return (
        <div className='mt-20 pt-20 border-t border-gray-200 border-border px-5'>
            <h2 className='text-2xl font-bold'>Articles liés</h2>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 items-start justify-center lg:grid-cols-3 gap-15'>
                {
                    articles.map((article, index) => (
                        index < 3 && (
                            <Link key={article.id} href={`/Blog/${article.id}`} className="focus:outline-none">
                                <article
                                    className=" h-120 overflow-hidden  group relative flex flex-col sm:flex-row gap-10 sm:gap-12 items-center justify-center p-6 -mx-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
                                >

                                    {/* Content */}
                                    <div className="flex-1 space-y-3">


                                        <h2 className="text-2xl font-bold group-hover:text-primary transition-colors  line-clamp-3">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {article.title}
                                        </h2>
                                        <div className="imag h-35 w-full bg-amber-400/10"

                                        >
                                            {
                                                article.image && (
                                                    <div className="imag h-35 w-full bg-amber-400"
                                                        style={{ backgroundImage: `url(${article.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                                                    >
                                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="flex items-center gap-3 text-[.8rem] text-gray-500 mb-2">
                                            <span className="font-extralight text-primary bg-primary/10 px-2 py-0.5 rounded-full">{article.category}</span>
                                            <span>•</span>
                                            <time>{article.date}</time>
                                            <span>•</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed line-clamp-3">
                                            {article.description}
                                        </p>
                                        <div className="pt-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                            Lire la suite
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedBlogs