
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import BlogPage from './BlogPage';


export const metadata: Metadata = {
    title: 'Blog ASMAK RAHAL - Insights & Tendances Fruits de Mer',
    description: 'Découvrez les experts sur les avantages du poisson surgelé, les pratiques de pêche durable et pourquoi ASMAK RAHAL est le leader marocain des produits de la mer avec plus de 35 ans d\'excellence.',
    keywords: 'ASMAK RAHAL, poisson surgelé, fruits de mer marocains, société de poisson Agadir, pêche durable, bienfaits fruits de mer, oméga-3, alimentation saine',
    openGraph: {
        title: 'Blog ASMAK RAHAL - Insights Fruits de Mer Premium',
        description: 'Découvrez la vérité sur la qualité du poisson surgelé et l\'engagement d\'ASMAK RAHAL envers l\'excellence.',
        type: 'website',
    }
};




export default function Blog() {
    return (
        <div className=" bg-background text-foreground py-10 px-10 sm:px-12 lg:px-16 font-sans">
            <BlogPage />
        </div>
    );
}