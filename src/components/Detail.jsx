import React from 'react';
import { useParams } from 'react-router-dom';
import ListOfOrchids from '../data/ListOfOrchids';
import { FaStar, FaRegStar } from 'react-icons/fa';
import '../components/Orchids/Orchids.css'; // đảm bảo bạn đã import đúng file chứa style
import { Link } from 'react-router-dom';

const RatingStars = ({ rating }) => (
  <div className="rating-stars">
    {[1, 2, 3, 4, 5].map((i) =>
      i <= rating ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star empty" />
    )}
  </div>
);

const Detail = () => {
  const { id } = useParams();
  const orchid = ListOfOrchids.find(o => o.id.toString() === id);

  if (!orchid) return <p>Orchid not found.</p>;

  return (
    <div className="orchid-card orchid-detail">
      <div className="image-wrapper" style={{ position: 'relative' }}>
        <img src={orchid.image} alt={orchid.name} />
        {orchid.isSpecial && <span className="badge top-left">SPECIAL</span>}
        <span className="badge top-right">{orchid.isNatural ? 'NATURAL' : 'HYBRID'}</span>
      </div>

      <h3>{orchid.name}</h3>
      <p><strong>Origin:</strong> {orchid.origin}</p>
      <p>
        <strong>Color:</strong>
        <span className="color-circle" style={{ backgroundColor: orchid.color }} title={orchid.color}></span>
      </p>
      <p><strong>Category:</strong> {orchid.category}</p>
      <RatingStars rating={orchid.rating} />
      <p>{orchid.isSpecial && ' Special'} {orchid.isNatural ? ' Natural' : ' Hybrid'}</p>
      <p className="like-count">Likes: {orchid.numberOfLike}</p>

      <Link to="/" className="detail-button">Back to List</Link>
    </div>
  );
};

export default Detail;
