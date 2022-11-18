import React from 'react';

export const PlanetStatsItem = ({ title, stats }) => {
  return (
    <div className='planet-stats-item'>
      <p className='planet-stats-title'>{title}</p>
      <p className='planet-stats-metric'>{stats}</p>
    </div>
  );
};
