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
} from "lucide-react";

interface LocalPageProps {
  city: string;
}

const SPECIALTIES = "iPhone, Samsung Galaxy et Huawei";
const ISSUES = "écrans cassés, batterie, connecteur de charge et caméra";

const cityData: Record<
  string,
  {
    title: string;
    description: string;
    canonical: string;
    testimonial?: string;
    testimonialAuthor?: string;
  }
> = {
  Bordeaux: {
    title: "Réparation smartphone Bordeaux à domicile — Phone Master",
    description:
      "Réparation smartphone à domicile à Bordeaux : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Devis gratuit, garantie 6 mois. 6j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-bordeaux",
    testimonial:
      "J'ai fait appel à Phone Master pour changer la batterie de mon Samsung à Bordeaux. Intervention rapide à domicile, prix honnête et résultat impeccable.",
    testimonialAuthor: "Thomas S., Bordeaux",
  },
  Talence: {
    title: "Réparation téléphone Talence à domicile — Phone Master",
    description:
      "Technicien smartphone à Talence : écran cassé, batterie, connecteur de charge. Intervention rapide à domicile, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-telephone-talence",
    testimonial:
      "Réparation de mon iPhone 13 à domicile à Talence, écran changé en 30 minutes, prix correct et garantie 6 mois, je recommande.",
    testimonialAuthor: "Anthony P., Talence",
  },
  Pessac: {
    title: "Réparateur iPhone Samsung Pessac à domicile — Phone Master",
    description:
      "Réparation iPhone et Samsung à Pessac : remplacement écran, batterie, caméra. Déplacement gratuit, garantie 6 mois. Disponible 6j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparateur-iphone-pessac",
    testimonial:
      "J'ai fait appel à Phone Master pour changer la batterie de mon Samsung à Bordeaux. Intervention rapide à domicile, prix honnête et résultat impeccable.",
    testimonialAuthor: "Thomas S., Bordeaux",
  },
  Bègles: {
    title: "Changement écran téléphone Bègles à domicile — Phone Master",
    description:
      "Changement d'écran et réparation smartphone à Bègles : iPhone, Samsung, Huawei. Intervention rapide à domicile, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/changement-ecran-telephone-begles",
    testimonial:
      "Réparation de mon iPhone 13 à domicile à Talence, écran changé en 30 minutes, prix correct et garantie 6 mois, je recommande.",
    testimonialAuthor: "Anthony P., Talence",
  },
  Mérignac: {
    title: "Réparateur mobile Mérignac à domicile — Phone Master",
    description:
      "Réparation mobile à Mérignac : écran, batterie, connecteur. Technicien certifié, déplacement gratuit, garantie 6 mois. Disponible 6j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparateur-mobile-merignac",
    testimonial:
      "J'ai fait appel à Phone Master pour changer la batterie de mon Samsung à Bordeaux. Intervention rapide à domicile, prix honnête et résultat impeccable.",
    testimonialAuthor: "Thomas S., Bordeaux",
  },
  Gradignan: {
    title: "Réparation mobile Gradignan à domicile — Phone Master",
    description:
      "Service de réparation mobile à Gradignan : remplacement écran, batterie, port de charge. Intervention à domicile, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/service-reparation-mobile-gradignan",
    testimonial:
      "Réparation de mon iPhone 13 à domicile à Talence, écran changé en 30 minutes, prix correct et garantie 6 mois, je recommande.",
    testimonialAuthor: "Anthony P., Talence",
  },
  "Villenave-d'Ornon": {
    title: "Réparation écran iPhone Villenave-d'Ornon — Phone Master",
    description:
      "Réparation iPhone et smartphone à Villenave-d'Ornon : écran cassé, batterie, caméra. Technicien à domicile, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-ecran-iphone-villenave-dornon",
    testimonial:
      "J'ai fait appel à Phone Master pour changer la batterie de mon Samsung à Bordeaux. Intervention rapide à domicile, prix honnête et résultat impeccable.",
    testimonialAuthor: "Thomas S., Bordeaux",
  },
  Cenon: {
    title: "Réparation smartphone Cenon à domicile — Phone Master",
    description:
      "Technicien réparation smartphone à Cenon : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Déplacement gratuit, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-cenon",
    testimonial:
      "Réparation de mon iPhone 13 à domicile à Talence, écran changé en 30 minutes, prix correct et garantie 6 mois, je recommande.",
    testimonialAuthor: "Anthony P., Talence",
  },
  Floirac: {
    title: "Réparation smartphone Floirac à domicile — Phone Master",
    description:
      "Technicien réparation smartphone à Floirac : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Déplacement gratuit, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-floirac",
    testimonial:
      "J'ai fait appel à Phone Master pour changer la batterie de mon Samsung à Bordeaux. Intervention rapide à domicile, prix honnête et résultat impeccable.",
    testimonialAuthor: "Thomas S., Bordeaux",
  },
  "Le Bouscat": {
    title: "Réparation smartphone Le Bouscat à domicile — Phone Master",
    description:
      "Technicien réparation smartphone au Bouscat : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Déplacement gratuit, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-le-bouscat",
    testimonial:
      "Réparation de mon iPhone 13 à domicile à Talence, écran changé en 30 minutes, prix correct et garantie 6 mois, je recommande.",
    testimonialAuthor: "Anthony P., Talence",
  },
  "Le Haillan": {
    title: "Réparation smartphone Le Haillan à domicile — Phone Master",
    description:
      "Technicien réparation smartphone au Haillan : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Déplacement gratuit, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-le-haillan",
    testimonial:
      "J'ai fait appel à Phone Master pour changer la batterie de mon Samsung à Bordeaux. Intervention rapide à domicile, prix honnête et résultat impeccable.",
    testimonialAuthor: "Thomas S., Bordeaux",
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
    a: "Le prix varie selon le modèle : à partir de 79€ pour un iPhone 11, 139€ pour un iPhone 13, 169€ pour un iPhone 14. Contactez-nous pour un devis gratuit et précis sur votre modèle.",
  },
  {
    q: `Combien de temps prend une réparation à domicile à ${city} ?`,
    a: `La plupart des réparations à ${city} sont effectuées en 30 minutes à 1 heure directement chez vous, en une seule visite.`,
  },
  {
    q: `Vous déplacez-vous vraiment à ${city} gratuitement ?`,
    a: `Oui, le déplacement est totalement gratuit à ${city} et dans toute Bordeaux Métropole. Vous ne payez que la réparation, garantie 6 mois pièces et main d'œuvre. Aucun acompte.`,
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

const LocalPage: React.FC<LocalPageProps> = ({ city }) => {
  const data = cityData[city] || {
    title: `Réparation smartphone ${city} à domicile — Phone Master`,
    description: `Technicien certifié en réparation smartphone à ${city} : écran cassé, batterie, connecteur, intervention rapide à domicile. Devis gratuit. Garantie 6 mois.`,
    canonical: `https://www.phone-master.fr/reparation-smartphone-${city
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")}`,
  };

  const nearbyCities = allCities.filter((c) => c.name !== city).slice(0, 4);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={data.canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Phone Master",
            description: `Réparation de smartphones à domicile à ${city}`,
            url: data.canonical,
            telephone: "+33635175711",
            email: "phone.master.gironde@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: city,
              addressRegion: "Gironde",
              addressCountry: "FR",
            },
            areaServed: { "@type": "City", name: city },
            priceRange: "€€",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              opens: "08:00",
              closes: "21:30",
            },
          })}
        </script>
      </Helmet>

      <div className="bg-white min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0b6666]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          </div>
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[#0b6666] text-sm font-medium mb-6 border border-[#0b6666]/15"
                style={{ background: "rgba(11,102,102,0.07)" }}>
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
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(11,102,102,0.08)" }}>
                      <Icon className="w-5 h-5 text-[#0b6666]" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{label}</span>
                  </motion.div>
                ))}
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
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(11,102,102,0.08)" }}>
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

        {/* ── TÉMOIGNAGE ── */}
        {data.testimonial && (
          <section className="py-14 px-4 bg-gray-950">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-[#72b9bb] mx-auto mb-4 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-white font-medium leading-relaxed mb-4">
                  "{data.testimonial}"
                </p>
                <p className="text-sm text-gray-400 font-medium">— {data.testimonialAuthor}</p>
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
                Questions fréquentes
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
                Intervention possible sur toute la commune et les communes voisines.
              </motion.p>
              <div className="flex flex-wrap gap-3">
                {nearbyCities.map((c) => (
                  <motion.div key={c.name} variants={fadeUp}>
                    <Link
                      to={c.path}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#0b6666] hover:text-[#0b6666] transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 opacity-50" />
                      {c.name}
                    </Link>
                  </motion.div>
                ))}
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
                  Disponible 6j/7 · Devis gratuit · Déplacement offert · Sans acompte
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
