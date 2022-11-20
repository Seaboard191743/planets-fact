import React, { useRef } from 'react';
import { InfoBtn } from '../../infobtn/InfoBtn';

export const PlanetInfo = ({ name, infoClass, handleClick, ...props }) => {
  const btnGroupRef = useRef(null);

  const handleClassSwitch = (e) => {
    Array.from(btnGroupRef.current.children).forEach(
      (elem) => (elem.style.background = 'none')
    );
    if (e.target.className === btnGroupRef.current.className) {
      e.target.style.background = props.selected;
    }
  };

  return (
    <section className='planet-info'>
      <div className='planet-info-block'>
        <h1 className='planet-name'>{name}</h1>
        <p className='planet-description'>{props[infoClass].content}</p>
        <p className='info-link'>
          Source:{' '}
          <a href={props[infoClass].source} target='_blank' rel='noreferrer'>
            Wikipedia
          </a>
        </p>
      </div>
      <div className='btn-group' ref={btnGroupRef} onClick={handleClassSwitch}>
        <InfoBtn
          className='overview'
          style={{ background: props.selected }}
          handleClick={handleClick}
        >
          <span>01</span>Overview
        </InfoBtn>
        <InfoBtn
          className='structure'
          style={{ background: 'none' }}
          handleClick={handleClick}
        >
          <span>02</span>Internal Structure
        </InfoBtn>
        <InfoBtn
          className='geology'
          style={{ background: 'none' }}
          handleClick={handleClick}
        >
          <span>02</span>Surface Geology
        </InfoBtn>
      </div>
    </section>
  );
};
