import React from 'react';
import { Star } from './Star';
//import './rating.scss';

export const Rating = ({ rating, outOf }) => {
  const fullStar = parseInt(rating);
  const halfStar = (rating % fullStar) * 100;

  return (
    <p
      className='rating'
      aria-label={`Rating is ${rating} out of ${outOf}`}>
      {Array(parseInt(outOf))
        .fill(0)
        .map((element, index) => {
          let starOpacity = 100;
          if (index > fullStar) {
            starOpacity = 0;
          } else if (index === fullStar) {
            starOpacity = halfStar;
          }

          return <Star key={index} starOpacity={starOpacity} />;
        })}
    </p>
  );
};
