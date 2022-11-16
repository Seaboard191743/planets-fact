import React, { useState } from 'react';

import { PlanetImage } from './planetimage/PlanetImage';
import { PlanetInfo } from './planetinfo/PlanetInfo';
import { PlanetStats } from './planetstats/PlanetStats';

import { LoaderComponent } from '../../hocs/loadercomponent/LoaderComponent';
import { ErrorBoundary } from '../../hocs/errorboundary/ErrorBoundary';

import { useFetch } from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';

import db from '../../data/data.json';

import './planetcontainer.css';

export const PlanetContainer = () => {
  const { pathname } = useLocation();
  const { data, isLoading, error } = useFetch(
    db,
    'name',
    pathname.replace('/', '')
  );
  const [infoClass, setInfoClass] = useState('overview');

  const handleClick = (e) => {
    const { className } = e.target;
    setInfoClass(className);
  };

  const props = {
    ...data,
    infoClass,
    handleClick,
  };

  return (
    <div className='planet-container'>
      <LoaderComponent isLoading={isLoading}>
        <ErrorBoundary error={error}>
          <PlanetImage>
            {() => {
              return infoClass === 'geology' ? (
                <>
                  <img src={data.images['overview']} alt='planet' />
                  <img
                    className='planet-geology'
                    src={data.images[infoClass]}
                    alt='planet'
                  />
                </>
              ) : (
                <img src={data.images[infoClass]} alt='planet' />
              );
            }}
          </PlanetImage>
          <PlanetInfo {...props} />
          <PlanetStats {...data} />
        </ErrorBoundary>
      </LoaderComponent>
    </div>
  );
};
