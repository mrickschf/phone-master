import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { RouteRecord } from "vite-react-ssg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import RepairConfigurator from "./pages/RepairConfigurator";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import About from "./pages/About";
import LocalPage from "./pages/LocalPage";
import ServicePage from "./pages/ServicePage";
import ZonesDesservies from "./pages/ZonesDesservies";
import { trackCallClick, trackEmailClick } from "./lib/analytics";

/**
 * Hook qui intercepte les clics sur les liens tel: et mailto:
 * et pousse les événements correspondants dans le dataLayer GTM.
 * Permet de tracker les conversions sans modifier chaque composant.
 */
const useGlobalLinkTracking = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const link = target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const source = window.location.pathname || "unknown";

      if (href.startsWith("tel:")) {
        trackCallClick(source);
      } else if (href.startsWith("mailto:")) {
        trackEmailClick(source);
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true } as EventListenerOptions);
  }, []);
};

const Layout = () => {
  useGlobalLinkTracking();
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

const cityRoutes: { path: string; city: string }[] = [
  { path: "reparation-telephone-talence",           city: "Talence" },
  { path: "reparation-smartphone-bordeaux",         city: "Bordeaux" },
  { path: "reparateur-iphone-pessac",               city: "Pessac" },
  { path: "technicien-smartphone-domicile-gironde", city: "la Gironde" },
  { path: "changement-ecran-telephone-begles",      city: "Bègles" },
  { path: "depannage-telephone-rapide-bordeaux",    city: "Bordeaux" },
  { path: "service-reparation-mobile-gradignan",    city: "Gradignan" },
  { path: "reparateur-mobile-merignac",             city: "Mérignac" },
  { path: "reparation-ecran-iphone-villenave-dornon", city: "Villenave-d'Ornon" },
  { path: "reparation-smartphone-leognan",          city: "Léognan" },
  { path: "reparation-smartphone-cenon",            city: "Cenon" },
  { path: "reparation-smartphone-floirac",          city: "Floirac" },
  { path: "reparation-smartphone-le-bouscat",       city: "Le Bouscat" },
  { path: "reparation-smartphone-le-haillan",       city: "Le Haillan" },
];

// Pages services × villes (intentions transactionnelles fortes)
const serviceRoutes: { path: string; configKey: string }[] = [
  { path: "changement-ecran-iphone-bordeaux",      configKey: "ecran-iphone-bordeaux" },
  { path: "changement-ecran-iphone-talence",       configKey: "ecran-iphone-talence" },
  { path: "remplacement-batterie-iphone-bordeaux", configKey: "batterie-iphone-bordeaux" },
  { path: "reparation-iphone-domicile-bordeaux",   configKey: "iphone-domicile-bordeaux" },
  { path: "bonus-qualirepar-bordeaux",             configKey: "qualirepar-bordeaux" },
];

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,                        element: <Home /> },
      { path: "repair",                     element: <RepairConfigurator /> },
      { path: "booking",                    element: <Booking /> },
      { path: "contact",                    element: <Contact /> },
      { path: "about",                      element: <About /> },
      { path: "zones-desservies",           element: <ZonesDesservies /> },
      ...cityRoutes.map(({ path, city }) => ({
        path,
        element: <LocalPage city={city} />,
      })),
      ...serviceRoutes.map(({ path, configKey }) => ({
        path,
        element: <ServicePage configKey={configKey} />,
      })),
    ],
  },
];

export default routes;
