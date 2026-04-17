import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RepairConfigurator from "./pages/RepairConfigurator";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import About from "./pages/About";
import LocalPage from "./pages/LocalPage";
import ZonesDesservies from "./pages/ZonesDesservies";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repair" element={<RepairConfigurator />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/zones-desservies" element={<ZonesDesservies />} />

            {/* Pages Locales SEO */}
            <Route
              path="/reparation-telephone-talence"
              element={<LocalPage city="Talence" />}
            />
            <Route
              path="/reparation-smartphone-bordeaux"
              element={<LocalPage city="Bordeaux" />}
            />
            <Route
              path="/reparateur-iphone-pessac"
              element={<LocalPage city="Pessac" />}
            />
            <Route
              path="/technicien-smartphone-domicile-gironde"
              element={<LocalPage city="la Gironde" />}
            />
            <Route
              path="/changement-ecran-telephone-begles"
              element={<LocalPage city="Bègles" />}
            />
            <Route
              path="/depannage-telephone-rapide-bordeaux"
              element={<LocalPage city="Bordeaux" />}
            />
            <Route
              path="/service-reparation-mobile-gradignan"
              element={<LocalPage city="Gradignan" />}
            />
            <Route
              path="/reparateur-mobile-merignac"
              element={<LocalPage city="Mérignac" />}
            />
            <Route
              path="/reparation-ecran-iphone-villenave-dornon"
              element={<LocalPage city="Villenave-d'Ornon" />}
            />
            <Route
              path="/reparation-smartphone-leognan"
              element={<LocalPage city="Léognan" />}
            />

            {/* Nouvelles villes - Expansion SEO */}
            <Route
              path="/reparation-smartphone-libourne"
              element={<LocalPage city="Libourne" />}
            />
            <Route
              path="/reparation-telephone-saint-medard-en-jalles"
              element={<LocalPage city="Saint-Médard-en-Jalles" />}
            />
            <Route
              path="/reparation-smartphone-lormont"
              element={<LocalPage city="Lormont" />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
