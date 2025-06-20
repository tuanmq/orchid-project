import React from 'react';
import { Link } from 'react-router-dom';
import './Orchids.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= rating ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star empty" />
      )}
    </div>
  );
};

const OrchidItem = ({ orchid }) => {
  return (
    <div className="orchid-card">
      <div className="image-wrapper">
        <img src={orchid.image} alt={orchid.name} />
        {orchid.isSpecial && <span className="badge top-left">SPECIAL</span>}
        <span className="badge top-right">{orchid.isNatural ? 'NATURAL' : 'HYBRID'}</span>
      </div>
      <h3>{orchid.name}</h3>
      <p><strong>Origin:</strong> {orchid.origin}</p>
      <p>
        <strong>Color:</strong>
        <span
          className="color-circle"
          style={{ backgroundColor: orchid.color }}
          title={orchid.color}
        ></span>
      </p>
      <p><strong>Category:</strong> {orchid.category}</p>
      <RatingStars rating={orchid.rating} />
      <p>{orchid.isSpecial && ' Special'} {orchid.isNatural ? ' Natural' : ' Hybrid'}</p>
      <p className="like-count">Likes: {orchid.numberOfLike}</p>

      <Link to={`/detail/${orchid.id}`} className="detail-button">
        Detail
      </Link>
    </div>
  );
};

export default OrchidItem;
