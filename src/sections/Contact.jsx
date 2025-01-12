import { useState } from "react";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";
import "../styles/Contact.css";
import detectLanguage from "../util";

const Contact = () => {
  const language = detectLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      message: DOMPurify.sanitize(formData.message),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        sanitizedData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setStatus(
        language === "en"
          ? "Message sent successfully!"
          : "Mensagem enviada com sucesso!"
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(
        language === "en"
          ? "Something went wrong. Please try again."
          : "Algo deu errado. Por favor, tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact-section">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">
          {language === "en" ? "Let's talk" : "Vamos conversar"}
        </h2>
        <p className="form-description">
          {language === "en"
            ? "I'd love to hear from you!"
            : "Adoraria ouvir de você!"}
        </p>
        <div className="form-group">
          <User className="form-icon" />
          <input
            type="text"
            name="name"
            placeholder={
              language === "en" ? "Your Name" : "Seu Nome"
            }
            value={formData.name}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <Mail className="form-icon" />
          <input
            type="email"
            name="email"
            placeholder={
              language === "en" ? "Your Email" : "Seu Email"
            }
            value={formData.email}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <MessageSquare className="form-icon" />
          <textarea
            name="message"
            placeholder={
              language === "en" ? "Your Message" : "Sua Mensagem"
            }
            value={formData.message}
            onChange={handleInputChange}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="form-button" disabled={isSubmitting}>
          {language === "en" ? "Send Message" : "Enviar Mensagem"}{" "}
          <Send className="button-icon" />
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
