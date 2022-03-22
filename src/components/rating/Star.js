import React from 'react';

export const Star = ({ starOpacity }) => {
  let starFill = 'url(#half)';

  if (starOpacity === 0) {
    starFill = '#ffffff';
  } else if (starOpacity === 100) {
    starFill = '#fed94b';
  }

  return (
    <>
      <svg
        className='rating__star'
        width='16'
        height='16'
        viewBox='0 0 16 16'>
        <use xlinkHref='#star' fill={starFill} stroke='gray'></use>
      </svg>
    </>
  );
};
