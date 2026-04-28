import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Monitor,
  BatteryCharging,
  Plug,
  Camera,
  ClipboardList,
  Wrench,
  Car,
  BadgeEuro,
  ShieldCheck,
  Timer,
  CalendarDays,
  Phone,
  Mail,
  ArrowRight,
  MapPin,
  ChevronDown,
  Recycle,
} from "lucide-react";

interface LocalPageProps {
  city: string;
}

const SPECIALTIES = "iPhone, Samsung Galaxy et Huawei";
const ISSUES = "écrans cassés, batterie, connecteur de charge et caméra";

type CityRecord = {
  title: string;
  description: string;
  canonical: string;
  postalCode?: string;
  geo?: { lat: number; lng: number };
  testimonials: { text: string; author: string }[];
  // Section SEO additionnelle (optionnelle) — renforce le lexique de la ville
  seoSection?: {
    title: string;
    paragraphs: string[];
  };
  // Liens internes vers pages services (optionnel)
  serviceLinks?: { label: string; path: string }[];
};

const cityData: Record<string, CityRecord> = {
  Bordeaux: {
    title: "Réparation iPhone et téléphone à Bordeaux à domicile — Phone Master",
    description:
      "Réparation iPhone et téléphone à Bordeaux à domicile : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Garantie 6 mois, agréé QualiRépar (-25 €). 6j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-bordeaux",
    postalCode: "33000",
    geo: { lat: 44.8378, lng: -0.5792 },
    testimonials: [
      {
        text: "J'ai fait appel à Phone Master pour changer la batterie de mon Samsung à Bordeaux. Intervention rapide à domicile, prix honnête et résultat impeccable.",
        author: "Thomas S., Bordeaux",
      },
      {
        text: "Écran d'iPhone 14 changé en moins d'une heure chez moi à Bordeaux Chartrons. Tarif clair annoncé d'avance, garantie 6 mois, parfait.",
        author: "Léa M., Bordeaux",
      },
    ],
    seoSection: {
      title: "Réparation iPhone et téléphone à Bordeaux : ce que nous proposons",
      paragraphs: [
        "Phone Master est spécialisé en réparation d'iPhone à Bordeaux et dans toute Bordeaux Métropole. Le diagnostic et le déplacement sont gratuits dans tous les quartiers de Bordeaux : centre-ville, Chartrons, Bastide, Saint-Pierre, Saint-Michel, Caudéran, Bacalan, Nansouty, Saint-Genès. Notre cœur de métier reste la réparation iPhone, du modèle iPhone X à l'iPhone 16 Pro Max, mais nous intervenons aussi sur Samsung Galaxy et Huawei.",
        "Les pannes les plus fréquentes que nous traitons à Bordeaux sont : changement d'écran cassé (intervention en 1 h, écran premium équivalent qualité d'origine), remplacement de batterie (en 30 min, batteries neuves haute capacité), réparation du connecteur de charge (Lightning ou USB-C), et réparation caméra. Pour le changement d'écran, le bonus QualiRépar de 25 € est automatiquement déduit de la facture, sans démarche de votre part.",
        "Vous pouvez nous appeler au 06 35 17 57 11 du lundi au samedi, 8h–21h30. Pour les Bordelais, nous proposons souvent un créneau le jour même. Tarif annoncé d'avance, paiement après réparation réussie, sans acompte. Garantie 6 mois pièces et main-d'œuvre sur toutes nos interventions.",
      ],
    },
    serviceLinks: [
      { label: "Changement écran iPhone Bordeaux", path: "/changement-ecran-iphone-bordeaux" },
      { label: "Remplacement batterie iPhone Bordeaux", path: "/remplacement-batterie-iphone-bordeaux" },
      { label: "Réparation iPhone à domicile Bordeaux", path: "/reparation-iphone-domicile-bordeaux" },
      { label: "Bonus QualiRépar à Bordeaux", path: "/bonus-qualirepar-bordeaux" },
    ],
  },
  Talence: {
    title: "Réparation téléphone à Talence — Réparateur smartphone à domicile | Phone Master",
    description:
      "Réparation téléphone à Talence à domicile : iPhone, Samsung, Huawei. Réparateur basé à Talence, écran, batterie, connecteur. Garantie 6 mois, agréé QualiRépar (-25 €). 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-telephone-talence",
    postalCode: "33400",
    geo: { lat: 44.8087, lng: -0.5942 },
    testimonials: [
      {
        text: "Réparation de mon iPhone 13 à domicile à Talence, écran changé en 30 minutes, prix correct et garantie 6 mois, je recommande.",
        author: "Anthony P., Talence",
      },
      {
        text: "Ils sont venus me changer la batterie de mon Galaxy S22 sur le campus de Talence. Hyper réactif, prix honnête.",
        author: "Marie L., Talence",
      },
    ],
    seoSection: {
      title: "Réparation téléphone à Talence : le réparateur le plus proche",
      paragraphs: [
        "Phone Master est basé à Talence. Pour une réparation de téléphone à Talence, c'est l'intervention la plus rapide possible — souvent dans l'heure qui suit votre appel. Nous couvrons tous les quartiers de Talence : centre, Thouars, Médoquine, Université, Peixotto, Forum, Compostelle, Raba, ainsi que le campus universitaire de Talence (Sciences Po, IUT, Université de Bordeaux).",
        "La réparation de téléphone à Talence couvre tous les modèles : iPhone (de l'iPhone X à l'iPhone 16 Pro Max), Samsung Galaxy (S, A, Note, Z Flip / Fold) et Huawei (P, Mate, Nova). Les pannes les plus traitées sont le changement d'écran cassé, le remplacement de batterie, la réparation du connecteur de charge, et la réparation caméra.",
        "Tous les téléphones sont réparés directement à votre domicile à Talence, sans frais de déplacement, en 30 minutes à 1 heure selon la panne. Tarif annoncé à l'avance, pas d'acompte, garantie 6 mois pièces et main-d'œuvre. Pour le changement d'écran de votre téléphone à Talence, nous appliquons automatiquement le bonus QualiRépar de 25 € sur la facture.",
      ],
    },
    serviceLinks: [
      { label: "Changement écran iPhone Talence", path: "/changement-ecran-iphone-talence" },
      { label: "Réparation iPhone à domicile Bordeaux", path: "/reparation-iphone-domicile-bordeaux" },
      { label: "Bonus QualiRépar à Bordeaux", path: "/bonus-qualirepar-bordeaux" },
    ],
  },
  Pessac: {
    title: "Réparateur iPhone Samsung Pessac à domicile — Phone Master",
    description:
      "Réparation iPhone et Samsung à Pessac : remplacement écran, batterie, caméra. Déplacement gratuit, garantie 6 mois, agréé QualiRépar. Disponible 6j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparateur-iphone-pessac",
    postalCode: "33600",
    geo: { lat: 44.8067, lng: -0.6311 },
    testimonials: [
      {
        text: "iPhone 12 Pro tombé sur le carrelage : écran HS. Réparé chez moi à Pessac en 45 minutes. Tarif tenu, garantie 6 mois.",
        author: "Jérôme V., Pessac",
      },
      {
        text: "J'avais besoin d'une batterie pour un Samsung Galaxy A52. Intervention rapide, propre, à domicile à Pessac Bourg. Très pro.",
        author: "Sophia R., Pessac",
      },
    ],
  },
  Bègles: {
    title: "Changement écran téléphone Bègles à domicile — Phone Master",
    description:
      "Changement d'écran et réparation smartphone à Bègles : iPhone, Samsung, Huawei. Intervention rapide à domicile, garantie 6 mois, agréé QualiRépar. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/changement-ecran-telephone-begles",
    postalCode: "33130",
    geo: { lat: 44.8085, lng: -0.5466 },
    testimonials: [
      {
        text: "Écran iPhone 11 changé chez moi à Bègles. RDV pris la veille, intervention nickel, je recommande.",
        author: "Karim B., Bègles",
      },
      {
        text: "Connecteur de charge HS sur mon Samsung S21. Diagnostic gratuit, réparation à domicile à Bègles, sans acompte. Top.",
        author: "Élodie T., Bègles",
      },
    ],
  },
  Mérignac: {
    title: "Réparateur mobile Mérignac à domicile — Phone Master",
    description:
      "Réparation mobile à Mérignac : écran, batterie, connecteur. Technicien certifié, déplacement gratuit, garantie 6 mois, agréé QualiRépar. Disponible 6j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparateur-mobile-merignac",
    postalCode: "33700",
    geo: { lat: 44.8419, lng: -0.6443 },
    testimonials: [
      {
        text: "Réparation écran iPhone 15 à Mérignac centre, en 1h chez moi. Prix correct et garantie 6 mois — service au top.",
        author: "Olivier C., Mérignac",
      },
      {
        text: "Très bon technicien, ponctuel, qui m'a changé la batterie de mon Galaxy S20 chez moi à Mérignac Soleil. Je recommande.",
        author: "Nathalie F., Mérignac",
      },
    ],
  },
  Gradignan: {
    title: "Réparation mobile Gradignan à domicile — Phone Master",
    description:
      "Service de réparation mobile à Gradignan : remplacement écran, batterie, port de charge. Intervention à domicile, garantie 6 mois, agréé QualiRépar. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/service-reparation-mobile-gradignan",
    postalCode: "33170",
    geo: { lat: 44.7717, lng: -0.6157 },
    testimonials: [
      {
        text: "Écran d'iPhone XR changé à domicile à Gradignan. Tarif annoncé tenu, garantie 6 mois, intervention propre. Je recommande.",
        author: "Cyril D., Gradignan",
      },
      {
        text: "Batterie remplacée sur mon Huawei P30 Pro chez moi à Gradignan, en moins de 30 min. Très réactif.",
        author: "Aurélie B., Gradignan",
      },
    ],
  },
  "Villenave-d'Ornon": {
    title: "Réparation écran iPhone Villenave-d'Ornon — Phone Master",
    description:
      "Réparation iPhone et smartphone à Villenave-d'Ornon : écran cassé, batterie, caméra. Technicien à domicile, garantie 6 mois, agréé QualiRépar. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-ecran-iphone-villenave-dornon",
    postalCode: "33140",
    geo: { lat: 44.7783, lng: -0.5658 },
    testimonials: [
      {
        text: "Réparation écran iPhone 13 à Villenave-d'Ornon. Très pro, ponctuel, rapide. Garantie 6 mois respectée.",
        author: "Pauline S., Villenave-d'Ornon",
      },
      {
        text: "Connecteur de charge réparé sur mon Galaxy chez moi. Prix honnête, sans acompte. Merci.",
        author: "Hugo M., Villenave-d'Ornon",
      },
    ],
  },
  Cenon: {
    title: "Réparation smartphone Cenon à domicile — Phone Master",
    description:
      "Technicien réparation smartphone à Cenon : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Déplacement gratuit, garantie 6 mois, agréé QualiRépar. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-cenon",
    postalCode: "33150",
    geo: { lat: 44.8553, lng: -0.5314 },
    testimonials: [
      {
        text: "Écran iPhone 12 changé à Cenon Pont Rouge en moins d'une heure. Prix correct, intervention propre.",
        author: "Mehdi R., Cenon",
      },
      {
        text: "Bon réparateur Samsung à Cenon, est venu chez moi sans frais de déplacement. Garantie 6 mois respectée.",
        author: "Florence A., Cenon",
      },
    ],
  },
  Floirac: {
    title: "Réparation smartphone Floirac à domicile — Phone Master",
    description:
      "Technicien réparation smartphone à Floirac : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Déplacement gratuit, garantie 6 mois, agréé QualiRépar. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-floirac",
    postalCode: "33270",
    geo: { lat: 44.8358, lng: -0.5147 },
    testimonials: [
      {
        text: "Batterie iPhone changée à domicile à Floirac. Réactif, propre, prix correct, garantie 6 mois.",
        author: "Sébastien G., Floirac",
      },
      {
        text: "Réparation rapide à Floirac d'un écran de Galaxy A53. Sans acompte, exactement comme annoncé.",
        author: "Camille H., Floirac",
      },
    ],
  },
  "Le Bouscat": {
    title: "Réparation smartphone Le Bouscat à domicile — Phone Master",
    description:
      "Technicien réparation smartphone au Bouscat : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Déplacement gratuit, garantie 6 mois, agréé QualiRépar. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-le-bouscat",
    postalCode: "33110",
    geo: { lat: 44.8633, lng: -0.6, },
    testimonials: [
      {
        text: "Écran iPhone 14 Pro changé chez moi au Bouscat en 1h. Garantie 6 mois, sans acompte. Top.",
        author: "Charles V., Le Bouscat",
      },
      {
        text: "Très professionnel, intervention propre, bon prix. Je recommande pour Le Bouscat.",
        author: "Inès K., Le Bouscat",
      },
    ],
  },
  "Le Haillan": {
    title: "Réparation smartphone Le Haillan à domicile — Phone Master",
    description:
      "Technicien réparation smartphone au Haillan : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Déplacement gratuit, garantie 6 mois, agréé QualiRépar. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-le-haillan",
    postalCode: "33185",
    geo: { lat: 44.8722, lng: -0.6736 },
    testimonials: [
      {
        text: "Réparation écran Samsung S23 chez moi au Haillan. Réactif, prix annoncé tenu, garantie OK.",
        author: "Yannick L., Le Haillan",
      },
      {
        text: "Service à domicile au Haillan top, ponctuel, propre, je recommande sans hésiter.",
        author: "Émilie D., Le Haillan",
      },
    ],
  },
  Léognan: {
    title: "Réparation smartphone Léognan à domicile — Phone Master",
    description:
      "Réparation smartphone à domicile à Léognan : iPhone, Samsung, Huawei. Garantie 6 mois, déplacement gratuit, agréé QualiRépar. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-leognan",
    postalCode: "33850",
    geo: { lat: 44.7461, lng: -0.6019 },
    testimonials: [
      {
        text: "Réparation à domicile à Léognan, écran iPhone 13 changé en 1h. Très pro et réactif.",
        author: "Alexandre P., Léognan",
      },
      {
        text: "Batterie de mon Galaxy S21 remplacée chez moi à Léognan. Tarif honnête, garantie 6 mois.",
        author: "Béatrice T., Léognan",
      },
    ],
  },
  "la Gironde": {
    title: "Technicien smartphone à domicile en Gironde — Phone Master",
    description:
      "Technicien certifié de réparation smartphone à domicile dans toute la Gironde : iPhone, Samsung, Huawei. Garantie 6 mois, agréé QualiRépar. 6j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/technicien-smartphone-domicile-gironde",
    postalCode: "33000",
    geo: { lat: 44.8378, lng: -0.5792 },
    testimonials: [
      {
        text: "Service à domicile dans toute la Gironde. Réparation rapide et garantie. Très pro.",
        author: "Damien F., Gironde",
      },
      {
        text: "Très bon technicien, intervient même en périphérie. Prix honnêtes, garantie respectée.",
        author: "Manon L., Gironde",
      },
    ],
  },
};

const allCities = [
  { name: "Bordeaux", path: "/reparation-smartphone-bordeaux" },
  { name: "Talence", path: "/reparation-telephone-talence" },
  { name: "Pessac", path: "/reparateur-iphone-pessac" },
  { name: "Bègles", path: "/changement-ecran-telephone-begles" },
  { name: "Mérignac", path: "/reparateur-mobile-merignac" },
  { name: "Gradignan", path: "/service-reparation-mobile-gradignan" },
  { name: "Villenave-d'Ornon", path: "/reparation-ecran-iphone-villenave-dornon" },
  { name: "Cenon", path: "/reparation-smartphone-cenon" },
  { name: "Floirac", path: "/reparation-smartphone-floirac" },
  { name: "Le Bouscat", path: "/reparation-smartphone-le-bouscat" },
  { name: "Le Haillan", path: "/reparation-smartphone-le-haillan" },
];

const services = [
  { icon: Monitor, label: "Changement d'écran cassé" },
  { icon: BatteryCharging, label: "Remplacement de batterie" },
  { icon: Plug, label: "Réparation connecteur de charge" },
  { icon: Camera, label: "Réparation caméra" },
  { icon: ClipboardList, label: "Diagnostic gratuit & devis clair" },
];

const reasons = [
  { icon: Wrench, label: "Technicien certifié", desc: "Pièces de qualité premium, 10 ans d'expérience" },
  { icon: Car, label: "Déplacement gratuit", desc: "On vient chez vous, sans supplément" },
  { icon: BadgeEuro, label: "Pas d'acompte", desc: "Vous payez après réparation réussie" },
  { icon: ShieldCheck, label: "Garantie 6 mois", desc: "Pièces et main d'œuvre" },
  { icon: Timer, label: "30 min à 1h", desc: "Réparation rapide sur place" },
  { icon: CalendarDays, label: "Disponible 6j/7", desc: "Lun–Sam · 8h – 21h30" },
];

const faqs = (city: string) => [
  {
    q: `Combien coûte une réparation d'écran à ${city} ?`,
    a: "Le prix varie selon le modèle : à partir de 79€ pour un iPhone 11, 109€ pour un iPhone 13, 129€ pour un iPhone 14, 199€ pour un iPhone 15. Le bonus QualiRépar de 25 € est déduit automatiquement de la facture. Contactez-nous pour un devis gratuit et précis sur votre modèle.",
  },
  {
    q: `Combien de temps prend une réparation à domicile à ${city} ?`,
    a: `La plupart des réparations à ${city} sont effectuées en 30 minutes à 1 heure directement chez vous, en une seule visite.`,
  },
  {
    q: `Vous déplacez-vous vraiment à ${city} gratuitement ?`,
    a: `Oui, le déplacement est totalement gratuit à ${city} et dans toute Bordeaux Métropole. Vous ne payez que la réparation, garantie 6 mois pièces et main d'œuvre. Aucun acompte demandé.`,
  },
  {
    q: `Quelles marques de smartphones réparez-vous à ${city} ?`,
    a: "Nous intervenons principalement sur iPhone (toutes générations, du iPhone X au iPhone 16 Pro Max), Samsung Galaxy (S, A, Note, Z Flip / Fold) et Huawei (P, Mate, Nova). Pour les autres marques, contactez-nous pour vérifier la disponibilité des pièces.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const slug = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/'/g, "").replace(/\s+/g, "-");

const LocalPage: React.FC<LocalPageProps> = ({ city }) => {
  const data: CityRecord =
    cityData[city] ||
    {
      title: `Réparation smartphone ${city} à domicile — Phone Master`,
      description: `Technicien certifié en réparation smartphone à ${city} : écran cassé, batterie, connecteur, intervention rapide à domicile. Devis gratuit. Garantie 6 mois.`,
      canonical: `https://www.phone-master.fr/reparation-smartphone-${slug(city)}`,
      postalCode: "33000",
      geo: { lat: 44.8378, lng: -0.5792 },
      testimonials: [],
    };

  const nearbyCities = allCities.filter((c) => c.name !== city).slice(0, 5);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  // ── JSON-LD : LocalBusiness localisé ville ──────────────────
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${data.canonical}#localbusiness`,
    name: `Phone Master — Réparation smartphone à ${city}`,
    image: "https://www.phone-master.fr/assets/logos/og-cover.jpg",
    url: data.canonical,
    telephone: "+33635175711",
    email: "phone.master.gironde@gmail.com",
    priceRange: "€€",
    description: `Réparation smartphone à domicile à ${city} — iPhone, Samsung, Huawei. Garantie 6 mois, sans acompte, agréé QualiRépar.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      postalCode: data.postalCode,
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: data.geo
      ? { "@type": "GeoCoordinates", latitude: data.geo.lat, longitude: data.geo.lng }
      : undefined,
    areaServed: { "@type": "City", name: city },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "08:00",
      closes: "21:30",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Réparations smartphone à ${city}`,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.label, areaServed: city },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: data.testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: t.author },
      reviewBody: t.text,
    })),
  };

  // ── JSON-LD : FAQPage (doit refléter le visible) ──
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs(city).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // ── JSON-LD : BreadcrumbList ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.phone-master.fr/" },
      { "@type": "ListItem", position: 2, name: "Zones desservies", item: "https://www.phone-master.fr/zones-desservies" },
      { "@type": "ListItem", position: 3, name: city, item: data.canonical },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={data.canonical} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Phone Master" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={data.canonical} />
        <meta property="og:image" content="https://www.phone-master.fr/assets/logos/og-cover.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content="https://www.phone-master.fr/assets/logos/og-cover.jpg" />

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="bg-white min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0b6666]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          </div>
          <div className="max-w-4xl mx-auto relative">
            {/* Fil d'Ariane visible (matche BreadcrumbList) */}
            <nav aria-label="breadcrumb" className="text-xs text-gray-400 mb-4">
              <Link to="/" className="hover:text-gray-700">Accueil</Link>
              <span className="mx-2">›</span>
              <Link to="/zones-desservies" className="hover:text-gray-700">Zones desservies</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">{city}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[#0b6666] text-sm font-medium mb-6 border border-[#0b6666]/15"
                style={{ background: "rgba(11,102,102,0.07)" }}
              >
                <MapPin className="w-3.5 h-3.5" />
                Bordeaux Métropole
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Réparation téléphone<br />
                <span className="text-[#0b6666]">à {city}</span>
              </h1>

              <p className="text-lg text-gray-500 max-w-xl mb-8">
                Technicien à domicile, spécialisé{" "}
                <strong className="text-gray-700">{SPECIALTIES}</strong>.
                Intervention pour{" "}
                <strong className="text-gray-700">{ISSUES}</strong>.
                Agréé <strong className="text-gray-700">QualiRépar</strong> — bonus 25 € déduit
                automatiquement.
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="tel:0635175711"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-gray-950 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-[0_2px_12px_rgba(0,0,0,0.18)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.24)] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  06 35 17 57 11
                </motion.a>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/repair"
                    className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                  >
                    Prendre rendez-vous
                    <ArrowRight className="w-4 h-4 opacity-60" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION SEO ÉTENDUE (pour les villes prioritaires) ── */}
        {data.seoSection && (
          <section className="py-14 px-4 bg-white border-b border-gray-100">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={container}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-5 tracking-tight">
                  {data.seoSection.title}
                </motion.h2>
                {data.seoSection.paragraphs.map((p, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-gray-500 leading-relaxed text-[0.95rem] mb-4 last:mb-0"
                  >
                    {p}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* ── SERVICES ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-2">
                Services de réparation à {city}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 mb-8">
                Toutes les réparations effectuées sur place, en une seule visite.
              </motion.p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(({ icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(11,102,102,0.08)" }}
                    >
                      <Icon className="w-5 h-5 text-[#0b6666]" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── QUALIRÉPAR ── */}
        <section className="py-12 px-4 bg-[#0b6666] text-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide text-white/70 font-semibold mb-1">
                  Bonus écologique de l'État
                </p>
                <h2 className="text-xl font-bold mb-1">
                  Bonus QualiRépar de 25 € à {city}
                </h2>
                <p className="text-white/85 text-sm leading-relaxed">
                  Phone Master est <strong>agréé QualiRépar</strong>. Le bonus de 25 € est
                  déduit automatiquement de votre facture pour le changement d'écran de votre
                  smartphone, sans aucune démarche de votre part.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── POURQUOI NOUS ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-2">
                Pourquoi choisir Phone Master à {city} ?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 mb-8">
                Un service de confiance, transparent et rapide.
              </motion.p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {reasons.map(({ icon: Icon, label, desc }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(11,102,102,0.08)" }}
                    >
                      <Icon className="w-4 h-4 text-[#0b6666]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TÉMOIGNAGES ── */}
        {data.testimonials.length > 0 && (
          <section className="py-14 px-4 bg-gray-950">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
                className="grid md:grid-cols-2 gap-5"
              >
                {data.testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6"
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <svg key={idx} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed mb-3">"{t.text}"</p>
                    <p className="text-xs text-gray-500 font-medium">— {t.author}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-8">
                Questions fréquentes — Réparation à {city}
              </motion.h2>

              <div className="flex flex-col gap-3">
                {faqs(city).map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="border border-gray-200 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PAGES SERVICES SPÉCIFIQUES (si présentes) ── */}
        {data.serviceLinks && data.serviceLinks.length > 0 && (
          <section className="py-14 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
              >
                <motion.h2 variants={fadeUp} className="text-xl font-bold text-gray-900 mb-2">
                  Réparations spécifiques à {city}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-500 text-sm mb-6">
                  Pages dédiées à chaque type d'intervention pour plus de détails et tarifs.
                </motion.p>
                <div className="flex flex-wrap gap-3">
                  {data.serviceLinks.map((s) => (
                    <motion.div key={s.path} variants={fadeUp}>
                      <Link
                        to={s.path}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0b6666]/[0.06] border border-[#0b6666]/15 text-sm font-medium text-[#0b6666] hover:bg-[#0b6666]/[0.1] transition-colors"
                      >
                        {s.label}
                        <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ── VILLES PROCHES ── */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-xl font-bold text-gray-900 mb-2">
                Zones desservies autour de {city}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 text-sm mb-6">
                Intervention possible sur toute la commune et les communes voisines de Bordeaux Métropole.
              </motion.p>
              <div className="flex flex-wrap gap-3">
                {nearbyCities.map((c) => (
                  <motion.div key={c.name} variants={fadeUp}>
                    <Link
                      to={c.path}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#0b6666] hover:text-[#0b6666] transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 opacity-50" />
                      Réparation {c.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={fadeUp}>
                  <Link
                    to="/zones-desservies"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-medium text-[#0b6666] hover:border-[#0b6666] transition-colors"
                  >
                    Voir toutes les zones
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-16 px-4 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-950 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div>
                <p className="text-white text-xl font-bold mb-1">
                  Besoin d'un réparateur à {city} ?
                </p>
                <p className="text-gray-400 text-sm">
                  Disponible 6j/7 · Devis gratuit · Déplacement offert · Sans acompte · Bonus QualiRépar 25 €
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href="tel:0635175711"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Appeler
                </a>
                <a
                  href="mailto:phone.master.gironde@gmail.com"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/15 transition-colors border border-white/10"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default LocalPage;
