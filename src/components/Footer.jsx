import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import logo from "../assets/Logo.png";
import { useLanguage } from "../hooks/useLanguage";

function Footer() {
  const ref = useScrollAnimation();
  const { t } = useLanguage();
  return ( 
    <footer className="footer fade-in" ref={ref}>
     <a href="#"> <img src={logo} alt="Galerie de Beauté logo" className="footer-logo"/> </a> 

      <div className="footer-socials">
        <a href="https://www.facebook.com/profile.php?id=61573060065458&mibextid=wwXIfr&rdid=i1TYa9U5SM9A87Ez&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1MtDeiE6zj%2F%3Fmibextid%3DwwXIfr#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/galerie_2025/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@galerie.de.beaute" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>

      <p>
        © {new Date().getFullYear()} Galerie de Beauté. {t.footer.title}
      </p>
    </footer>
  );
}

export default Footer;

