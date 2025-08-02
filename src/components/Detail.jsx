import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Modal, Box, Typography, Button } from '@mui/material';
import { getOrchid } from '../api';
import './Orchids/Orchids.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const token = localStorage.getItem('token');

const RatingStars = ({ rating }) => (
  <div className="rating-stars">
    {[1, 2, 3, 4, 5].map((i) =>
      i <= rating ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star empty" />
    )}
  </div>
);

const Detail = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [orchid, setOrchid] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getOrchid(id)
      .then((res) => setOrchid(res.data))
      .catch(() => {
        alert('Orchid not found');
        navigate('/');
      });
  }, [id, navigate]);

  if (!orchid) return <p>Loading...</p>;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
  const confirmed = window.confirm(`Are you sure you want to delete "${orchid.name}"?`);
  if (!confirmed) return;

  try {
    await axios.delete(`https://685e39227b57aebd2af88c6d.mockapi.io/orchid/${orchid.id}`);
    alert('Orchid deleted successfully!');
    navigate('/');
  } catch (err) {
    console.error('Failed to delete:', err);
    alert('Error deleting orchid!');
  }
};

  return (
    <div className="orchid-detail-container">
      <div className="orchid-image-section">
        <div className="image-wrapper">
          <img src={orchid.image} alt={orchid.name} className="orchid-detail-image" />
          {orchid.isSpecial && <span className="badge top-left">SPECIAL</span>}
          <span className="badge top-right">{orchid.isNatural ? 'NATURAL' : 'HYBRID'}</span>
        </div>

        {orchid.videoUrl && (
          <div className="orchid-video">
            <h4>🎥 Orchid Video</h4>
            <div className="video-wrapper">
              <iframe
                src={orchid.videoUrl}
                title="Orchid Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <div className="orchid-info-section">
        <h2 className="orchid-detail-title">{orchid.name}</h2>
        <p><strong>Origin:</strong> {orchid.origin}</p>
        <p>
          <strong>Color:</strong>{' '}
          <span className="color-circle" style={{ backgroundColor: orchid.color }}></span> {orchid.color}
        </p>
        <p><strong>Category:</strong> {orchid.category}</p>
        <p><strong>Type:</strong> {orchid.isSpecial && 'Special '} {orchid.isNatural ? 'Natural' : 'Hybrid'}</p>
        <p><strong>Likes:</strong> {orchid.numberOfLike}</p>
        <RatingStars rating={orchid.rating} />

        <div className="orchid-button-group">
  <Button onClick={handleOpen} variant="outlined">More Info</Button>
        {token && (
  <Link to={`/edit/${orchid.id}`} style={{ textDecoration: 'none' }}>
    <Button variant="contained" color="secondary">Edit</Button>
  </Link>
        )}
  <Button onClick={() => navigate('/')} variant="contained">Back to List</Button>

  {token && (
  <Button
    variant="outlined"
    color="error"
    onClick={handleDelete}
  >
    Delete
  </Button>
)}

</div>

      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          p: 4,
          backgroundColor: 'white',
          width: 400,
          borderRadius: 2,
          mx: 'auto',
          mt: '10%',
          boxShadow: 24,
        }}>
          <Typography variant="h6" mb={2}>About {orchid.name}</Typography>
          <Typography variant="body1">
            {orchid.description || 'This orchid has no description yet.'}
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Detail;
