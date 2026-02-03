export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
  video?: string;
}

const content: BlogPost[] = [
  {
    id: 1,
    title: "Frais vs Surgelé : Briser le Mythe",
    description:
      'Vous pensez que le "frais" est toujours meilleur ? Détrompez-vous. Découvrez comment la technologie moderne de surgélation rapide préserve les nutriments et la fraîcheur.',
    date: "15 Jan 2026",
    readTime: "Lecture 5 min",
    category: "Insights Industrie",
    image: "/blog/frozen_tech.png",
    content: `
      <h2>Frais ou surgelé : une idée reçue tenace</h2>
      <p>Beaucoup de consommateurs pensent que le poisson frais est toujours supérieur. Pourtant, cette idée est souvent fausse. Le poisson dit « frais » peut avoir voyagé plusieurs jours avant d’arriver sur les étals.</p>

      <h3>La surgélation rapide : une technologie clé</h3>
      <p>La surgélation rapide permet de congeler le poisson quelques heures après la capture. Cette méthode préserve les nutriments essentiels, la texture et la saveur, tout en bloquant le développement des bactéries.</p>

      <h3>Sécurité alimentaire et qualité</h3>
      <p>Grâce à une chaîne du froid strictement contrôlée, le poisson surgelé offre une sécurité alimentaire supérieure et une qualité constante.</p>

      <h3>Conclusion</h3>
      <p>Le poisson surgelé n’est pas un compromis, mais un choix intelligent pour la qualité, la sécurité et la nutrition.</p>
    `,
    video: "",
  },

  {
    id: 2,
    title: "ASMAK RAHAL : 35 Ans d'Excellence en Produits de la Mer",
    description:
      "D'Agadir au monde entier. Découvrez comment ASMAK RAHAL est devenu un leader des produits de la mer.",
    date: "10 Jan 2026",
    readTime: "Lecture 6 min",
    category: "Actualités Entreprise",
    image: "/rahal.jpg",
    content: `
      <h2>Une histoire née à Agadir</h2>
      <p>Fondée à Agadir, ASMAK RAHAL s’est imposée comme un acteur majeur de l’industrie marocaine des produits de la mer.</p>

      <h3>35 ans de savoir-faire</h3>
      <p>Grâce à une expertise solide et une vision long terme, l’entreprise a su répondre aux exigences des marchés nationaux et internationaux.</p>

      <h3>Qualité et traçabilité</h3>
      <p>Chaque produit est traçable, de la mer jusqu’au client final, garantissant transparence, sécurité et satisfaction.</p>

      <h3>Conclusion</h3>
      <p>ASMAK RAHAL incarne l’excellence marocaine dans le secteur des produits de la mer depuis plus de trois décennies.</p>
    `,
    video: "",
  },
  {
    id: 3,
    title: "Maroc-Espagne: La coopération halieutique au centre des discussions à Agadir (Reportage)",
    description: "La sixième édition du Salon International Halieutis se poursuit à Agadir sous le thème 'Pêche et Aquaculture durables : leviers pour une Economie Bleue inclusive et performante', avec l’Espagne comme pays invité d’honneur. Ce salon est l'occasion de renforcer la coopération entre Rabat et Madrid dans le domaine halieutique et d'explorer des opportunités collaboratives.",
    date: "samedi 4 février 2023 14:30",
    readTime: "3 min",  // Assumed read time, adjust as necessary
    category: "Coopération Halieutique",
    image: "https://2msoread-ww.amagi.tv/mediasfiles/videos/images/2023/02/03/16754520417_4---03_02_2023.png",
    video: "https://2msoread-ww.amagi.tv/mediasfiles/videos/2023/02/03/16754520417_4   03_02_2023.mp4",
    content: `
      <h2>La coopération halieutique au centre des discussions à Agadir</h2>
      <p>La sixième édition du Salon International Halieutis se poursuit à Agadir jusqu'au 5 février sous le thème : "<strong>Pêche et Aquaculture durables : leviers pour une Economie Bleue inclusive et performante</strong>" avec l’Espagne comme pays invité d’honneur.</p>
      
      <p>L'occasion d'examiner les moyens de renforcer la coopération entre Rabat et Madrid dans le domaine halieutique et d'explorer les opportunités collaboratives, ainsi que les mécanismes conjoints pour renforcer la contribution de la recherche scientifique et technologique à la transformation bleue du secteur halieutique.</p>
    `,
  },

  {
    id: 4,
    title: "La Puissance Nutritionnelle : Pourquoi Manger du Poisson Surgelé ?",
    description:
      "Riche en Oméga-3, protéines et vitamines. Le poisson surgelé est un allié santé au quotidien.",
    date: "28 Déc 2025",
    readTime: "Lecture 4 min",
    category: "Santé & Nutrition",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
    content: `
      <h2>Une source de nutriments essentiels</h2>
      <p>Le poisson surgelé est naturellement riche en Oméga-3, en protéines de haute qualité et en vitamines essentielles.</p>

      <h3>La surgélation protège les bienfaits</h3>
      <p>Contrairement aux idées reçues, la surgélation préserve la valeur nutritionnelle du poisson sur une longue durée.</p>

      <h3>Un choix pratique et économique</h3>
      <p>Moins de gaspillage, une meilleure conservation et un coût maîtrisé font du poisson surgelé un choix malin.</p>

      <h3>Conclusion</h3>
      <p>Intégrer le poisson surgelé dans son alimentation, c’est faire un choix sain, pratique et durable.</p>
    `,
    video: "",
  },

  {
    id: 5,
    title: "La Durabilité au Cœur de Notre Action",
    description:
      "Pêche responsable et respect des océans : l'engagement durable d’ASMAK RAHAL.",
    date: "15 Déc 2025",
    readTime: "Lecture 5 min",
    category: "Durabilité",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1974&auto=format&fit=crop",
    content: `
      <h2>Protéger les océans</h2>
      <p>La durabilité est un pilier fondamental chez ASMAK RAHAL, afin de préserver les ressources marines.</p>

      <h3>Pêche responsable</h3>
      <p>Nous travaillons avec des partenaires respectant les quotas et les pratiques de pêche durable.</p>

      <h3>Un engagement pour les générations futures</h3>
      <p>Chaque décision est prise dans le respect de l’environnement et des écosystèmes marins.</p>

      <h3>Conclusion</h3>
      <p>Consommer responsable aujourd’hui, c’est protéger les océans de demain.</p>
    `,
    video: "",
  },

  {
    id: 6,
    title: "Praticité et Gastronomie : Cuisiner avec du Poisson Surgelé",
    description:
      "Des repas savoureux, simples et rapides grâce au poisson surgelé.",
    date: "05 Déc 2025",
    readTime: "Lecture 3 min",
    category: "Culinaire",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    content: `
      <h2>La cuisine sans contraintes</h2>
      <p>Le poisson surgelé permet de cuisiner à tout moment sans planification préalable.</p>

      <h3>Des plats gourmands et rapides</h3>
      <p>Four, poêle ou vapeur : le poisson surgelé s’adapte à toutes vos recettes.</p>

      <h3>Moins de gaspillage</h3>
      <p>Utilisez uniquement la quantité nécessaire, tout en conservant le reste au congélateur.</p>

      <h3>Conclusion</h3>
      <p>Praticité et gastronomie peuvent parfaitement aller de pair.</p>
    `,
    video: "",
  },

  {
    id: 7,
    title: "Normes Mondiales, Passion Locale",
    description:
      "Des standards internationaux appliqués avec un savoir-faire local à Agadir.",
    date: "20 Nov 2025",
    readTime: "Lecture 4 min",
    category: "Assurance Qualité",
    image: "/rahal01.jpg",
    content: `
      <h2>Des normes internationales strictes</h2>
      <p>Nos installations respectent les standards internationaux de sécurité alimentaire et de qualité.</p>

      <h3>Un savoir-faire local reconnu</h3>
      <p>À Agadir, nos équipes allient passion, expertise et technologies modernes.</p>

      <h3>Du Maroc au monde</h3>
      <p>Nos produits répondent aux exigences des marchés les plus rigoureux.</p>

      <h3>Conclusion</h3>
      <p>ASMAK RAHAL, c’est l’excellence locale au service d’un marché mondial.</p>
    `,
    video: "",
  }
];

export default content;
