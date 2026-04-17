import React from "react";
import { Helmet } from "react-helmet-async";
import "./LocalPage.css";
import { Link } from "react-router-dom";

interface LocalPageProps {
  city: string;
}

// Mapping complet par ville — titre, description, canonical, contenu
const cityData: Record<
  string,
  {
    title: string;
    description: string;
    canonical: string;
    specialties: string;
    commonIssues: string;
    testimonial: string;
  }
> = {
  Bordeaux: {
    title: "Réparation smartphone Bordeaux à domicile — Phone Master",
    description:
      "Réparation smartphone à domicile à Bordeaux : écran cassé, batterie, connecteur. iPhone, Samsung, Huawei. Devis gratuit, garantie 6 mois. 7j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-bordeaux",
    specialties: "iPhone et Samsung Galaxy",
    commonIssues: "écrans cassés et problèmes de batterie",
    testimonial:
      '"Service impeccable et rapide à mon domicile en centre-ville. Très professionnel !" — Client de Bordeaux',
  },
  Talence: {
    title: "Réparation téléphone Talence à domicile — Phone Master",
    description:
      "Technicien smartphone à Talence : écran cassé, batterie, connecteur de charge. Intervention rapide à domicile, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-telephone-talence",
    specialties: "tous modèles Android et iPhone",
    commonIssues: "problèmes de connecteur de charge et écrans cassés",
    testimonial:
      '"Intervention à domicile le jour même, prix très raisonnable." — Client de Talence',
  },
  Pessac: {
    title: "Réparateur iPhone Samsung Pessac à domicile — Phone Master",
    description:
      "Réparation iPhone et Samsung à Pessac : remplacement écran, batterie, caméra. Déplacement gratuit, garantie 6 mois. Disponible 7j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparateur-iphone-pessac",
    specialties: "iPhone et Huawei",
    commonIssues: "batterie et problèmes d'écran tactile",
    testimonial:
      '"Réparation parfaite de mon iPhone en moins d\'une heure." — Client de Pessac',
  },
  Bègles: {
    title: "Changement écran téléphone Bègles à domicile — Phone Master",
    description:
      "Changement d'écran et réparation smartphone à Bègles : iPhone, Samsung, Huawei. Intervention rapide à domicile, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/changement-ecran-telephone-begles",
    specialties: "toutes marques de smartphones",
    commonIssues: "écrans cassés et batteries défaillantes",
    testimonial:
      '"Technicien rapide et professionnel, je recommande !" — Client de Bègles',
  },
  Mérignac: {
    title: "Réparateur mobile Mérignac à domicile — Phone Master",
    description:
      "Réparation mobile à Mérignac : écran, batterie, connecteur. Technicien certifié, déplacement gratuit, garantie 6 mois. Disponible 7j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparateur-mobile-merignac",
    specialties: "iPhone et Samsung Galaxy",
    commonIssues: "écrans brisés et autonomie batterie",
    testimonial:
      '"Très réactif, est venu le soir même. Excellent travail !" — Client de Mérignac',
  },
  Gradignan: {
    title: "Réparation mobile Gradignan à domicile — Phone Master",
    description:
      "Service de réparation mobile à Gradignan : remplacement écran, batterie, port de charge. Intervention à domicile, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical:
      "https://www.phone-master.fr/service-reparation-mobile-gradignan",
    specialties: "toutes marques de smartphones",
    commonIssues: "écrans cassés et problèmes de charge",
    testimonial:
      '"Intervention rapide et soignée, prix honnête." — Client de Gradignan',
  },
  "Villenave-d'Ornon": {
    title: "Réparation écran iPhone Villenave-d'Ornon — Phone Master",
    description:
      "Réparation iPhone et smartphone à Villenave-d'Ornon : écran cassé, batterie, caméra. Technicien à domicile, garantie 6 mois. Devis gratuit — 06 35 17 57 11.",
    canonical:
      "https://www.phone-master.fr/reparation-ecran-iphone-villenave-dornon",
    specialties: "iPhone et Samsung",
    commonIssues: "écrans fissurés et batteries usées",
    testimonial:
      '"Parfait du début à la fin, téléphone réparé en 30 min !" — Client de Villenave-d\'Ornon',
  },
  Léognan: {
    title: "Réparation smartphone Léognan à domicile — Phone Master",
    description:
      "Technicien réparation smartphone à Léognan : écran, batterie, connecteur. Déplacement gratuit, garantie 6 mois. Disponible 7j/7 — 06 35 17 57 11.",
    canonical: "https://www.phone-master.fr/reparation-smartphone-leognan",
    specialties: "toutes marques de smartphones",
    commonIssues: "écrans cassés et problèmes de batterie",
    testimonial:
      '"Super service, rapide et efficace, je recommande !" — Client de Léognan',
  },
};

// Villes pour les liens internes
const allCities = [
  { name: "Bordeaux", path: "/reparation-smartphone-bordeaux" },
  { name: "Talence", path: "/reparation-telephone-talence" },
  { name: "Pessac", path: "/reparateur-iphone-pessac" },
  { name: "Bègles", path: "/changement-ecran-telephone-begles" },
  { name: "Mérignac", path: "/reparateur-mobile-merignac" },
  { name: "Gradignan", path: "/service-reparation-mobile-gradignan" },
  {
    name: "Villenave-d'Ornon",
    path: "/reparation-ecran-iphone-villenave-dornon",
  },
  { name: "Léognan", path: "/reparation-smartphone-leognan" },
];

const LocalPage: React.FC<LocalPageProps> = ({ city }) => {
  const data = cityData[city] || {
    title: `Réparation smartphone ${city} à domicile — Phone Master`,
    description: `Technicien certifié en réparation smartphone à ${city} : écran cassé, batterie, connecteur, intervention rapide à domicile. Devis gratuit. Garantie 6 mois.`,
    canonical: `https://www.phone-master.fr/reparation-smartphone-${city
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")}`,
    specialties: "toutes marques de smartphones",
    commonIssues: "tous types de problèmes",
    testimonial: "",
  };

  const nearbyCities = allCities.filter((c) => c.name !== city).slice(0, 3);

  return (
    <div className="local-page-container">
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
            areaServed: {
              "@type": "City",
              name: city,
            },
            priceRange: "€€",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00",
              closes: "21:30",
            },
          })}
        </script>
      </Helmet>

      <h1>Réparation Téléphone à {city} – Rapide, Fiable, à Domicile</h1>

      <p>
        Vous habitez <strong>{city}</strong> et cherchez un réparateur téléphone
        de confiance ? Je suis un <strong>technicien à domicile</strong>{" "}
        spécialisé dans la <strong>réparation de smartphones</strong> toutes
        marques (iPhone, Samsung, Huawei…) dans toute la{" "}
        <strong>Gironde</strong>.
      </p>

      <p>
        À <strong>{city}</strong>, je me spécialise particulièrement dans les
        réparations de <strong>{data.specialties}</strong> et j'interviens
        fréquemment pour résoudre des problèmes de{" "}
        <strong>{data.commonIssues}</strong>.
      </p>

      <h2>📱 Services de Réparation à {city}</h2>
      <ul>
        <li>✅ Changement d'écran cassé</li>
        <li>✅ Remplacement de batterie</li>
        <li>✅ Réparation connecteur de charge</li>
        <li>✅ Réparation caméra</li>
        <li>✅ Diagnostic gratuit et devis clair</li>
      </ul>

      <h2>📍 Pourquoi me choisir à {city} ?</h2>
      <ul>
        <li>
          🔧 <strong>Technicien certifié</strong> avec pièces de qualité
        </li>
        <li>
          🚗 <strong>Déplacement gratuit</strong> à {city} — je viens chez vous
        </li>
        <li>
          💶 <strong>Devis gratuit</strong> sans engagement
        </li>
        <li>
          🔒 <strong>Garantie 6 mois</strong> sur toutes les réparations
        </li>
        <li>
          ⏱️ <strong>Intervention en 30 minutes</strong> en moyenne
        </li>
        <li>
          📅 <strong>Disponible 7j/7</strong> de 8h à 21h30
        </li>
      </ul>

      {data.testimonial && (
        <div className="testimonial">
          <h3>Ce que disent mes clients à {city}</h3>
          <blockquote>{data.testimonial}</blockquote>
        </div>
      )}

      <h2>🗺️ Zones desservies autour de {city}</h2>
      <p>
        Intervention possible sur toute la commune de <strong>{city}</strong> et
        les communes voisines.
      </p>

      <div className="nearby-cities">
        <p>Je me déplace également à :</p>
        <ul>
          {nearbyCities.map((nearbyCity) => (
            <li key={nearbyCity.name}>
              <Link to={nearbyCity.path}>
                Réparation téléphone à {nearbyCity.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <h2>📞 Contactez-moi dès aujourd'hui</h2>
      <p>
        Besoin d'un <strong>réparateur téléphone à {city}</strong> ? Je suis
        disponible 7j/7 pour un devis rapide et une intervention dans la
        journée.
      </p>

      <div className="contact-info">
        <p>
          <strong>Téléphone :</strong>{" "}
          <a href="tel:0635175711">06 35 17 57 11</a>
        </p>
        <p>
          <strong>Email :</strong>{" "}
          <a href="mailto:phone.master.gironde@gmail.com">
            phone.master.gironde@gmail.com
          </a>
        </p>
        <p>
          <strong>Horaires :</strong> Disponible 7j/7 de 8h à 21h30
        </p>
      </div>

      <div className="faq-section">
        <h2>Questions fréquentes — réparation téléphone à {city}</h2>

        <div className="faq-item">
          <h3>Combien coûte une réparation d'écran à {city} ?</h3>
          <p>
            Le prix varie selon le modèle : à partir de 79€ pour un iPhone 11,
            139€ pour un iPhone 13, 169€ pour un iPhone 14. Contactez-moi pour
            un devis gratuit et précis sur votre modèle.
          </p>
        </div>

        <div className="faq-item">
          <h3>Combien de temps prend une réparation à domicile à {city} ?</h3>
          <p>
            La plupart des réparations à {city} sont effectuées en 30 minutes
            directement chez vous. Les réparations plus complexes peuvent
            prendre jusqu'à 1 heure, toujours en une seule visite.
          </p>
        </div>

        <div className="faq-item">
          <h3>Vous déplacez-vous vraiment à {city} gratuitement ?</h3>
          <p>
            Oui, le déplacement est totalement gratuit à {city} et dans toute la
            Gironde. Vous ne payez que la réparation, garantie 6 mois pièces et
            main d'œuvre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocalPage;
