import React, { useRef } from 'react';
import { InfoBtnSm } from '../../infobtn/InfoBtn';

export const InfoHorizontalBar = ({ handleClick, infoClass, ...props }) => {
  const barRef = useRef();
  const handleClassSwitch = (e) => {
    Array.from(barRef.current.children).forEach((elem) => {
      elem.style.borderBottom = 'none';
      elem.style.color = 'rgba(255, 255, 255, .2)';
    });
    e.target.style.borderBottom = `4px solid ${props.selected}`;
    e.target.style.color = '#fff';
  };
  return (
    <div className='horizontal-bar' ref={barRef} onClick={handleClassSwitch}>
      <InfoBtnSm
        className='overview screen-sm'
        style={{ borderBottom: `4px solid ${props.selected}`, color: '#fff' }}
        handleClick={handleClick}
      >
        Overview
      </InfoBtnSm>
      <InfoBtnSm className='structure screen-sm' handleClick={handleClick}>
        Structure
      </InfoBtnSm>
      <InfoBtnSm className='geology screen-sm' handleClick={handleClick}>
        Geology
      </InfoBtnSm>
    </div>
  );
};
