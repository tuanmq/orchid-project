import React from 'react';
import './Orchids.css';

const OrchidDetailModal = ({ orchid, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="btn btn-danger float-end" onClick={onClose}>❌ Close</button>
        <h3>{orchid.name}</h3>
        <img src={orchid.image} alt={orchid.name} style={{ width: '100%' }} />
        <p><strong>Origin:</strong> {orchid.origin}</p>
        <p><strong>Color:</strong> {orchid.color}</p>
        <p><strong>Rating:</strong> {orchid.rating}</p>
        <p><strong>Category:</strong> {orchid.category}</p>
        <p><strong>Is Special:</strong> {orchid.isSpecial ? 'Yes' : 'No'}</p>
        <p><strong>Is Natural:</strong> {orchid.isNatural ? 'Yes' : 'Hybrid'}</p>
        <p><strong>Likes:</strong> ❤️ {orchid.numberOfLike}</p>
      </div>
    </div>
  );
};

export default OrchidDetailModal;
