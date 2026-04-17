import { Link } from "react-router-dom";
import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#ddd8cb] text-gray-600 font-body text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-3">
              <Smartphone className="h-5 w-5 text-[#c7e5c6]" />
              <span className="ml-2 font-semibold text-gray-800 text-base">
                Phone Master
              </span>
            </div>
            <p className="leading-relaxed text-sm text-gray-700">
              Réparation rapide et garantie <br />
              de smartphones à domicile <br />
              sur toute la Gironde.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Services
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/repair" className="hover:text-[#a7c9a6] transition">
                  Réparation iPhone
                </Link>
              </li>
              <li>
                <Link to="/repair" className="hover:text-[#a7c9a6] transition">
                  Réparation Samsung
                </Link>
              </li>
              <li>
                <Link to="/repair" className="hover:text-[#a7c9a6] transition">
                  Réparation Huawei
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#a7c9a6] transition">
                  Prendre RDV
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Informations
            </h3>
            <ul className="space-y-1">
              <li>
                <Link to="/contact" className="hover:text-[#a7c9a6] transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#a7c9a6] transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/zones-desservies"
                  className="hover:text-[#a7c9a6] transition"
                >
                  Villes desservies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-2">
              Contact
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#356a78]" />
                06.35.17.57.11
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#356a78]" />
                <a
                  href="mailto:phone.master.gironde@gmail.com"
                  className="hover:text-[#a7c9a6] transition"
                >
                  phone.master.gironde@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#356a78]" />
                Bordeaux, France
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Phone Master. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
