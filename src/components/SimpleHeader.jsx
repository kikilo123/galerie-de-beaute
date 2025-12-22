import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/simple-header.css";
import logo from "../assets/Logo.png";

function SimpleHeader() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="simple-header">
      {/* LOGO — აბრუნებს მთავარ გვერდზე */}
      <Link to="/" className="logo">
        <img src={logo} alt="Galerie de Beauté logo" />
      </Link>

      {/* დაბრუნება მთავარ გვერდზე */}
      <Link to="/" className="back-btn">
        <span className="back-icon">←</span>
        <span className="back-text">
          {lang === "ka"
            ? "მთავარ გვერდზე დაბრუნება"
            : lang === "ru"
            ? "На главную"
            : "Back to home"}
        </span>
      </Link>

      {/* ენის გადამრთველი */}
      <div className="lang-switch">
        <button
          className={lang === "ka" ? "active" : ""}
          onClick={() => setLang("ka")}
        >
          KA
        </button>
        <button
          className={lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
        >
          EN
        </button>
        <button
          className={lang === "ru" ? "active" : ""}
          onClick={() => setLang("ru")}
        >
          RU
        </button>
      </div>
    </header>
  );
}

export default SimpleHeader;
