import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { to: "/repair", label: "Réparations" },
  { to: "/about",  label: "À propos" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile au changement de page
  React.useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav
      style={{ fontFamily: "'Inter', sans-serif" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo / Brand ── */}
          <Link to="/" className="flex items-center gap-2 group">
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                fontSize: "1.25rem",
                lineHeight: 1,
                color: "#111",
              }}
            >
              Phone<span style={{ color: "#0b6666" }}>Master</span>
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    active
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/70"
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0b6666] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── CTA desktop ── */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:0635175711"
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors px-3 py-2"
            >
              <Phone className="h-3.5 w-3.5 text-[#0b6666]" />
              06 35 17 57 11
            </a>
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/repair"
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="inline-flex items-center gap-1.5 bg-gray-950 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.1),0_3px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.12),0_6px_20px_rgba(0,0,0,0.16)] transition-all duration-200"
              >
                Prendre RDV
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile burger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === to
                      ? "bg-gray-950 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="mt-2 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="tel:0635175711"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#0b6666]" />
                  06 35 17 57 11
                </a>
                <Link
                  to="/repair"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="flex items-center justify-center bg-gray-950 text-white text-sm font-semibold px-5 py-3 rounded-xl"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
