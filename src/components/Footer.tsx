import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 font-body">

      {/* CTA strip */}
      <div className="border-b border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-lg">Votre téléphone en panne ?</p>
            <p className="text-gray-400 text-sm mt-0.5">Diagnostic gratuit · Déplacement offert · 6j/7</p>
          </div>
          <Link
            to="/repair"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors shrink-0"
          >
            Démarrer une réparation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Grid principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <p className="text-white font-bold text-lg tracking-tight mb-3">
              Phone<span className="text-[#72b9bb]">Master</span>
            </p>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Réparation rapide et garantie de smartphones à domicile sur Bordeaux Métropole depuis 2014.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href="tel:0635175711" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 text-[#72b9bb]" />
                06 35 17 57 11
              </a>
              <a href="mailto:phone.master.gironde@gmail.com" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors truncate">
                <Mail className="h-3.5 w-3.5 text-[#72b9bb] shrink-0" />
                phone.master.gironde@gmail.com
              </a>
              <span className="inline-flex items-center gap-2 text-gray-500">
                <MapPin className="h-3.5 w-3.5 text-[#72b9bb]" />
                Bordeaux Métropole
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/repair", label: "Réparation iPhone" },
                { to: "/repair", label: "Réparation Samsung" },
                { to: "/repair", label: "Réparation Huawei" },
                { to: "/booking", label: "Prendre rendez-vous" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Informations</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/about", label: "À propos" },
                { to: "/contact", label: "Contact" },
                { to: "/zones-desservies", label: "Villes desservies" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Horaires</p>
            <table className="text-sm w-full">
              <tbody className="space-y-2">
                <tr>
                  <td className="text-gray-500 pb-2 pr-6 whitespace-nowrap">Lun – Ven</td>
                  <td className="text-gray-300 pb-2 text-right whitespace-nowrap">8h – 21h30</td>
                </tr>
                <tr>
                  <td className="text-gray-500 pb-2 pr-6 whitespace-nowrap">Samedi</td>
                  <td className="text-gray-300 pb-2 text-right whitespace-nowrap">9h – 20h</td>
                </tr>
                <tr>
                  <td className="text-gray-500 pr-6 whitespace-nowrap">Dimanche</td>
                  <td className="text-gray-300 text-right whitespace-nowrap">Fermé</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-medium">Disponible 6j/7</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} Phone Master. Tous droits réservés.</span>
          <span>Bordeaux · Mérignac · Pessac · Talence · Bègles · Gironde</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
