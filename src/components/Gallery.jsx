import { useState } from "react";
import "../styles/gallery.css";
import { galleryImages } from "../data/gallery";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../hooks/useLanguage";


function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useScrollAnimation();
  const { t } = useLanguage();

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );

  return ( 
    <section className="gallery fade-in" ref={ref} id="gallery">
      <h2 className="section-title">{t.gallery.title}</h2>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>×</button>
            <button className="nav-btn left" onClick={prevImage}>‹</button>

            <img
              src={galleryImages[currentIndex].src}
              alt=""
              className="modal-image"
            />

            <button className="nav-btn right" onClick={nextImage}>›</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
