import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const infos = [
    { icon: Phone,   label: "Téléphone",  value: "06 35 17 57 11",                href: "tel:0635175711" },
    { icon: Mail,    label: "Email",       value: "phone.master.gironde@gmail.com", href: "mailto:phone.master.gironde@gmail.com" },
    { icon: MapPin,  label: "Zone",        value: "Bordeaux Métropole",    href: null },
    { icon: Clock,   label: "Horaires",    value: "Lun – Sam · 8h – 21h30",        href: null },
  ];

  return (
    <>
      <Helmet>
        <title>Contactez Phone Master — Réparation smartphone Bordeaux Métropole</title>
        <meta
          name="description"
          content="Besoin d'aide pour votre smartphone ? Contactez Phone Master. Devis gratuit, intervention à domicile, garantie 6 mois. Bordeaux Métropole — 06 35 17 57 11 · Lun–Sam 8h–21h30."
        />
        <link rel="canonical" href="https://www.phone-master.fr/contact" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Phone Master" />
        <meta property="og:title" content="Contactez Phone Master — Réparation smartphone Bordeaux" />
        <meta property="og:description" content="Devis gratuit, intervention à domicile, garantie 6 mois. 06 35 17 57 11." />
        <meta property="og:url" content="https://www.phone-master.fr/contact" />
        <meta property="og:image" content="https://www.phone-master.fr/assets/logos/og-cover.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contactez Phone Master" />
        <meta name="twitter:description" content="Réparation smartphone à domicile, Bordeaux Métropole." />
        <meta name="twitter:image" content="https://www.phone-master.fr/assets/logos/og-cover.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: "https://www.phone-master.fr/contact",
            name: "Contact Phone Master",
            mainEntity: {
              "@type": "Organization",
              "@id": "https://www.phone-master.fr/#organization",
              name: "Phone Master",
              telephone: "+33635175711",
              email: "phone.master.gironde@gmail.com",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+33635175711",
                  contactType: "customer service",
                  areaServed: "FR",
                  availableLanguage: ["French"],
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <div
        className="min-h-screen bg-gray-50 pt-24 pb-16 px-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Contactez-nous</h1>
            <p className="text-gray-400">Une question, une demande de devis ? On vous répond rapidement.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {/* ── Infos de contact ── */}
            <div className="md:col-span-2 flex flex-col gap-4">

              {infos.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#0b6666]/8 flex items-center justify-center shrink-0" style={{ background: "rgba(11,102,102,0.07)" }}>
                    <Icon className="w-4 h-4 text-[#0b6666]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-semibold text-gray-800 hover:text-[#0b6666] transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm font-semibold text-gray-800">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* CTA RDV */}
              <div className="bg-gray-950 rounded-2xl p-5 mt-auto">
                <p className="text-white font-semibold text-sm mb-1">Préférez un rendez-vous ?</p>
                <p className="text-gray-400 text-xs mb-4">Configurez votre réparation en ligne en 2 minutes.</p>
                <a
                  href="/repair"
                  className="inline-flex items-center gap-1.5 bg-white text-gray-900 text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Démarrer <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* ── Formulaire ── */}
            <div className="md:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0b6666]/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#0b6666]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-bold text-gray-900">Message envoyé !</p>
                  <p className="text-sm text-gray-400">On vous répond dans les plus brefs délais.</p>
                  <button
                    onClick={() => { setSent(false); setFormData({ name: "", email: "", message: "" }); }}
                    className="mt-2 text-sm text-[#0b6666] font-medium hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-5"
                >
                  <h2 className="text-base font-semibold text-gray-900">Envoyer un message</h2>

                  {/* Nom + Email côte à côte */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "name",  label: "Nom",   type: "text",  placeholder: "Jean Dupont" },
                      { id: "email", label: "Email",  type: "email", placeholder: "jean@email.com" },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id} className="flex flex-col gap-1.5">
                        <label htmlFor={id} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</label>
                        <input
                          type={type}
                          id={id}
                          name={id}
                          value={formData[id as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          required
                          className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#0b6666] focus:ring-2 focus:ring-[#0b6666]/10 transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre problème ou posez votre question..."
                      required
                      className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#0b6666] focus:ring-2 focus:ring-[#0b6666]/10 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="self-start inline-flex items-center gap-2 bg-gray-950 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all"
                  >
                    Envoyer le message
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </motion.button>
                </motion.form>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
