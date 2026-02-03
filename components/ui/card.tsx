import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BlogPost } from '@/app/content'


function Card({
    id,
    title,
    description,
    date,
    readTime,
    category,
    image,
}: BlogPost) {
    return (
        <article
            key={id}
            className="group relative flex flex-col sm:flex-row gap-6 sm:gap-12 items-start p-6 -mx-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
        >

            {/* Content */}
            <div className="flex-1 space-y-3">


                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    <Link href={`/Blog/${id}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {title}
                    </Link>
                </h2>
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100 group">
                    {image ? (
                        <div
                            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        />
                    ) : (
                        <div className="h-full w-full flex items-center justify-center bg-linear-to-br from-blue-50 to-blue-100/50">
                            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">NAFAT HOLDING</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{category}</span>
                    <span>•</span>
                    <time>{date}</time>
                    <span>•</span>
                    <span>{readTime}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    {description}
                </p>
                <div className="pt-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Lire la suite
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </article>
    )
}

export default Card;
