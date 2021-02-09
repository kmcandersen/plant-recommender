import starYellow from '../img/stars/star-yellow.png';
import starGray from '../img/stars/star-gray.png';
import starHalf from '../img/stars/star-half.png';

export const createStarString = (origRating) => {
  let roundedRating = Math.floor(origRating);
  let isDecimal = origRating - roundedRating > 0;
  let count = roundedRating;
  // prettier-ignore
  let stars = "";

  for (let i = 0; i < roundedRating; i++) {
    stars += `<img src=${starYellow} alt='full star' />`;
  }
  if (isDecimal) {
    stars += `<img src=${starHalf} alt='half star' />`;
    count++;
  }
  if (count < 5) {
    for (let i = count; i < 5; i++) {
      stars += `<img src=${starGray} alt='empty star' />`;
    }
  }
  return stars;
};
