import { Link } from "react-router-dom";
import { Shield, Clock, PenTool as Tool, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { AnimatedBlobs } from "../components/ui/AnimatedBlobs";

// Animations config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Réparation Smartphone à Domicile - Bordeaux Métropole | Phone Master</title>
        <meta
          name="description"
          content="Réparation rapide de smartphones à domicile. iPhone, Samsung, Huawei. Devis gratuit, garantie 6 mois, disponible 6j/7 sur Bordeaux Métropole. 06 35 17 57 11"
        />
        <meta property="og:title" content="Réparation Smartphone à Domicile - Phone Master" />
        <meta property="og:description" content="Service professionnel de réparation téléphone à domicile. Déplacement gratuit, garantie 6 mois." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.phone-master.fr" />
      </Helmet>

      <div className="overflow-hidden font-body bg-white">

        {/* ═══════════════════════════════════════════
            HERO — réplique exacte de hero-preview-ring.html
            Blobs centrés par flexbox, texte en position absolute
            ═══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

          {/* Blobs — centrés par le flex parent */}
          <AnimatedBlobs />

          {/* Texte — position absolute centré sur les blobs, décalé du haut pour la navbar */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none gap-5"
            style={{ paddingTop: '64px' }}
            initial="hidden"
            animate="show"
            variants={container}
          >
            {/* Nom de marque — Inter exactement comme le preview */}
            <motion.h1
              variants={item}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                color: '#111',
              }}
            >
              Phone<span style={{ color: '#0b6666' }}>Master</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={item}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                fontWeight: 400,
                color: '#4b5563',
                letterSpacing: '-0.01em',
              }}
            >
              Réparation rapide · Pièces d'origine · Garantie 6 mois
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex gap-3 pointer-events-auto">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/repair"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    padding: '14px 32px',
                    borderRadius: '999px',
                    background: '#111',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    boxShadow: '0 6px 24px rgba(0,0,0,0.18)',
                    display: 'inline-block',
                  }}
                >
                  Prendre rendez-vous
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/repair"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    padding: '14px 32px',
                    borderRadius: '999px',
                    background: 'transparent',
                    color: '#111',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    border: '1.5px solid #d1d5db',
                    display: 'inline-block',
                  }}
                >
                  Voir nos tarifs →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Trust chips — fixed en bas, exactement comme le preview */}
          <motion.div
            className="fixed bottom-9 left-1/2 -translate-x-1/2 flex gap-2.5 z-20 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {["Diagnostic gratuit", "30 min", "Garantie 6 mois", "+1 200 clients"].map((label) => (
              <span
                key={label}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  padding: '7px 16px',
                  borderRadius: '999px',
                  background: 'rgba(0,0,0,0.06)',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#374151',
                  border: '1px solid rgba(0,0,0,0.08)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0b6666', display: 'inline-block', flexShrink: 0 }} />
                {label}
              </span>
            ))}
          </motion.div>

        </section>

        {/* ═══════════════════════════════════════════
            FEATURES — 3 cartes
            ═══════════════════════════════════════════ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={container}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: <Clock className="h-10 w-10 text-[#356a78]" />,
                  title: "Intervention rapide",
                  desc: "Réparation en 30 minutes en moyenne, directement à votre domicile ou lieu choisi. Possibilité de récupérer l'appareil dans notre atelier. Déplacement gratuit.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-[#356a78]" />,
                  title: "Garantie 6 mois",
                  desc: "Pièces et main d'œuvre garanties pendant 6 mois. Hors casse et oxydation.",
                },
                {
                  icon: <Tool className="h-10 w-10 text-[#356a78]" />,
                  title: "Experts certifiés",
                  desc: "Techniciens formés et certifiés. 10 ans d'expérience en réparation smartphone.",
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={item}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className="mb-5">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA Section
            ═══════════════════════════════════════════ */}
        <motion.section
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Commencez votre réparation en quelques clics
            </motion.h2>

            <motion.p
              className="text-gray-500 mb-10 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Sélectionnez votre appareil, choisissez la panne, et on vient chez vous.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/repair"
                  className="inline-flex items-center gap-2.5 bg-gray-950 text-white px-7 py-3.5 rounded-xl font-semibold text-[0.95rem] shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-200"
                >
                  Réparer mon appareil
                  <ArrowRight className="h-4 w-4 opacity-70" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 bg-white text-gray-700 px-7 py-3.5 rounded-xl font-semibold text-[0.95rem] border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-200"
                >
                  Nous contacter
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

      </div>
    </>
  );
};

export default Home;
