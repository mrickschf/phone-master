import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Smartphone,
  BatteryCharging,
  Home as HomeIcon,
  Recycle,
  ShieldCheck,
  Car,
  BadgeEuro,
  Timer,
  CalendarDays,
  Phone,
  Mail,
  ArrowRight,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

// ──────────────────────────────────────────────────────────
//  TYPES
// ──────────────────────────────────────────────────────────

type PriceRow = { model: string; price: string; promoPrice?: string };

type ServiceCityConfig = {
  service: string;
  serviceSlug: string;
  city: string;
  citySlug: string;
  postalCode: string;
  geo: { lat: number; lng: number };
  canonical: string;
  title: string;
  description: string;
  h1Line1: string;
  h1Line2: string;
  intro: string;
  icon: LucideIcon;
  // Section contenu
  benefitsTitle: string;
  benefits: { title: string; desc: string }[];
  // Prix (optionnel — pour écran / batterie)
  pricingTitle?: string;
  pricingNote?: string;
  pricing?: PriceRow[];
  // Étapes
  stepsTitle: string;
  steps: { title: string; desc: string }[];
  // FAQ
  faqs: { q: string; a: string }[];
  // Témoignages
  testimonials: { text: string; author: string }[];
  // Service Schema
  serviceName: string;
  serviceType: string;
  // Cross-linking
  relatedServices: { label: string; path: string }[];
  relatedCities: { label: string; path: string }[];
};

// ──────────────────────────────────────────────────────────
//  FRAGMENTS RÉUTILISABLES
// ──────────────────────────────────────────────────────────

const PRICE_IPHONE_ECRAN: PriceRow[] = [
  { model: "iPhone 11", price: "99 €", promoPrice: "74 €" },
  { model: "iPhone 12 / 12 Pro", price: "119 €", promoPrice: "94 €" },
  { model: "iPhone 13 / 13 Pro", price: "129 €", promoPrice: "104 €" },
  { model: "iPhone 14 / 14 Pro", price: "149 €", promoPrice: "124 €" },
  { model: "iPhone 15 / 15 Pro", price: "199 €", promoPrice: "174 €" },
  { model: "iPhone 16 / 16 Pro", price: "229 €", promoPrice: "204 €" },
];

const PRICE_IPHONE_BATTERIE: PriceRow[] = [
  { model: "iPhone X / XR / XS", price: "59 €" },
  { model: "iPhone 11 / 11 Pro", price: "69 €" },
  { model: "iPhone 12 / 13", price: "79 €" },
  { model: "iPhone 14 / 14 Pro", price: "89 €" },
  { model: "iPhone 15 / 15 Pro", price: "99 €" },
  { model: "iPhone 16 / 16 Pro", price: "109 €" },
];

const reasons = [
  { icon: Wrench, label: "Technicien certifié", desc: "10 ans d'expérience, pièces premium." },
  { icon: Car, label: "Déplacement gratuit", desc: "On vient à vous, sans frais." },
  { icon: BadgeEuro, label: "Pas d'acompte", desc: "Paiement après réparation réussie." },
  { icon: ShieldCheck, label: "Garantie 6 mois", desc: "Pièces et main-d'œuvre." },
  { icon: Timer, label: "30 min à 1h", desc: "Réparation sur place en une visite." },
  { icon: CalendarDays, label: "Disponible 6j/7", desc: "Lun–Sam · 8h – 21h30." },
];

// ──────────────────────────────────────────────────────────
//  CONFIGS PAR PAGE SERVICE × VILLE
// ──────────────────────────────────────────────────────────

export const serviceConfigs: Record<string, ServiceCityConfig> = {

  // ─── 1. CHANGEMENT ÉCRAN IPHONE — BORDEAUX ───────────────────
  "ecran-iphone-bordeaux": {
    service: "Changement écran iPhone",
    serviceSlug: "changement-ecran-iphone",
    city: "Bordeaux",
    citySlug: "bordeaux",
    postalCode: "33000",
    geo: { lat: 44.8378, lng: -0.5792 },
    canonical: "https://www.phone-master.fr/changement-ecran-iphone-bordeaux",
    title: "Changement d'écran iPhone à Bordeaux — Phone Master",
    description:
      "Changement d'écran iPhone à Bordeaux à domicile. Tous modèles iPhone X à 16 Pro Max. Garantie 6 mois, sans acompte, agréé QualiRépar (-25 €). Réparation en 1 h — 06 35 17 57 11.",
    h1Line1: "Changement d'écran iPhone",
    h1Line2: "à Bordeaux",
    intro:
      "Écran iPhone cassé, fissuré, ou tactile qui ne répond plus à Bordeaux ? Phone Master se déplace chez vous en moins d'une heure. Réparation effectuée sur place en 30 minutes à 1 heure, garantie 6 mois pièces et main-d'œuvre. Bonus QualiRépar de 25 € déduit automatiquement.",
    icon: Smartphone,
    benefitsTitle: "Pourquoi changer son écran d'iPhone à Bordeaux avec Phone Master",
    benefits: [
      { title: "Pièces de qualité premium", desc: "Écrans LCD ou OLED testés, équivalents qualité d'origine. Pas de copies bas de gamme." },
      { title: "Intervention à domicile partout dans Bordeaux", desc: "Centre, Chartrons, Bastide, Saint-Pierre, Saint-Michel, Caudéran, Bacalan, Nansouty. On se déplace gratuitement." },
      { title: "Bonus QualiRépar appliqué", desc: "Phone Master est officiellement agréé QualiRépar : 25 € déduits automatiquement de la facture, sans dossier à remplir." },
      { title: "Réparation en une visite", desc: "Tout est fait sur place en 30 minutes à 1 heure. Pas besoin de laisser votre téléphone." },
    ],
    pricingTitle: "Prix changement d'écran iPhone à Bordeaux",
    pricingNote: "Prix indiqués bonus QualiRépar de 25 € déjà déduit (colonne « Avec QualiRépar »). Devis gratuit sur les autres modèles.",
    pricing: PRICE_IPHONE_ECRAN,
    stepsTitle: "Comment se passe l'intervention à Bordeaux",
    steps: [
      { title: "1. Appel ou prise de RDV", desc: "Vous m'appelez au 06 35 17 57 11 ou prenez RDV en ligne. On fixe un créneau le jour même ou le lendemain." },
      { title: "2. Déplacement gratuit chez vous", desc: "Je viens à votre domicile à Bordeaux ou sur votre lieu de travail, sans frais ni acompte." },
      { title: "3. Diagnostic gratuit", desc: "Je vérifie l'état de l'écran et de la dalle tactile, vous confirme le tarif exact avant de démonter quoi que ce soit." },
      { title: "4. Remplacement de l'écran", desc: "Démontage, remplacement de la vitre + dalle tactile, recalibrage, tests. Durée : 30 min à 1 h selon le modèle." },
      { title: "5. Paiement après réussite", desc: "Vous payez seulement si la réparation fonctionne. Carte, espèces ou virement. Garantie 6 mois activée." },
    ],
    faqs: [
      {
        q: "Combien coûte un changement d'écran iPhone à Bordeaux ?",
        a: "Le prix dépend du modèle : 99 € pour un iPhone 11 (74 € après bonus QualiRépar), 129 € pour un iPhone 13 (104 €), 149 € pour un iPhone 14 (124 €), 199 € pour un iPhone 15 (174 €). Devis gratuit pour les autres modèles.",
      },
      {
        q: "Combien de temps prend un changement d'écran iPhone ?",
        a: "Entre 30 minutes (iPhone X / XR / 11) et 1 heure (iPhone 14, 15, 16). L'intervention est faite chez vous en une seule visite, vous repartez avec un téléphone fonctionnel.",
      },
      {
        q: "Qu'est-ce que le bonus QualiRépar de 25 € ?",
        a: "Le bonus QualiRépar est une aide de l'État pour favoriser la réparation des smartphones. Phone Master est agréé QualiRépar : nous déduisons automatiquement 25 € de votre facture pour le changement d'écran d'un smartphone, sans aucune démarche de votre part.",
      },
      {
        q: "Mon iPhone est encore sous garantie Apple, vais-je la perdre ?",
        a: "Oui, faire réparer un iPhone hors AppleCare invalide la garantie constructeur Apple. En contrepartie, nous appliquons une garantie de 6 mois sur les pièces et la main-d'œuvre, et notre tarif est généralement 30 à 50 % moins cher qu'un Apple Store.",
      },
      {
        q: "Quelle est la différence entre un écran reconditionné et un écran d'origine ?",
        a: "Nous utilisons des écrans premium équivalents qualité d'origine (LCD pour les modèles antérieurs à l'iPhone X, OLED ensuite). La qualité d'affichage, la luminosité et le tactile sont identiques à un écran neuf Apple, à un coût significativement plus bas.",
      },
    ],
    testimonials: [
      {
        text: "Écran d'iPhone 14 changé chez moi à Bordeaux Chartrons en moins d'une heure. Tarif annoncé tenu, garantie 6 mois, parfait.",
        author: "Léa M., Bordeaux",
      },
      {
        text: "Mon iPhone 13 Pro est tombé sur le trottoir devant la place Pey-Berland. Phone Master est venu le soir même, écran nickel, prix correct.",
        author: "Julien R., Bordeaux",
      },
    ],
    serviceName: "Changement d'écran iPhone",
    serviceType: "Mobile phone repair service",
    relatedServices: [
      { label: "Remplacement batterie iPhone à Bordeaux", path: "/remplacement-batterie-iphone-bordeaux" },
      { label: "Réparation iPhone à domicile Bordeaux", path: "/reparation-iphone-domicile-bordeaux" },
      { label: "Bonus QualiRépar à Bordeaux", path: "/bonus-qualirepar-bordeaux" },
    ],
    relatedCities: [
      { label: "Changement écran iPhone Talence", path: "/changement-ecran-iphone-talence" },
      { label: "Réparation iPhone Pessac", path: "/reparateur-iphone-pessac" },
      { label: "Réparation Mérignac", path: "/reparateur-mobile-merignac" },
      { label: "Changement écran Bègles", path: "/changement-ecran-telephone-begles" },
    ],
  },

  // ─── 2. CHANGEMENT ÉCRAN IPHONE — TALENCE ────────────────────
  "ecran-iphone-talence": {
    service: "Changement écran iPhone",
    serviceSlug: "changement-ecran-iphone",
    city: "Talence",
    citySlug: "talence",
    postalCode: "33400",
    geo: { lat: 44.8087, lng: -0.5942 },
    canonical: "https://www.phone-master.fr/changement-ecran-iphone-talence",
    title: "Changement d'écran iPhone à Talence — Phone Master",
    description:
      "Changement d'écran iPhone à Talence à domicile : iPhone 11 à 16 Pro Max. Réparation rapide en 1 h, garantie 6 mois, agréé QualiRépar (-25 €). Devis gratuit — 06 35 17 57 11.",
    h1Line1: "Changement d'écran iPhone",
    h1Line2: "à Talence",
    intro:
      "Phone Master est basé à Talence. Pour un changement d'écran d'iPhone à Talence, c'est l'intervention la plus rapide possible : RDV souvent dans l'heure, réparation chez vous en 30 min à 1 h, garantie 6 mois, bonus QualiRépar de 25 € déduit automatiquement.",
    icon: Smartphone,
    benefitsTitle: "Le réparateur iPhone le plus proche à Talence",
    benefits: [
      { title: "Réparateur basé à Talence", desc: "Phone Master a son atelier à Talence. Pour les habitants de la commune, c'est l'intervention la plus rapide possible — souvent dans l'heure qui suit votre appel." },
      { title: "Tous les quartiers couverts", desc: "Centre, Thouars, Médoquine, Université, Peixotto, Forum, Compostelle, Raba. Déplacement gratuit dans toute la commune." },
      { title: "Pièces premium et garantie 6 mois", desc: "Écrans LCD ou OLED testés équivalents qualité d'origine. 6 mois de garantie pièces et main-d'œuvre." },
      { title: "Bonus QualiRépar appliqué automatiquement", desc: "25 € déduits de la facture pour tout changement d'écran de smartphone. Aucune démarche de votre côté." },
    ],
    pricingTitle: "Prix changement d'écran iPhone à Talence",
    pricingNote: "Prix indiqués bonus QualiRépar de 25 € déjà déduit (colonne « Avec QualiRépar »). Devis gratuit sur les autres modèles.",
    pricing: PRICE_IPHONE_ECRAN,
    stepsTitle: "Comment se passe l'intervention à Talence",
    steps: [
      { title: "1. Appel ou prise de RDV", desc: "Vous m'appelez au 06 35 17 57 11. Pour Talence, créneau possible dans l'heure selon disponibilité." },
      { title: "2. Déplacement à votre domicile", desc: "Je viens chez vous à Talence ou sur votre lieu de travail. Aucun frais de déplacement." },
      { title: "3. Diagnostic et tarif confirmé", desc: "Vérification de l'écran, du tactile, de la dalle. Je vous donne le tarif final avant de commencer." },
      { title: "4. Remplacement sur place", desc: "Démontage et remplacement de l'écran et de la dalle tactile en 30 minutes à 1 heure." },
      { title: "5. Paiement et garantie", desc: "Vous payez à la fin, uniquement si la réparation est réussie. Garantie 6 mois activée." },
    ],
    faqs: [
      {
        q: "Combien coûte un changement d'écran iPhone à Talence ?",
        a: "Le prix dépend du modèle : 99 € pour un iPhone 11 (74 € après bonus QualiRépar), 129 € pour un iPhone 13 (104 €), 149 € pour un iPhone 14 (124 €), 199 € pour un iPhone 15 (174 €). Devis gratuit pour les autres modèles.",
      },
      {
        q: "Combien de temps mettez-vous pour venir à Talence ?",
        a: "Phone Master est basé à Talence. Pour les habitants de la commune, je peux souvent intervenir dans l'heure qui suit l'appel. Sinon, créneau le jour même ou le lendemain matin selon disponibilité.",
      },
      {
        q: "Vous intervenez aussi sur le campus universitaire de Talence ?",
        a: "Oui, je me déplace régulièrement sur le campus de Talence (Sciences Po, IUT, Université de Bordeaux). Idéal entre deux cours pour une réparation rapide.",
      },
      {
        q: "Quels modèles d'iPhone réparez-vous à Talence ?",
        a: "Tous les modèles, de l'iPhone X à l'iPhone 16 Pro Max. Pour les modèles plus anciens (iPhone 7, 8, SE), contactez-moi pour vérifier la disponibilité des pièces.",
      },
      {
        q: "Qu'est-ce que le bonus QualiRépar à 25 € ?",
        a: "C'est une aide de l'État pour favoriser la réparation des smartphones. Phone Master est agréé QualiRépar : je déduis automatiquement 25 € de votre facture pour le changement d'écran, sans aucune démarche de votre part.",
      },
    ],
    testimonials: [
      {
        text: "Réparateur à Talence qui se déplace vraiment vite. iPhone 13 réparé chez moi en 30 minutes, garantie 6 mois, je recommande.",
        author: "Anthony P., Talence",
      },
      {
        text: "Étudiante au campus de Talence, écran d'iPhone 11 fissuré pendant un cours. Phone Master m'a réparé entre deux amphis. Top.",
        author: "Marie L., Talence",
      },
    ],
    serviceName: "Changement d'écran iPhone",
    serviceType: "Mobile phone repair service",
    relatedServices: [
      { label: "Réparation téléphone Talence", path: "/reparation-telephone-talence" },
      { label: "Changement écran iPhone Bordeaux", path: "/changement-ecran-iphone-bordeaux" },
      { label: "Bonus QualiRépar à Bordeaux", path: "/bonus-qualirepar-bordeaux" },
    ],
    relatedCities: [
      { label: "Réparation iPhone Pessac", path: "/reparateur-iphone-pessac" },
      { label: "Changement écran Bègles", path: "/changement-ecran-telephone-begles" },
      { label: "Réparation Gradignan", path: "/service-reparation-mobile-gradignan" },
      { label: "Réparation Villenave-d'Ornon", path: "/reparation-ecran-iphone-villenave-dornon" },
    ],
  },

  // ─── 3. REMPLACEMENT BATTERIE IPHONE — BORDEAUX ──────────────
  "batterie-iphone-bordeaux": {
    service: "Remplacement batterie iPhone",
    serviceSlug: "remplacement-batterie-iphone",
    city: "Bordeaux",
    citySlug: "bordeaux",
    postalCode: "33000",
    geo: { lat: 44.8378, lng: -0.5792 },
    canonical: "https://www.phone-master.fr/remplacement-batterie-iphone-bordeaux",
    title: "Remplacement de batterie iPhone à Bordeaux — Phone Master",
    description:
      "Remplacement de batterie iPhone à Bordeaux à domicile en 30 minutes. Tous modèles iPhone X à 16 Pro Max. Garantie 6 mois, sans acompte, déplacement gratuit. Devis — 06 35 17 57 11.",
    h1Line1: "Remplacement de batterie iPhone",
    h1Line2: "à Bordeaux",
    intro:
      "Votre iPhone se décharge en quelques heures, s'éteint à froid, gonfle, ou affiche un message « entretien batterie » ? Phone Master remplace votre batterie iPhone à domicile à Bordeaux en 30 minutes, avec une batterie neuve premium, garantie 6 mois.",
    icon: BatteryCharging,
    benefitsTitle: "Pourquoi remplacer la batterie de son iPhone à Bordeaux",
    benefits: [
      { title: "Quand changer la batterie", desc: "Si votre iPhone s'éteint à 30 % ou moins, ne tient plus une journée, ralentit (Apple bride les iPhone à batterie usée), ou affiche un avertissement « entretien » dans Réglages > Batterie." },
      { title: "Batteries neuves de qualité", desc: "Cellules lithium-ion premium, capacité supérieure ou égale à l'origine. Pas de batteries de récupération." },
      { title: "Intervention rapide à domicile", desc: "Je me déplace à Bordeaux en 30 min à 1h sur RDV. Remplacement en 30 minutes sur place. Vous repartez avec un téléphone comme neuf." },
      { title: "Économique vs Apple Store", desc: "Le remplacement en Apple Store coûte 95 à 119 €, sans déplacement. Chez Phone Master, c'est entre 59 et 109 € à domicile, garantie 6 mois." },
    ],
    pricingTitle: "Prix remplacement batterie iPhone à Bordeaux",
    pricingNote: "Tarifs tout compris (pièce + main-d'œuvre + déplacement). Aucun acompte, paiement après réparation.",
    pricing: PRICE_IPHONE_BATTERIE,
    stepsTitle: "Comment se passe le remplacement de batterie",
    steps: [
      { title: "1. Diagnostic au téléphone", desc: "Décrivez les symptômes au 06 35 17 57 11. Je confirme que c'est bien la batterie qui est en cause et je vous donne un tarif précis." },
      { title: "2. RDV à votre domicile à Bordeaux", desc: "Je me déplace chez vous gratuitement, généralement le jour même ou le lendemain selon créneau." },
      { title: "3. Démontage et remplacement", desc: "Démontage de l'iPhone, retrait de l'ancienne batterie, pose de la batterie neuve, reconditionnement étanche." },
      { title: "4. Tests et calibrage", desc: "Vérification de la charge, des cycles, du capteur de proximité. Calibrage de la nouvelle batterie." },
      { title: "5. Paiement et garantie 6 mois", desc: "Paiement uniquement après tests OK. Garantie 6 mois pièces et main-d'œuvre activée." },
    ],
    faqs: [
      {
        q: "Combien coûte un remplacement de batterie iPhone à Bordeaux ?",
        a: "Entre 59 € (iPhone X / XR / XS) et 109 € (iPhone 16). Tarif tout compris (pièce + main-d'œuvre + déplacement à Bordeaux). Pas d'acompte, paiement après réparation.",
      },
      {
        q: "Quels signes montrent qu'il faut changer la batterie ?",
        a: "Extinctions à 20-30 % de charge restante, autonomie chute brutalement, iPhone qui ralentit (Apple bride volontairement les iPhone à batterie usée), batterie qui gonfle (urgent), ou avertissement dans Réglages > Batterie > État de la batterie.",
      },
      {
        q: "Combien de temps prend l'intervention ?",
        a: "30 minutes en moyenne pour un remplacement de batterie iPhone, à domicile à Bordeaux. Vous récupérez votre iPhone fonctionnel immédiatement.",
      },
      {
        q: "La batterie est-elle d'origine Apple ?",
        a: "Non, ce sont des batteries premium de fabricants tiers, équivalentes en qualité (capacité, cycles, sécurité). Apple ne vend pas ses batteries d'origine en pièces détachées hors AppleCare. Je n'utilise jamais de batteries de récupération.",
      },
      {
        q: "Mon iPhone affichera-t-il toujours « Pièce inconnue » après remplacement ?",
        a: "À partir de l'iPhone 11, Apple affiche un avertissement « Pièce inconnue » sur les batteries non-Apple. Cela n'affecte ni le fonctionnement, ni l'autonomie. C'est purement cosmétique. Sur les iPhone antérieurs, aucun message n'apparaît.",
      },
    ],
    testimonials: [
      {
        text: "Batterie iPhone 11 changée à domicile à Bordeaux en 30 min. Tarif moitié moins cher qu'Apple, garantie 6 mois, super pro.",
        author: "Thomas S., Bordeaux",
      },
      {
        text: "Mon iPhone 12 s'éteignait à 40 %. Phone Master a remplacé la batterie chez moi à Caudéran en 25 minutes. Comme neuf.",
        author: "Sophie B., Bordeaux",
      },
    ],
    serviceName: "Remplacement batterie iPhone",
    serviceType: "Mobile phone repair service",
    relatedServices: [
      { label: "Changement écran iPhone Bordeaux", path: "/changement-ecran-iphone-bordeaux" },
      { label: "Réparation iPhone à domicile Bordeaux", path: "/reparation-iphone-domicile-bordeaux" },
      { label: "Bonus QualiRépar à Bordeaux", path: "/bonus-qualirepar-bordeaux" },
    ],
    relatedCities: [
      { label: "Réparation téléphone Talence", path: "/reparation-telephone-talence" },
      { label: "Réparation iPhone Pessac", path: "/reparateur-iphone-pessac" },
      { label: "Réparation Mérignac", path: "/reparateur-mobile-merignac" },
      { label: "Changement écran Bègles", path: "/changement-ecran-telephone-begles" },
    ],
  },

  // ─── 4. RÉPARATION IPHONE À DOMICILE — BORDEAUX ──────────────
  "iphone-domicile-bordeaux": {
    service: "Réparation iPhone à domicile",
    serviceSlug: "reparation-iphone-domicile",
    city: "Bordeaux",
    citySlug: "bordeaux",
    postalCode: "33000",
    geo: { lat: 44.8378, lng: -0.5792 },
    canonical: "https://www.phone-master.fr/reparation-iphone-domicile-bordeaux",
    title: "Réparation iPhone à domicile à Bordeaux — Phone Master",
    description:
      "Réparation iPhone à domicile à Bordeaux : écran, batterie, connecteur, caméra. Technicien certifié, déplacement gratuit, garantie 6 mois, agréé QualiRépar. 6j/7 — 06 35 17 57 11.",
    h1Line1: "Réparation iPhone",
    h1Line2: "à domicile à Bordeaux",
    intro:
      "Vous n'avez ni le temps ni l'envie de vous déplacer en boutique pour réparer votre iPhone ? Phone Master vient à vous, à Bordeaux, sans frais de déplacement. Réparation effectuée chez vous en 30 minutes à 1 heure : écran cassé, batterie, connecteur de charge, caméra. Garantie 6 mois.",
    icon: HomeIcon,
    benefitsTitle: "L'avantage du dépannage iPhone à domicile à Bordeaux",
    benefits: [
      { title: "Vous ne vous déplacez pas", desc: "Je viens chez vous ou sur votre lieu de travail dans Bordeaux et toute la métropole. Vous gagnez 1 à 2 heures par rapport à un déplacement en boutique." },
      { title: "Pas d'acompte, pas de dépôt", desc: "Vous gardez votre iPhone, je le répare devant vous. Pas de risque de vol, de perte, ou d'échange. Vous voyez chaque étape." },
      { title: "Tarif compétitif", desc: "30 à 50 % moins cher qu'Apple Store, et déplacement gratuit. Sans surcoût « domicile »." },
      { title: "Réparation en une visite", desc: "Vous m'appelez le matin, je passe en fin de journée. Vous récupérez un iPhone fonctionnel le soir même, garanti 6 mois." },
    ],
    stepsTitle: "Comment fonctionne le dépannage iPhone à domicile",
    steps: [
      { title: "1. Vous m'appelez au 06 35 17 57 11", desc: "Décrivez la panne (écran, batterie, charge, caméra...). Je vous donne un tarif clair, et un créneau." },
      { title: "2. Je viens chez vous à Bordeaux", desc: "Pas de frais de déplacement. RDV souvent le jour même ou lendemain. Plages 8h–21h30 du Lun au Sam." },
      { title: "3. Diagnostic gratuit sur place", desc: "Je vérifie ce qui est en panne, je confirme le tarif final avant toute intervention. Si je ne peux pas réparer, vous ne payez rien." },
      { title: "4. Réparation devant vous", desc: "Je travaille à la table de votre cuisine ou sur votre bureau. 30 min pour une batterie, 1 h pour un écran. Vous voyez tout." },
      { title: "5. Tests et paiement", desc: "Tests complets devant vous, puis paiement (CB, espèces, virement). Garantie 6 mois activée immédiatement." },
    ],
    faqs: [
      {
        q: "Le déplacement à domicile est-il vraiment gratuit à Bordeaux ?",
        a: "Oui, totalement gratuit dans Bordeaux et toute Bordeaux Métropole. Vous payez uniquement la réparation, au tarif annoncé.",
      },
      {
        q: "Quels iPhone réparez-vous à domicile à Bordeaux ?",
        a: "Tous les modèles iPhone, de l'iPhone X à l'iPhone 16 Pro Max. Pour iPhone 7, 8, SE, contactez-moi pour vérifier la disponibilité des pièces.",
      },
      {
        q: "Quelles pannes prenez-vous en charge à domicile ?",
        a: "Changement d'écran, remplacement de batterie, réparation du connecteur de charge (port Lightning ou USB-C), réparation caméra avant/arrière, vitre arrière, désoxydation. Pour les pannes plus complexes (carte mère), je peux récupérer l'appareil si nécessaire.",
      },
      {
        q: "Est-ce vraiment moins cher qu'un Apple Store ?",
        a: "Oui, généralement 30 à 50 % moins cher. Exemple : changement d'écran iPhone 14 Pro Max à 199 € chez Phone Master vs 379 € en Apple Store. Et avec le bonus QualiRépar, c'est encore 25 € de moins.",
      },
      {
        q: "Vous intervenez aussi le samedi à Bordeaux ?",
        a: "Oui, je travaille du lundi au samedi de 8h à 21h30. Le samedi est même mon jour le plus chargé pour les interventions à domicile à Bordeaux.",
      },
    ],
    testimonials: [
      {
        text: "Service à domicile parfait à Bordeaux Bastide. Phone Master est venu un samedi soir pour mon écran d'iPhone 14. Réparé en 1h, prix correct.",
        author: "Mathieu D., Bordeaux",
      },
      {
        text: "Pas le temps d'aller en boutique. Phone Master est passé à mon bureau quartier Mériadeck pendant ma pause déjeuner. Top service.",
        author: "Caroline V., Bordeaux",
      },
    ],
    serviceName: "Réparation iPhone à domicile",
    serviceType: "Mobile phone repair service",
    relatedServices: [
      { label: "Changement écran iPhone Bordeaux", path: "/changement-ecran-iphone-bordeaux" },
      { label: "Remplacement batterie iPhone Bordeaux", path: "/remplacement-batterie-iphone-bordeaux" },
      { label: "Bonus QualiRépar à Bordeaux", path: "/bonus-qualirepar-bordeaux" },
    ],
    relatedCities: [
      { label: "Réparation téléphone Talence", path: "/reparation-telephone-talence" },
      { label: "Réparation iPhone Pessac", path: "/reparateur-iphone-pessac" },
      { label: "Réparation Mérignac", path: "/reparateur-mobile-merignac" },
      { label: "Réparation Villenave-d'Ornon", path: "/reparation-ecran-iphone-villenave-dornon" },
    ],
  },

  // ─── 5. BONUS QUALIRÉPAR — BORDEAUX ──────────────────────────
  "qualirepar-bordeaux": {
    service: "Bonus QualiRépar smartphone",
    serviceSlug: "bonus-qualirepar",
    city: "Bordeaux",
    citySlug: "bordeaux",
    postalCode: "33000",
    geo: { lat: 44.8378, lng: -0.5792 },
    canonical: "https://www.phone-master.fr/bonus-qualirepar-bordeaux",
    title: "Bonus QualiRépar 25 € à Bordeaux — Phone Master agréé",
    description:
      "Phone Master est agréé QualiRépar à Bordeaux. Bonus de 25 € déduit automatiquement de votre facture pour la réparation d'écran ou batterie de smartphone. Aucun dossier — 06 35 17 57 11.",
    h1Line1: "Bonus QualiRépar 25 €",
    h1Line2: "à Bordeaux",
    intro:
      "Phone Master est officiellement agréé QualiRépar. Vous bénéficiez automatiquement du bonus écologique de 25 € de l'État sur la réparation d'écran ou de batterie de votre smartphone à Bordeaux. Aucun dossier à remplir : c'est nous qui déduisons les 25 € directement sur la facture.",
    icon: Recycle,
    benefitsTitle: "Comprendre le bonus QualiRépar à Bordeaux",
    benefits: [
      { title: "C'est quoi QualiRépar ?", desc: "Un dispositif national lancé par l'État en 2022 pour favoriser la réparation des appareils électroniques au lieu de leur remplacement. Pour le smartphone, le bonus est de 25 €, déductible sur la facture chez un réparateur agréé." },
      { title: "Pourquoi Phone Master est agréé", desc: "Pour être agréé QualiRépar, un réparateur doit prouver son professionnalisme : devis clairs, pièces tracées, garantie minimum, formation. Phone Master a obtenu son agrément après audit." },
      { title: "Comment vous en bénéficiez", desc: "Aucune démarche. Le bonus est automatiquement déduit de votre facture lors d'un changement d'écran ou d'une réparation éligible. C'est nous qui gérons l'administratif avec l'éco-organisme." },
      { title: "Sur quelles réparations", desc: "Le bonus de 25 € s'applique au changement d'écran de smartphone (toutes marques). D'autres réparations comme la batterie peuvent aussi être éligibles selon le modèle — confirmation au moment du devis." },
    ],
    stepsTitle: "Comment ça se passe à Bordeaux",
    steps: [
      { title: "1. Vous appelez Phone Master", desc: "Au 06 35 17 57 11 pour une réparation à domicile à Bordeaux. Pas besoin de mentionner QualiRépar : nous l'appliquons automatiquement." },
      { title: "2. Devis avec bonus inclus", desc: "Le tarif que je vous annonce inclut déjà la déduction de 25 €. Pas de mauvaise surprise, pas de facturation ajoutée." },
      { title: "3. Réparation à votre domicile", desc: "Intervention chez vous à Bordeaux, en 30 min à 1h selon la panne. Garantie 6 mois pièces et main-d'œuvre." },
      { title: "4. Facture avec mention QualiRépar", desc: "Vous recevez une facture officielle où le bonus de 25 € apparaît clairement. C'est cette facture qui prouve l'éligibilité au dispositif." },
      { title: "5. Aucune démarche de votre côté", desc: "C'est moi qui gère la déclaration auprès de l'éco-organisme Ecologic. Vous n'avez rien à faire." },
    ],
    faqs: [
      {
        q: "Comment vérifier qu'un réparateur est vraiment agréé QualiRépar ?",
        a: "Tout réparateur agréé est listé sur le site officiel quali-repar.fr (annuaire public). Phone Master y figure pour la zone Bordeaux Métropole. Méfiez-vous des réparateurs qui mentionnent QualiRépar sans pouvoir le justifier sur l'annuaire officiel.",
      },
      {
        q: "Est-ce que QualiRépar fonctionne avec d'autres réductions ?",
        a: "Oui. Le bonus QualiRépar est cumulable avec les remises commerciales du réparateur. Chez Phone Master, c'est même l'inverse : nos tarifs annoncés sont déjà bonus déduit, c'est encore plus simple à comprendre.",
      },
      {
        q: "Le bonus s'applique-t-il à toutes les marques ?",
        a: "Oui : iPhone, Samsung Galaxy, Huawei, Xiaomi, Google Pixel et autres smartphones courants. Le seul critère c'est que la réparation soit éligible (écran principalement) et que le réparateur soit agréé.",
      },
      {
        q: "Faut-il une preuve d'achat de l'appareil ?",
        a: "Non. Aucun justificatif d'achat de l'appareil n'est demandé. Vous bénéficiez du bonus même si l'iPhone est d'occasion ou que vous avez perdu la facture d'origine.",
      },
      {
        q: "Le bonus est-il limité à une fois par an ?",
        a: "Non. Le bonus s'applique à chaque réparation éligible, sans plafond annuel. Si vous cassez deux écrans dans la même année, vous bénéficiez du bonus deux fois.",
      },
    ],
    testimonials: [
      {
        text: "Bonus QualiRépar appliqué automatiquement sur la facture, comme annoncé. 25 € de moins sur le changement d'écran de mon iPhone 13. Super.",
        author: "Étienne M., Bordeaux",
      },
      {
        text: "Phone Master est l'un des rares réparateurs vraiment agréés QualiRépar à Bordeaux. Tarif clair, bonus déduit, garantie 6 mois. Recommandé.",
        author: "Pauline G., Bordeaux",
      },
    ],
    serviceName: "Bonus QualiRépar smartphone",
    serviceType: "Mobile phone repair service",
    relatedServices: [
      { label: "Changement écran iPhone Bordeaux", path: "/changement-ecran-iphone-bordeaux" },
      { label: "Remplacement batterie iPhone Bordeaux", path: "/remplacement-batterie-iphone-bordeaux" },
      { label: "Réparation iPhone à domicile Bordeaux", path: "/reparation-iphone-domicile-bordeaux" },
    ],
    relatedCities: [
      { label: "Réparation téléphone Talence", path: "/reparation-telephone-talence" },
      { label: "Changement écran iPhone Talence", path: "/changement-ecran-iphone-talence" },
      { label: "Réparation iPhone Pessac", path: "/reparateur-iphone-pessac" },
      { label: "Changement écran Bègles", path: "/changement-ecran-telephone-begles" },
    ],
  },

};

// ──────────────────────────────────────────────────────────
//  ANIMATIONS
// ──────────────────────────────────────────────────────────

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ──────────────────────────────────────────────────────────
//  COMPOSANT
// ──────────────────────────────────────────────────────────

interface ServicePageProps {
  configKey: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ configKey }) => {
  const data = serviceConfigs[configKey];
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const Icon = data.icon;

  // ── JSON-LD : LocalBusiness avec offre Service spécifique ───
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${data.canonical}#localbusiness`,
    name: `Phone Master — ${data.service} à ${data.city}`,
    image: "https://www.phone-master.fr/assets/logos/og-cover.jpg",
    url: data.canonical,
    telephone: "+33635175711",
    email: "phone.master.gironde@gmail.com",
    priceRange: "€€",
    description: data.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.city,
      postalCode: data.postalCode,
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo.lat,
      longitude: data.geo.lng,
    },
    areaServed: { "@type": "City", name: data.city },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "21:30",
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: data.serviceName,
        serviceType: data.serviceType,
        areaServed: data.city,
        provider: {
          "@type": "LocalBusiness",
          name: "Phone Master",
        },
      },
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

  // ── JSON-LD : FAQPage ──
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: data.city, item: `https://www.phone-master.fr/reparation-${data.citySlug === "bordeaux" ? "smartphone" : "telephone"}-${data.citySlug}` },
      { "@type": "ListItem", position: 3, name: data.service, item: data.canonical },
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
            <nav aria-label="breadcrumb" className="text-xs text-gray-400 mb-4">
              <Link to="/" className="hover:text-gray-700">Accueil</Link>
              <span className="mx-2">›</span>
              <Link to={data.citySlug === "talence" ? "/reparation-telephone-talence" : "/reparation-smartphone-bordeaux"} className="hover:text-gray-700">
                {data.city}
              </Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">{data.service}</span>
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
                <Icon className="w-3.5 h-3.5" />
                {data.service}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                {data.h1Line1}<br />
                <span className="text-[#0b6666]">{data.h1Line2}</span>
              </h1>

              <p className="text-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
                {data.intro}
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
                    Devis gratuit
                    <ArrowRight className="w-4 h-4 opacity-60" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── BÉNÉFICES ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-8">
                {data.benefitsTitle}
              </motion.h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {data.benefits.map((b) => (
                  <motion.div
                    key={b.title}
                    variants={fadeUp}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(11,102,102,0.08)" }}>
                      <CheckCircle2 className="w-4 h-4 text-[#0b6666]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">{b.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TARIFS (si applicable) ── */}
        {data.pricing && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={container}
              >
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-2">
                  {data.pricingTitle}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-gray-500 text-sm mb-6">
                  {data.pricingNote}
                </motion.p>
                <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100 text-left">
                      <tr>
                        <th className="px-5 py-3 font-semibold text-gray-700">Modèle iPhone</th>
                        <th className="px-5 py-3 font-semibold text-gray-700 text-right">Prix standard</th>
                        {data.pricing[0]?.promoPrice && (
                          <th className="px-5 py-3 font-semibold text-[#0b6666] text-right">Avec QualiRépar</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {data.pricing.map((row, i) => (
                        <tr key={row.model} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                          <td className="px-5 py-3 text-gray-800">{row.model}</td>
                          <td className="px-5 py-3 text-gray-600 text-right font-medium">{row.price}</td>
                          {row.promoPrice && (
                            <td className="px-5 py-3 text-[#0b6666] font-bold text-right">{row.promoPrice}</td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ── ÉTAPES ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-8">
                {data.stepsTitle}
              </motion.h2>
              <div className="flex flex-col gap-3">
                {data.steps.map((step) => (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0b6666] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                      {step.title.split(".")[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">{step.title.split(". ").slice(1).join(". ")}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── QUALIRÉPAR BANNER ── */}
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
                  Phone Master est agréé QualiRépar à {data.city}
                </h2>
                <p className="text-white/85 text-sm leading-relaxed">
                  Bonus de <strong>25 €</strong> déduit automatiquement de votre facture pour le changement d'écran de smartphone. Aucune démarche.
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
                Pourquoi choisir Phone Master à {data.city}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 mb-8">
                Un service de confiance, transparent et rapide.
              </motion.p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {reasons.map(({ icon: ReasonIcon, label, desc }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(11,102,102,0.08)" }}>
                      <ReasonIcon className="w-4 h-4 text-[#0b6666]" />
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
                Questions fréquentes — {data.service} à {data.city}
              </motion.h2>
              <div className="flex flex-col gap-3">
                {data.faqs.map((faq, i) => (
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

        {/* ── PAGES RELIÉES ── */}
        <section className="py-14 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

            {/* Autres services dans la même ville */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-xl font-bold text-gray-900 mb-4">
                Autres réparations à {data.city}
              </motion.h2>
              <div className="flex flex-wrap gap-3">
                {data.relatedServices.map((s) => (
                  <motion.div key={s.path} variants={fadeUp}>
                    <Link
                      to={s.path}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#0b6666] hover:text-[#0b6666] transition-colors"
                    >
                      {s.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Même service ou autres villes */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-xl font-bold text-gray-900 mb-4">
                Réparations dans les villes proches
              </motion.h2>
              <div className="flex flex-wrap gap-3">
                {data.relatedCities.map((c) => (
                  <motion.div key={c.path} variants={fadeUp}>
                    <Link
                      to={c.path}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#0b6666] hover:text-[#0b6666] transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 opacity-50" />
                      {c.label}
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
                  Besoin de {data.service.toLowerCase()} à {data.city} ?
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

export default ServicePage;
