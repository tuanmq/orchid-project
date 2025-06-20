// components/HomePage/HomePage.jsx
import React, { useRef } from 'react';
import OrchidsContainer from '../Orchids/OrchidsContainer';
import './HomePage.css'; // nếu cần style riêng

function HomePage() {
  const orchidRef = useRef(null);

  const scrollToGallery = () => {
    if (orchidRef.current) {
      orchidRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <div className="hero-image">
            <img src="https://i.etsystatic.com/23488537/r/il/7ab6b0/3114638713/il_fullxfull.3114638713_8u76.jpg" alt="Orchid showcase" />
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
