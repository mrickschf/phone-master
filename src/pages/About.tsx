import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Award,
  Clock,
  CheckCircle,
  Wrench,
  ShieldCheck,
  Smartphone,
  MapPin,
  Car,
  BadgeEuro,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const faqs = [
  {
    question: "Combien de temps prend la réparation d'un téléphone ?",
    answer:
      "La durée varie selon le type de problème. Un remplacement de batterie prend environ 30 minutes, une réparation d'écran 1 heure, les caméras et connecteurs 45 minutes. La réparation se fait sur place, en une seule visite.",
  },
  {
    question: "Quelles marques de téléphones réparez-vous ?",
    answer:
      "iPhone (toutes générations), Samsung Galaxy et Huawei. Pour toute autre marque, contactez-moi pour confirmer la disponibilité des pièces.",
  },
  {
    question: "Offrez-vous une garantie sur les réparations ?",
    answer:
      "Oui, toutes les réparations sont garanties 6 mois. Cette garantie couvre les défauts sur les pièces installées et la main d'œuvre — hors casse et oxydation.",
  },
  {
    question: "Est-il moins cher de réparer ou de remplacer mon téléphone ?",
    answer:
      "Dans la grande majorité des cas, réparer coûte 15 à 30% du prix d'un appareil neuf. C'est aussi un geste écologique qui prolonge la vie de votre smartphone.",
  },
  {
    question: "Dois-je payer à l'avance ?",
    answer:
      "Non. Vous ne payez qu'après la réparation effectuée et réussie. Le diagnostic et le déplacement sont gratuits, sans engagement.",
  },
];

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>À Propos de Phone Master - Expert Réparation Smartphone Bordeaux Métropole</title>
        <meta
          name="description"
          content="Technicien certifié en réparation smartphone à domicile sur Bordeaux Métropole. 10 ans d'expérience, pièces de qualité premium, garantie 6 mois, sans acompte."
        />
        <link rel="canonical" href="https://www.phone-master.fr/about" />
      </Helmet>

      <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0b6666]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="max-w-4xl mx-auto">
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
                Expert en réparation<br />
                <span className="text-[#0b6666]">smartphone à domicile</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-xl mb-8">
                Technicien certifié, spécialisé iPhone, Samsung Galaxy et Huawei.
                Intervention rapide sur Bordeaux Métropole depuis plus de 10 ans.
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
                    className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-200 hover:border-gray-300 transition-all"
                  >
                    Prendre rendez-vous
                    <ArrowRight className="w-4 h-4 opacity-60" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── POINTS FORTS ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-8">
                Pourquoi choisir Phone Master ?
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Car, label: "Déplacement gratuit", desc: "Je viens chez vous, sans supplément" },
                  { icon: BadgeEuro, label: "Pas d'acompte", desc: "Vous payez après réparation réussie" },
                  { icon: ShieldCheck, label: "Garantie 6 mois", desc: "Pièces et main d'œuvre" },
                  { icon: Clock, label: "En 1h maximum", desc: "Réparation rapide sur place" },
                  { icon: Award, label: "Technicien certifié", desc: "10 ans d'expérience" },
                  { icon: Smartphone, label: "iPhone · Samsung · Huawei", desc: "Toutes générations" },
                ].map(({ icon: Icon, label, desc }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(11,102,102,0.08)" }}>
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

        {/* ── PROCESSUS ── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-8">
                Comment ça se passe ?
              </motion.h2>
              <div className="flex flex-col gap-0">
                {[
                  { n: "1", title: "Diagnostic gratuit", desc: "J'identifie précisément le problème et vous propose un devis transparent, sans frais cachés." },
                  { n: "2", title: "Vous acceptez (ou non)", desc: "Aucun engagement. Si vous refusez le devis, vous ne payez rien. Le déplacement est offert." },
                  { n: "3", title: "Réparation sur place", desc: "Je répare votre téléphone chez vous avec des pièces de qualité premium et des outils professionnels." },
                  { n: "4", title: "Tests & garantie", desc: "Votre appareil est testé sous vos yeux avant restitution. Garantie 6 mois pièces et main d'œuvre." },
                ].map((step, i, arr) => (
                  <motion.div key={step.n} variants={fadeUp} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-gray-950 text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {step.n}
                      </div>
                      {i < arr.length - 1 && <div className="w-0.5 h-full bg-gray-100 my-1" />}
                    </div>
                    <div className="pb-8">
                      <p className="text-sm font-bold text-gray-900 mb-1">{step.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── EXPERTISE ── */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={container}
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold text-gray-900 mb-8">
                Services de réparation
              </motion.h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Smartphone, title: "Réparation d'écrans", desc: "Écran fissuré ou qui ne répond plus ? Remplacement avec pièces de qualité premium, toutes marques." },
                  { icon: Wrench, title: "Remplacement de batterie", desc: "Batterie qui se décharge rapidement ? Remplacement rapide pour restaurer l'autonomie d'origine." },
                  { icon: Clock, title: "Réparation express", desc: "La plupart des réparations en moins d'une heure, sur place, sans vous déplacer." },
                  { icon: MapPin, title: "Service à domicile", desc: "Intervention sur tout Bordeaux Métropole : Bordeaux, Pessac, Mérignac, Talence, Bègles…" },
                ].map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(11,102,102,0.08)" }}>
                      <Icon className="w-5 h-5 text-[#0b6666]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeUp} className="mt-6 text-center">
                <Link
                  to="/repair"
                  className="inline-flex items-center gap-2 bg-gray-950 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors"
                >
                  Voir tous nos services
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── TÉMOIGNAGES ── */}
        <section className="py-14 px-4 bg-gray-950">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={container}
              className="grid md:grid-cols-2 gap-5"
            >
              {[
                { text: "J'ai fait appel à Phone Master pour changer la batterie de mon Samsung à Bordeaux. Intervention rapide à domicile, prix honnête et résultat impeccable.", author: "Thomas S.", city: "Bordeaux" },
                { text: "Réparation de mon iPhone 13 à domicile à Talence, écran changé en 30 minutes, prix correct et garantie 6 mois, je recommande.", author: "Anthony P.", city: "Talence" },
              ].map((t) => (
                <motion.div key={t.author} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">"{t.text}"</p>
                  <p className="text-xs text-gray-500 font-medium">— {t.author}, {t.city}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

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
                {faqs.map((faq, i) => (
                  <motion.div key={i} variants={fadeUp} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-950 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div>
                <p className="text-white text-xl font-bold mb-1">Besoin d'une réparation aujourd'hui ?</p>
                <p className="text-gray-400 text-sm">Disponible 6j/7 · Diagnostic gratuit · Sans acompte</p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href="tel:0635175711"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Appeler
                </a>
                <Link
                  to="/repair"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/15 transition-colors border border-white/10"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;
