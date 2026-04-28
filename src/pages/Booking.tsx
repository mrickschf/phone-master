import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  ArrowLeft,
  ArrowRight,
  Smartphone,
} from "lucide-react";
import emailjs from "emailjs-com";

const availableTimes = [
  "09:00","10:00","11:00","12:00",
  "14:00","15:00","16:00","17:00","18:00","19:00","20:00",
];

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { marque, modele, from } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_vnryrlf",
        "template_ashisoc",
        {
          to_name: "Admin",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          address: formData.address,
          date: formData.date,
          time: formData.time,
          notes: formData.notes || "Aucune note",
          marque: marque || "Non spécifiée",
          modele: modele || "Non spécifié",
        },
        "T6mUTLjZlHYyPt4E_"
      )
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  };

  const handleBack = () => {
    if (from) navigate(from);
    else if (marque && modele) navigate(`/reparation/${marque}/${modele}`);
    else if (marque) navigate(`/reparation/${marque}`);
    else navigate(-1);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#0b6666] focus:ring-2 focus:ring-[#0b6666]/10 transition-all bg-white";

  return (
    <>
      <Helmet>
        <title>Réservez Votre Réparation Smartphone - Phone Master | 24h</title>
        <meta
          name="description"
          content="Réservez en ligne votre réparation smartphone à domicile. Choix flexible de date/heure, devis transparent, intervention rapide. Bordeaux Métropole 6j/7"
        />
        <link rel="canonical" href="https://www.phone-master.fr/booking" />
      </Helmet>

      <div
        className="min-h-screen bg-gray-50 pt-24 pb-16 px-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-2xl mx-auto">

          {/* Retour */}
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 mb-6 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-white transition-all border border-transparent hover:border-gray-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>

          {/* Titre */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Réserver votre réparation
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Remplissez le formulaire, on vous confirme rapidement.
            </p>
          </div>

          {/* Récap appareil */}
          {marque && modele && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-4 mb-6 shadow-sm"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(11,102,102,0.08)" }}
              >
                <Smartphone className="w-5 h-5 text-[#0b6666]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                  Appareil sélectionné
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {marque} {modele}
                </p>
              </div>
            </motion.div>
          )}

          {/* Carte formulaire */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(11,102,102,0.10)" }}
                  >
                    <svg
                      className="w-7 h-7 text-[#0b6666]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-bold text-gray-900">Réservation confirmée !</p>
                  <p className="text-sm text-gray-400">
                    Vous recevrez une confirmation par email. On vous contacte très vite.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name:"", email:"", phone:"", address:"", date:"", time:"", notes:"" });
                    }}
                    className="mt-2 text-sm text-[#0b6666] font-medium hover:underline"
                  >
                    Faire une autre réservation
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-5"
                >
                  <h2 className="text-base font-semibold text-gray-900">
                    Vos coordonnées
                  </h2>

                  {/* Nom + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Nom complet", type: "text", placeholder: "Jean Dupont", icon: User },
                      { id: "email", label: "Email", type: "email", placeholder: "jean@email.com", icon: Mail },
                    ].map(({ id, label, type, placeholder, icon: Icon }) => (
                      <div key={id} className="flex flex-col gap-1.5">
                        <label htmlFor={id} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {label}
                        </label>
                        <div className="relative">
                          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                          <input
                            type={type}
                            id={id}
                            name={id}
                            value={formData[id as keyof typeof formData]}
                            onChange={handleInputChange}
                            placeholder={placeholder}
                            required
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Téléphone + Adresse */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "phone", label: "Téléphone", type: "tel", placeholder: "06 12 34 56 78", icon: Phone },
                      { id: "address", label: "Adresse", type: "text", placeholder: "12 rue de la Paix, Bordeaux", icon: MapPin },
                    ].map(({ id, label, type, placeholder, icon: Icon }) => (
                      <div key={id} className="flex flex-col gap-1.5">
                        <label htmlFor={id} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {label}
                        </label>
                        <div className="relative">
                          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                          <input
                            type={type}
                            id={id}
                            name={id}
                            value={formData[id as keyof typeof formData]}
                            onChange={handleInputChange}
                            placeholder={placeholder}
                            required
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Séparateur */}
                  <div className="border-t border-gray-100 pt-1">
                    <h2 className="text-base font-semibold text-gray-900 mb-4">
                      Date & heure souhaitées
                    </h2>

                    {/* Date */}
                    <div className="flex flex-col gap-1.5 mb-4">
                      <label htmlFor="date" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className={`${inputClass} pl-10`}
                        />
                      </div>
                    </div>

                    {/* Heure — pills */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        Heure
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {availableTimes.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData((p) => ({ ...p, time: t }))}
                            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                              formData.time === t
                                ? "bg-[#0b6666] text-white border-[#0b6666]"
                                : "bg-white text-gray-600 border-gray-200 hover:border-[#0b6666] hover:text-[#0b6666]"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      {/* Champ caché pour la validation */}
                      <input type="hidden" name="time" value={formData.time} required />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="notes" className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Notes <span className="normal-case font-normal text-gray-400">(facultatif)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Décrivez le problème, précisez le modèle si besoin…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Erreur */}
                  {status === "error" && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                    </p>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading" || !formData.time}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="self-start inline-flex items-center gap-2 bg-gray-950 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Confirmer la réservation
                        <ArrowRight className="w-4 h-4 opacity-70" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </>
  );
};

export default Booking;
