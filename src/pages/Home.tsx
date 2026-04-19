import { Link } from "react-router-dom";
import { Shield, Clock, PenTool as Tool, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import HeroBg from "../assets/hero-bg.png";

// Animations config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Réparation Smartphone à Domicile - Bordeaux Gironde | Phone Master</title>
        <meta
          name="description"
          content="Réparation rapide de smartphones à domicile. iPhone, Samsung, Huawei. Devis gratuit, garantie 6 mois, disponible 7j/7 dans toute la Gironde. 06 35 17 57 11"
        />
        <meta property="og:title" content="Réparation Smartphone à Domicile - Phone Master" />
        <meta property="og:description" content="Service professionnel de réparation téléphone à domicile. Déplacement gratuit, garantie 6 mois." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.phone-master.fr" />
      </Helmet>
      <div className="overflow-hidden font-body">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={container}
        className="relative text-white py-32 md:py-48 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={item} className="max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Réparation de smartphones à domicile
            </motion.h1>

            <motion.p
              className="text-xl mb-8 text-white/90 drop-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Service professionnel, rapide et garanti pour Apple, Samsung et
              Huawei
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/repair"
                className="inline-flex items-center bg-white text-[#6ab069] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Réparer mon smartphone
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Clock className="h-12 w-12 text-[#c7e5c6] mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Intervention rapide
              </h3>
              <p className="text-gray-600">
                Réparation en 30 minutes en moyenne, directement à votre
                domicile ou lieu choisi. <br /> Possibilité de récupérer
                l'appareil et de le restituer après réparation dans notre
                atelier. <br /> Déplacement gratuit.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Shield className="h-12 w-12 text-[#c7e5c6] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Garantie 6 mois</h3>
              <p className="text-gray-600">
                Pièces et main d'œuvre garanties pendant 6 mois. Hors casse et
                oxydation.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
            >
              <Tool className="h-12 w-12 text-[#c7e5c6] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experts certifiés</h3>
              <p className="text-gray-600">
                Techniciens formés. 10 ans d'experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Commencez votre réparation en quelques clics
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/repair"
                className="bg-[#c7e5c6] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c7e5c6] transition-colors block"
              >
                Réparer mon appareil
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="text-[#c7e5c6] hover:text-[#c7e5c6] font-semibold block px-8 py-3"
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
