import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const cities = [
  { name: "Talence", path: "/reparation-telephone-talence" },
  { name: "Bordeaux", path: "/reparation-smartphone-bordeaux" },
  { name: "Pessac", path: "/reparateur-iphone-pessac" },
  { name: "Bègles", path: "/changement-ecran-telephone-begles" },
  { name: "Gradignan", path: "/service-reparation-mobile-gradignan" },
  { name: "Mérignac", path: "/reparateur-mobile-merignac" },
  {
    name: "Villenave-d'Ornon",
    path: "/reparation-ecran-iphone-villenave-dornon",
  },
  { name: "Cenon", path: "/reparation-smartphone-cenon" },
  { name: "Floirac", path: "/reparation-smartphone-floirac" },
  { name: "Le Bouscat", path: "/reparation-smartphone-le-bouscat" },
  { name: "Le Haillan", path: "/reparation-smartphone-le-haillan" },
];

const ZonesDesservies = () => {
  return (
    <>
      <Helmet>
        <title>Zones desservies — Réparation smartphone à domicile Bordeaux Métropole | Phone Master</title>
        <meta
          name="description"
          content="Toutes les zones où intervient Phone Master. Réparation smartphone à domicile à Bordeaux, Talence, Pessac, Mérignac, Bègles, Gradignan, Cenon, Floirac, Le Bouscat, Le Haillan."
        />
        <link rel="canonical" href="https://www.phone-master.fr/zones-desservies" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Phone Master" />
        <meta property="og:title" content="Zones desservies — Réparation smartphone Bordeaux Métropole" />
        <meta property="og:description" content="Intervention à domicile dans toute Bordeaux Métropole. Garantie 6 mois, agréé QualiRépar." />
        <meta property="og:url" content="https://www.phone-master.fr/zones-desservies" />
        <meta property="og:image" content="https://www.phone-master.fr/assets/logos/og-cover.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zones desservies — Phone Master" />
        <meta name="twitter:description" content="Réparation smartphone à domicile dans toute Bordeaux Métropole." />
        <meta name="twitter:image" content="https://www.phone-master.fr/assets/logos/og-cover.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Zones desservies par Phone Master",
            itemListElement: cities.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Réparation smartphone à ${c.name}`,
              url: `https://www.phone-master.fr${c.path}`,
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.phone-master.fr/" },
              { "@type": "ListItem", position: 2, name: "Zones desservies", item: "https://www.phone-master.fr/zones-desservies" },
            ],
          })}
        </script>
      </Helmet>
      <div className="pt-24 px-6 pb-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Zones desservies
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Phone Master intervient à domicile dans toutes les zones ci-dessous :
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cities.map((city) => (
          <li key={city.name}>
            <Link
              to={city.path}
              className="block text-center p-3 border rounded-md bg-white hover:bg-[#e7f5e6] transition text-[#356a78] font-medium"
            >
              Réparation à {city.name}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default ZonesDesservies;
