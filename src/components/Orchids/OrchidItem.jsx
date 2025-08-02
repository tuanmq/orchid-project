import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Button, Chip } from '@mui/material'; 
import './Orchids.css';

const RatingStars = ({ rating }) => (
  <div className="rating-stars">
    {[1, 2, 3, 4, 5].map((i) =>
      i <= rating ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star empty" />
    )}
  </div>
);

const OrchidItem = ({ orchid }) => {
  return (
    <div className="orchid-card">
      <div className="image-wrapper">
        <img src={orchid.image} alt={orchid.name} />

        {/* SPECIAL badge */}
        {orchid.isSpecial && (
          <Chip
            label="SPECIAL"
            size="small"
            color="secondary"
            className="badge top-left"
          />
        )}

        {/* NATURAL or HYBRID badge */}
        <Chip
          label={orchid.isNatural ? 'NATURAL' : 'HYBRID'}
          size="small"
          color={orchid.isNatural ? 'success' : 'primary'}
          className="badge top-right"
        />
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

      {/* MUI Button wrapped with React Router Link */}
      <Button
        variant="contained"
        size="small"
        component={Link}
        to={`/detail/${orchid.id}`}
        sx={{ mt: 1, borderRadius: '999px', backgroundColor: '#c084fc' }}
      >
        Detail
      </Button>
    </div>
  );
};

export default OrchidItem;
