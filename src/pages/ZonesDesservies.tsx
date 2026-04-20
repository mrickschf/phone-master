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
  { name: "Léognan", path: "/reparation-smartphone-leognan" },
];

const ZonesDesservies = () => {
  return (
    <>
      <Helmet>
        <title>Zones Desservies - Réparation à Domicile Bordeaux Métropole | Phone Master</title>
        <meta
          name="description"
          content="Découvrez toutes les zones où intervient Phone Master. Réparation smartphone à domicile à Bordeaux, Talence, Pessac, Mérignac et alentours."
        />
        <link rel="canonical" href="https://www.phone-master.fr/zones-desservies" />
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
