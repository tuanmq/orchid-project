import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme/muiTheme';

import HomePage from './components/HomePage/HomePage';
import Detail from './components/Detail';
import Contact from './components/Contact';
import useTheme from './hooks/useTheme';
import About from './components/About';
import NaturalOrchidPage from './components/NaturalOrchidPage';
import AddOrchid from './components/Orchids/AddOrchid';
import EditOrchid from './components/Orchids/EditOrchid';

import './App.css';

function App() {
  const [theme, toggleTheme] = useTheme();
  const muiTheme = theme === 'dark' ? darkTheme : lightTheme;

  const [user, setUser] = useState(null);

  useEffect(() => {
    document.body.className = theme;
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          name: decoded.name,
          email: decoded.email,
          picture: decoded.picture,
          token
        });
      } catch {
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    if (!token) return;
    const decoded = jwtDecode(token);
    setUser({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      token
    });
    localStorage.setItem('token', token);
  };

  const handleLoginError = () => {
    console.error('Login Failed');
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={`App ${theme}`}>
        {/* Header */}
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
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/naturals" className="nav-link">Natural</Link>
            </nav>

            <div className="header-actions">
              <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>

              {user ? (
                <div className="user-section">
                  <img src={user.picture} alt={user.name} className="user-avatar" />
                  <span>{user.name}</span>
                  <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <GoogleLogin
                  key={theme}
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginError}
                  theme={theme === 'dark' ? 'filled_black' : 'outline'}
                  size="medium"
                />
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<Detail token={user?.token} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/naturals" element={<NaturalOrchidPage />} />
            <Route path="/add" element={<AddOrchid />} />
            <Route path="/edit/:id" element={<EditOrchid user={user} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Orchid World | 123 Flower St, Botanical City | info@orchidworld.com</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
