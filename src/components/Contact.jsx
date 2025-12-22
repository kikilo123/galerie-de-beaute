import "../styles/contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../hooks/useLanguage";

function Contact() {
  const ref = useScrollAnimation();
   const { t } = useLanguage();
  return (
    <section className="contact fade-in" ref={ref} id="contact">
      <h2 className="section-title light">{t.contact.title}</h2>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>{t.contact.address}</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+995 595 090 088</span>
          </div>

          <div className="contact-item">
            <FaClock />
            <span>{t.contact.hours}</span>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Geronti%20Kikodze%2010&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;

