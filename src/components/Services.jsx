import "../styles/services.css";
import { services } from "../data/services";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";


function Services() {
  const ref = useScrollAnimation();
  const { t } = useLanguage();
  return (
    <section className="services fade-in" ref={ref} id="services">
      <h2 className="section-title">{t.services.title}</h2>

      <div className="services-grid">
        {services.map((service) => {
          const text = t.services.items.find(
            (item) => item.key === service.key
          );

          return (
            <div key={service.id} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{text.title}</h3>
              <p>{text.description}</p>
            </div>
          );
        })}
      </div>

      <div className="services-action">
        <Link to="/services" className="service-btn">
          {t.services.button}
        </Link>
      </div>
    </section>
  );
}

export default Services;



