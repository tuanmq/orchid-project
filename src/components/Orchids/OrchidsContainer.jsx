import React, { forwardRef } from 'react';
import ListOfOrchids from '../../data/ListOfOrchids';
import OrchidItem from './OrchidItem';
import './Orchids.css';

const OrchidsContainer = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
    <div className="orchid-container">
      <h2 className="orchid-title">Orchid Gallery</h2>
      <div className="orchid-grid">
        {ListOfOrchids.map((orchid) => (
          <OrchidItem key={orchid.id} orchid={orchid} />
        ))}
      </div>
    </div>
    </div>
  );
});

export default OrchidsContainer;
