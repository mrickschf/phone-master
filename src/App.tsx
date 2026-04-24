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
import ZonesDesservies from "./pages/ZonesDesservies";

const Layout = () => (
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
    ],
  },
];

export default routes;
