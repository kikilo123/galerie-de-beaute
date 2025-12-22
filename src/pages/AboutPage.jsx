import "../styles/about-pages.css";
import SimpleHeader from "../components/SimpleHeader";
import Footer from "../components/Footer";
import { useLanguage } from "../hooks/useLanguage";
import aboutImg from "../assets/7.webp";


function About() {
  const { t } = useLanguage();

  return (
    <>
      <SimpleHeader />

      <section className="about-page">
        <div className="about-container">

          {/* ტექსტის ნაწილი */}
          <div className="about-text">
            <h1>{t.about.title}</h1>

            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
            <p>{t.about.text3}</p>
          </div>

          {/* სურათის ნაწილი */}
          <div className="about-image">
            <img src={aboutImg} alt="Galerie de Beauté salon" />
          </div>

        </div>
      </section>


    </>
  );
}

export default About;
