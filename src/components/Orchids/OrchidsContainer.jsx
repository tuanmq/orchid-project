import React, { forwardRef, useEffect, useState } from 'react';
import axios from 'axios';
import OrchidItem from './OrchidItem';
import './Orchids.css';
import { useNavigate } from 'react-router-dom';

const OrchidsContainer = forwardRef((props, ref) => {
  const [orchids, setOrchids] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');


  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL)
      .then((res) => {
        setOrchids(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch orchids:', err);
        alert('Error fetching orchid data!');
        setLoading(false);
      });
  }, []);

  return (
    <section className="orchids-section" ref={ref}>
      <div className="orchid-container">
        <h2 className="orchid-title">Orchid Gallery</h2>

        {token && (
    <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
      <button
        className="add-orchid-btn"
        onClick={() => navigate('/add')}
      >
        Add Orchid
      </button>
    </div>
  )}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="orchid-grid">
            {orchids.map((orchid) => (
              <OrchidItem key={orchid.id} orchid={orchid} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
});

export default OrchidsContainer;
