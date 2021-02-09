import React from 'react';
import starYellow from '../img/stars/star-yellow.png';
import starGray from '../img/stars/star-gray.png';
import starHalf from '../img/stars/star-half.png';
//renders HTML string in React
import parse from 'html-react-parser';

const createStarString = (origRating) => {
  let roundedRating = Math.floor(origRating);
  let isDecimal = origRating - roundedRating > 0;
  let count = roundedRating;
  let stars = '';

  for (let i = 0; i < roundedRating; i++) {
    stars += `<img src="${starYellow}" alt=''/>`;
  }
  if (isDecimal) {
    stars += `<img src=${starHalf} alt=''/>`;
    count++;
  }
  if (count < 5) {
    for (let i = count; i < 5; i++) {
      stars += `<img src=${starGray} alt=''/>`;
    }
  }
  return stars;
};

const Rating = ({ value, text }) => {
  let starString = createStarString(value);
  return (
    <div className='d-flex mt-3 card__body-reviews'>
      <div aria-label={`${value}-star rating`}>{parse(starString)}</div>
      <p className='ml-2'>{text}</p>
    </div>
  );
};

export default Rating;
