import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Detail from './components/Detail';
import Contact from './components/Contact';
import useTheme from './hooks/useTheme';
import SmartScrollToTop from './components/SmartScrollToTop'; // <-- Thêm ở đây
import './App.css';

function App() {
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    document.body.className = theme;
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <Router>
      <SmartScrollToTop /> {/* <-- Và thêm ở đây */}
      <div className={`App ${theme}`}>
        <header className="header">
          <div className="header-center">
            <div className="logo-section">
              <img
                src="https://png.pngtree.com/png-clipart/20230810/original/pngtree-isolated-orchid-logo-design-on-white-background-beauty-logo-disjunct-botanical-vector-picture-image_10245683.png"
                alt="Orchid Logo"
                className="logo-image"
              />
              <h1 className="logo-text">Orchid World</h1>
            </div>
            <nav className="main-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<div className="main-content"><Detail /></div>} />
          <Route path="/contact" element={<div className="main-content"><Contact /></div>} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2025 Orchid World | 123 Flower St, Botanical City | info@orchidworld.com</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
