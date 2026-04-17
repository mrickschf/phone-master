import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
  };

  return (
    <>
      <Helmet>
        <title>Contactez Phone Master - Support Réparation Smartphone Gironde</title>
        <meta
          name="description"
          content="Besoin d'aide pour votre smartphone? Contactez Phone Master. Support rapide, devis gratuit. Gironde - 06 35 17 57 11 - Disponible 7j/7"
        />
        <link rel="canonical" href="https://www.phone-master.fr/contact" />
      </Helmet>
      <div className="contact-container">
      <h1 className="contact-title">Contactez-nous</h1>
      <p className="contact-subtitle">
        Une question, une demande ? Nous sommes à votre écoute.
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="send-button">
          Envoyer
        </button>
      </form>
      </div>
    </>
  );
};

export default Contact;
