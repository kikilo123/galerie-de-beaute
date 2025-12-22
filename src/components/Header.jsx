import "../styles/header.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import logo from "../assets/Logo.png";
import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";


function Header() {
  const ref = useScrollAnimation();
  const { t,lang, setLang} = useLanguage();
  return (
    <header className="header fade-in" ref={ref}>
      <div className="logo svg-logo">
      <img src={logo} alt="Galerie de Beauté logo"/>
      </div>

      <nav className="nav">
      <a href="#home">{t.nav.home}</a>
      <a href="#services">{t.nav.services}</a>
      <a href="#prices">{t.nav.prices}</a>
      <Link to="/about" className="nav-link">{t.nav.about}</Link>
      <a href="#gallery">{t.nav.gallery}</a>
      <a href="#contact">{t.nav.contact}</a>
      </nav>

      <div className="lang-switch">
        <button className={lang === "ka" ? "active" : ""} onClick={() => setLang("ka")}>KA</button>
        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>RU</button>
      </div>
    </header>
  );
}

export default Header;