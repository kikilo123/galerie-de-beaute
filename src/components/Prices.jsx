import "../styles/prices.css";
import { prices } from "../data/prices";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../hooks/useLanguage";

function Prices() {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="prices fade-in" ref={ref} id="prices">
      <h2 className="section-title">{t.prices.title}</h2>

      <div className="prices-grid">
        {prices.map((plan) => {
          const trPlan = t.prices.plans[plan.id];

          return (
            <div
              key={plan.id}
              className={`price-card ${
                plan.recommended ? "recommended" : ""
              }`}
            >
              {plan.recommended && (
                <span className="badge">{trPlan.badge}</span>
              )}

              <h3>{trPlan.name}</h3>
              <div className="price">{plan.price}</div>

              <ul>
                {trPlan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <a href="https://n1357038.alteg.io/company/1295591/personal/menu?o=m-1" className="price-btn" target="_blank">{t.hero.button}</a> 
              {/* <button className="price-btn">
                {trPlan.button}
              </button>  */}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Prices;
