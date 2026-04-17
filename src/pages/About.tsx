import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ChevronDown,
  ChevronUp,
  Award,
  Clock,
  CheckCircle,
  Wrench,
  ShieldCheck,
  Smartphone,
  MapPin,
  ThumbsUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (expandedFAQ === index) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(index);
    }
  };

  const faqs = [
    {
      question: "Combien de temps prend la réparation d'un téléphone ?",
      answer:
        "La durée de réparation varie selon le type de problème. Une réparation d'écran prend généralement 1 heure, un remplacement de batterie environ 30 minutes, tandis que les problèmes liés aux caméras, ports de charge ou autres composants nécessitent en moyenne 45 minutes. Nous privilégions les réparations express tout en garantissant un travail de qualité.",
    },
    {
      question:
        "Comment trouver un réparateur de téléphone qualifié près de chez moi ?",
      answer:
        "Pour trouver le meilleur réparateur téléphone autour de vous, vérifiez les avis clients, assurez-vous que le technicien utilise des pièces de qualité et offre une garantie sur les réparations. Notre service vous connecte aux meilleurs réparateurs dans votre région, tous certifiés et expérimentés.",
    },
    {
      question: "Quelles marques de téléphones pouvez-vous réparer ?",
      answer:
        "Nos techniciens sont formés pour réparer toutes les grandes marques de smartphones : Apple (iPhone), Samsung (Galaxy) et Huawei. Que vous ayez besoin d'une réparation d'iPhone ou d'un autre appareil, nous avons l'expertise nécessaire.",
    },
    {
      question: "Offrez-vous une garantie sur les réparations ?",
      answer:
        "Absolument ! Toutes nos réparations sont garanties 6 mois. Cette garantie couvre les défauts potentiels sur les pièces installées (hors casse et oxydation), et la main d'œuvre. Notre engagement qualité vous assure une tranquillité d'esprit après chaque réparation.",
    },
    {
      question: "Est-il moins cher de réparer ou de remplacer mon téléphone ?",
      answer:
        "Dans la plupart des cas, la réparation est nettement plus économique que le remplacement, surtout pour les smartphones modernes. Une réparation d'écran ou de batterie représente généralement 15 à 30% du prix d'un nouvel appareil. De plus, la réparation est un choix écologique qui prolonge la vie de votre appareil.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>À Propos de Phone Master - Expert Réparation Smartphone Gironde</title>
        <meta
          name="description"
          content="Découvrez Phone Master : 10 ans d'expérience en réparation de smartphones. Techniciens certifiés, pièces authentiques, garantie 6 mois, service à domicile."
        />
        <link rel="canonical" href="https://www.phone-master.fr/about" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12 pt-20 font-body">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Expert en Réparation Téléphone - Votre Partenaire de Confiance
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Besoin d'une réparation téléphone rapide et fiable ? Notre équipe
              de techniciens certifiés est là pour résoudre tous vos problèmes
              de smartphone, qu'il s'agisse d'un écran cassé, d'une batterie
              défaillante ou d'un problème plus complexe.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Réparation express</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Pièces authentiques</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Garantie 6 mois</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Devis gratuit</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#c7e5c6] to-[#9ed89d] p-8 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Trouvez un réparateur téléphone autour de vous
              </h2>
              <p className="text-white opacity-90">
                Service disponible dans toute la Gironde
              </p>
            </div>
          </div>
        </div>

        {/* Notre expertise */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Notre Expertise en Réparation de Téléphones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-[#c7e5c6] rounded-full p-3">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Réparation d'écrans
                </h3>
                <p className="text-gray-600">
                  Un écran fissuré ou qui ne répond plus ? Nos techniciens
                  remplacent votre écran avec des pièces de haute qualité
                  compatibles avec toutes les marques, y compris la réparation
                  iPhone et Samsung.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-[#c7e5c6] rounded-full p-3">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Remplacement de batterie
                </h3>
                <p className="text-gray-600">
                  Batterie qui se décharge rapidement ? Nous proposons des
                  remplacements de batterie pour prolonger la vie de votre
                  appareil et restaurer son autonomie d'origine.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-[#c7e5c6] rounded-full p-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Réparation express
                </h3>
                <p className="text-gray-600">
                  Besoin de votre téléphone rapidement ? La plupart de nos
                  réparations sont effectuées en moins d'une heure, vous
                  permettant de récupérer votre appareil le jour même.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-[#c7e5c6] rounded-full p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Service de proximité
                </h3>
                <p className="text-gray-600">
                  Trouvez facilement un réparateur téléphone autour de vous
                  grâce à nos techniciens certifiés, disponibles dans toute la
                  Gironde. (Bordeaux, et alentours)
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/repair">
              <button className="bg-[#c7e5c6] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a8d4a4] transition-colors">
                Découvrir tous nos services
              </button>
            </Link>
          </div>
        </div>

        {/* Processus de réparation - Version unifiée */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Notre Processus de Réparation Téléphone
          </h2>

          {/* Version Mobile */}
          <div className="md:hidden space-y-8">
            {[
              {
                title: "1. Diagnostic gratuit",
                description:
                  "Nous identifions précisément le problème de votre appareil et vous proposons la meilleure solution.",
              },
              {
                title: "2. Devis transparent",
                description:
                  "Vous recevez un devis clair sans frais cachés, que vous êtes libre d'accepter ou non.",
              },
              {
                title: "3. Réparation par des experts",
                description:
                  "Nos techniciens qualifiés réparent votre téléphone avec des pièces de qualité et des outils professionnels.",
              },
              {
                title: "4. Tests et garantie",
                description:
                  "Votre appareil est minutieusement testé avant d'être rendu, avec une garantie de 6 mois sur toutes les réparations.",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-[#c7e5c6] rounded-full h-10 w-10 flex-shrink-0 flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Version Desktop */}
          <div className="hidden md:block relative">
            {/* Timeline line */}
            <div className="absolute h-full w-0.5 bg-[#c7e5c6] left-6 top-0 transform -translate-x-1/2 md:left-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold mb-1">
                    Diagnostic gratuit
                  </h3>
                  <p className="text-gray-600">
                    Nous identifions précisément le problème de votre appareil
                    et vous proposons la meilleure solution.
                  </p>
                </div>
                <div className="z-10 absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-[#c7e5c6] rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="z-10 absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-[#c7e5c6] rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold mb-1">
                    Devis transparent
                  </h3>
                  <p className="text-gray-600">
                    Vous recevez un devis clair sans frais cachés, que vous êtes
                    libre d'accepter ou non.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold mb-1">
                    Réparation par des experts
                  </h3>
                  <p className="text-gray-600">
                    Nos techniciens qualifiés réparent votre téléphone avec des
                    pièces de qualité et des outils professionnels.
                  </p>
                </div>
                <div className="z-10 absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-[#c7e5c6] rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              <div className="relative flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="z-10 absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-[#c7e5c6] rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-lg font-semibold mb-1">
                    Tests et garantie
                  </h3>
                  <p className="text-gray-600">
                    Votre appareil est minutieusement testé avant d'être rendu,
                    avec une garantie de 6 mois sur toutes les réparations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi Choisir Notre Service de Réparation Téléphone ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="h-12 w-12 text-[#c7e5c6]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualité garantie</h3>
              <p className="text-gray-600">
                Toutes nos réparations sont couvertes par une garantie de 6 mois
                pour vous assurer une tranquillité d'esprit totale.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-[#c7e5c6]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Techniciens certifiés
              </h3>
              <p className="text-gray-600">
                Nos réparateurs téléphone sont tous formés et certifiés pour
                intervenir sur toutes les marques de smartphones.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <ThumbsUp className="h-12 w-12 text-[#c7e5c6]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Satisfaction client
              </h3>
              <p className="text-gray-600">
                Plus de 95% de nos clients nous recommandent pour la qualité de
                nos services de réparation téléphone.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Questions Fréquentes sur la Réparation Téléphone
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {expandedFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#c7e5c6] to-[#9ed89d] rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Besoin d'une réparation téléphone dès aujourd'hui ?
          </h2>
          <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
            Ne laissez pas un écran cassé ou une batterie défectueuse vous
            gêner. Nos experts en réparation téléphone sont prêts à redonner vie
            à votre appareil rapidement et efficacement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-white text-[#9ed89d] px-6 py-3 rounded-lg font-medium">
              Trouver un réparateur près de chez moi
            </div>
            <Link to="/booking">
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                Prendre rendez-vous
              </button>{" "}
            </Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
