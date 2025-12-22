import "../styles/services-page.css";
import { useLanguage } from "../hooks/useLanguage";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function ServicesPage() {
  const { t } = useLanguage();
  const ref = useScrollAnimation();

  return (
    <section className="services-page fade-in" ref={ref}>
      <h1 className="section-title">{t.servicesPage.title}</h1>

      <div className="services-page-grid">
        {t.servicesPage.categories.map((cat, index) => (
          <div className="service-category-card" key={index}>
            <h2>{cat.title}</h2>
            <ul>
              {cat.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="services-booking">
        <a href="https://n1357038.alteg.io/company/1295591/personal/menu?o=m-1" target="_blank" className="booking-btn">
          {t.servicesPage.button}
        </a>
      </div>
    </section>
  );
}

export default ServicesPage;
