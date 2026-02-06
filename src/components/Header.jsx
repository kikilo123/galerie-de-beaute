import "../styles/header.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import logo from "../assets/Logo.png";
import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";
import { useState } from "react";


function Header() {
  const ref = useScrollAnimation();
  const { t,lang, setLang} = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header fade-in" ref={ref}>
      <div className="logo svg-logo">
        <img src={logo} alt="Galerie de Beauté logo"/>
      </div>
      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        >

        
        <span></span>
        <span></span>
        <span></span>
      </div>
     

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>{t.nav.home}</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
        <a href="#prices" onClick={() => setMenuOpen(false)}>{t.nav.prices}</a>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
          {t.nav.about}
        </Link>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>{t.nav.gallery}</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>

        {/* Language switch mobile-ში */}
        <div className="lang-switch mobile-lang">
          <button className={lang === "ka" ? "active" : ""} onClick={() => setLang("ka")}>KA</button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
        </div>
      </nav>

      <div className="lang-switch desktop-lang">
        <button className={lang === "ka" ? "active" : ""} onClick={() => setLang("ka")}>KA</button>
        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
      </div>
    </header>
  );
}

export default Header;