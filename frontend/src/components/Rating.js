import React from 'react';
import { ReactComponent as FullStar } from './stars/star-whole.svg';
import { ReactComponent as HalfStar } from './stars/star-half.svg';

const Rating = ({ value, text }) => {
  const gray = '#959595';
  const gold = '#fad817';
  return (
    <div className='mt-3 ratings__stars'>
      {value >= 1 ? (
        <FullStar style={{ fill: `${gold}` }} />
      ) : value >= 0.5 ? (
        <HalfStar />
      ) : (
        <FullStar style={{ fill: `${gray}` }} />
      )}
      {value >= 2 ? (
        <FullStar style={{ fill: `${gold}` }} />
      ) : value >= 1.5 ? (
        <HalfStar />
      ) : (
        <FullStar style={{ fill: `${gray}` }} />
      )}
      {value >= 3 ? (
        <FullStar style={{ fill: `${gold}` }} />
      ) : value >= 2.5 ? (
        <HalfStar />
      ) : (
        <FullStar style={{ fill: `${gray}` }} />
      )}
      {value >= 4 ? (
        <FullStar style={{ fill: `${gold}` }} />
      ) : value >= 3.5 ? (
        <HalfStar />
      ) : (
        <FullStar style={{ fill: `${gray}` }} />
      )}
      {value === 5 ? (
        <FullStar style={{ fill: `${gold}` }} />
      ) : value >= 4.5 ? (
        <HalfStar />
      ) : (
        <FullStar style={{ fill: `${gray}` }} />
      )}
      <p>{text}</p>
    </div>
  );
};

export default Rating;
