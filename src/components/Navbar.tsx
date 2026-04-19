import React from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logos/phonemaster-logo.png";
import badge from "../assets/logos/since.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.img
                src={logo}
                alt="Phone Master Logo"
                className="h-16 w-auto object-contain md:h-48"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
          </div>

          {/* Menu Desktop avec badge juste avant les liens */}

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/about">
              <motion.img
                src={badge}
                alt="Badge since 2014"
                className="h-8 w-auto object-contain md:h-16"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>

            {["/repair", "/contact"].map((path) => (
              <motion.div
                key={path}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={path}
                  className="text-gray-700 font-bold hover:text-[#c7e5c6]"
                >
                  {path === "/repair" ? "Réparations" : "Contact"}
                </Link>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#c7e5c6] text-gray-700 font-bold px-4 py-2 rounded-md shadow hover:shadow-md transition-all"
            >
              <Phone className="h-4 w-4 inline mr-2" />
              06 35 17 57 11
            </motion.button>
          </div>

          {/* Bouton mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#c7e5c6] transition-all"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-inner overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { to: "/repair", label: "Réparations" },
                { to: "/about", label: "À propos" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-3 py-2 text-gray-700 hover:text-[#c7e5c6] font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-[#c7e5c6] text-white px-4 py-2 rounded-md"
                >
                  <Phone className="h-4 w-4 inline mr-2" />
                  06 35 17 57 11
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
