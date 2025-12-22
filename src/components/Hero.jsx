import { useEffect, useState } from "react";
import "../styles/hero.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../hooks/useLanguage";
import { heroImages } from "../data/heroImages";

function Hero() {
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero fade-in" ref={ref} id="home">
      
      <div className="hero-content">
        <h1>{t.hero.title}</h1>
        <p>Galerie de Beauté — {t.hero.subtitle}</p>
        <a href="https://n1357038.alteg.io/company/1295591/personal/menu?o=m-1" className="hero-btn" target="_blank">{t.hero.button}</a>
      </div>

      <div className="hero-slider">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`hero-image ${i === index ? "active" : ""}`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;