"use client"
import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import content, { BlogPost } from '../../content'
import RelatedBlogs from '../RelatedBlogs'
import Skeleton from '@/components/ui/skeleton'

//BlogPost interface is now imported from content.ts

function Page({ params }: { params: Promise<{ BlogId: string }> }) {
    const { BlogId } = use(params)
    const [article, setArticle] = useState<BlogPost | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getArticle = () => {
            setLoading(true)
            setTimeout(() => {
                try {
                    if (!BlogId) {
                        return;
                    }
                    const id = parseInt(BlogId)
                    const foundArticle = content.find((post) => post.id === id)

                    if (foundArticle) {
                        setArticle(foundArticle)
                    }
                } catch (error) {
                    console.error('Error fetching article:', error)
                } finally {
                    setLoading(false)
                }
            }, 1000)
        }
        getArticle()
    }, [BlogId])

    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 pt-20 pb-20">
                <Skeleton width={120} height={20} className="mb-8" />
                <div className="space-y-6 mb-12">
                    <Skeleton width={80} height={24} className="rounded-full" />
                    <Skeleton height={60} className="w-3/4" />
                    <Skeleton height={400} className="w-full rounded-2xl" />
                    <div className="space-y-4">
                        <Skeleton height={20} className="w-2/3" />
                        <Skeleton height={20} className="w-1/2" />
                    </div>
                </div>
                <div className="space-y-4">
                    <Skeleton height={20} className="w-full" />
                    <Skeleton height={20} className="w-full" />
                    <Skeleton height={20} className="w-full" />
                    <Skeleton height={20} className="w-4/5" />
                </div>
            </div>
        )
    }

    if (!article) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <h2 className="text-2xl font-bold">Article not found</h2>
                <Link href="/Blog" className="text-primary hover:underline">Return to Blog</Link>
            </div>
        )
    }

    return (
        <article className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 pt-20 pb-20 animate-in fade-in duration-700 slide-in-from-bottom-4">
            {/* Back Link */}
            <Link
                href="/Blog"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform"
                >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                </svg>
                Retour au blog
            </Link>

            {/* Header Section */}
            <header className=" mb-12 space-y-6">
                <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500 text-white dark:text-white text-xs font-bold tracking-wide uppercase">
                        {article.category}
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance leading-tight">
                    {article.title}
                </h1>

                {
                    article.image && (
                        <div
                            className="relative h-[400px] w-full bg-gray-100 my-10 rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                                backgroundImage: `url(${article.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                        </div>
                    )
                }

                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                    {article.description}
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-gray-200 border-border pt-6 mt-6">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" x2="16" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="2" y2="6" />
                            <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <time dateTime={article.date}>{article.date}</time>
                    </div>
                    <div className="flex  items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </header>

            {/* Featured Image (Commented out but styled for future) */}
            {/* 
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-12 bg-muted/50">
                <img 
                    src={article.image} 
                    alt={article.title} 
                    className="object-cover w-full h-full"
                />
            </div> 
            */}
            {/* Featured Image- video */}
            {
                article.video && (
                    <div className="my-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                        <video src={article.video} className="w-full h-full object-cover" autoPlay controls loop muted></video>
                    </div>
                )
            }
            {/* Content Section */}
            <div
                className="font-serif leading-relaxed text-2xl md:text-3xl lg:text-4xl  dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:leading-relaxed prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Footer / Share / Tags could go here */}
            {/* <div className="mt-20 pt-8 border-t border-gray-200 border-border">
                <a href="/Blog" className="text-primary font-medium hover:underline flex items-center justify-center">
                    Lire d'autres articles
                </a>
            </div> */}
            <RelatedBlogs currentArticle={article} />
        </article>
    )
}

export default Page
