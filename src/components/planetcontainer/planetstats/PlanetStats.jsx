import React from 'react';
import { PlanetStatsItem } from './PlanetStatsItem';

export const PlanetStats = ({ rotation, revolution, radius, temperature }) => {
  return (
    <div className='planet-stats'>
      <PlanetStatsItem title='Rotation time' stats={rotation} />
      <PlanetStatsItem title='Revolution time' stats={revolution} />
      <PlanetStatsItem title='Radius' stats={radius} />
      <PlanetStatsItem title='Average temp.' stats={temperature} />
    </div>
  );
};
