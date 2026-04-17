import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  ArrowLeft,
} from "lucide-react";
import emailjs from "emailjs-com";

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

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
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
    };

    emailjs
      .send(
        "service_vnryrlf",
        "template_ashisoc",
        emailParams,
        "T6mUTLjZlHYyPt4E_"
      )
      .then(() => {
        setConfirmationMessage("Votre réservation a été confirmée ! ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          date: "",
          time: "",
          notes: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du mail :", error);
        setConfirmationMessage(
          "Erreur lors de la réservation. Veuillez réessayer."
        );
      });
  };

  const handleBack = () => {
    if (from) {
      // Retour à la page exacte d'où l'utilisateur vient
      navigate(from);
    } else if (marque && modele) {
      // Retour à la page du modèle spécifique
      navigate(`/reparation/${marque}/${modele}`);
    } else if (marque) {
      // Retour à la liste des modèles de la marque
      navigate(`/reparation/${marque}`);
    } else {
      // Fallback: retour en arrière
      navigate(-1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Réservez Votre Réparation Smartphone - Phone Master | 24h</title>
        <meta
          name="description"
          content="Réservez en ligne votre réparation smartphone à domicile. Choix flexible de date/heure, devis transparent, intervention rapide. Gironde 7j/7"
        />
        <link rel="canonical" href="https://www.phone-master.fr/booking" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12 pt-20 font-body">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Bouton Retour amélioré */}
          <button
            onClick={handleBack}
            className="flex items-center text-[#c7e5c6] mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </button>

          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Réserver votre réparation
            {marque && modele && (
              <span className="block text-lg font-normal mt-1">
                {marque} {modele}
              </span>
            )}
          </h1>

          {confirmationMessage && (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
              {confirmationMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Infos personnelles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="pl-10 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#c7e5c6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="pl-10 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#c7e5c6]"
                  />
                </div>
              </div>
            </div>

            {/* Adresse & Téléphone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="pl-10 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#c7e5c6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="pl-10 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#c7e5c6]"
                  />
                </div>
              </div>
            </div>

            {/* Date & Heure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="pl-10 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#c7e5c6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Heure
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="pl-10 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#c7e5c6]"
                  >
                    <option value="">Sélectionnez une heure</option>
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Notes (facultatif)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#c7e5c6]"
                placeholder="Précisez le modèle si non spécifié, le problème rencontré, etc."
              />
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              className="w-full bg-[#c7e5c6] text-white py-3 rounded-lg font-semibold hover:bg-[#a8d4a4] transition-colors"
            >
              Confirmer la réservation
            </button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
