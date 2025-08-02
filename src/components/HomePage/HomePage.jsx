import React, { useRef, useState } from 'react';
import OrchidsContainer from '../Orchids/OrchidsContainer';
import './HomePage.css';

function HomePage() {
  const orchidRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://i.etsystatic.com/23488537/r/il/7ab6b0/3114638713/il_fullxfull.3114638713_8u76.jpg',
    'https://i.etsystatic.com/23488537/r/il/2372bb/3114638957/il_570xN.3114638957_dat7.jpg',
    'https://i.etsystatic.com/43642573/r/il/fe65d1/6334540792/il_570xN.6334540792_19zy.jpg'
  ];

  const scrollToGallery = () => {
    if (orchidRef.current) {
      orchidRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to Orchid World</h1>
            <p>Discover the beauty and elegance of orchids. Shop the finest varieties curated just for you.</p>
            <button className="hero-btn" onClick={scrollToGallery}>Orchid Gallery</button>
          </div>
          <div className="hero-carousel">
            <button onClick={prevImage} className="carousel-btn">←</button>
            <img src={images[currentIndex]} alt="Orchid carousel" className="carousel-image" />
            <button onClick={nextImage} className="carousel-btn">→</button>
          </div>
        </div>
      </section>

      {/* Orchid Gallery Section */}
      <div ref={orchidRef}>
        <OrchidsContainer />
      </div>
    </>
  );
}

export default HomePage;