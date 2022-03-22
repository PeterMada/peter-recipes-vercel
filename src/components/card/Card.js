import React from 'react';
import Image from 'next/image';
import sushi from '../../assets/images/sushi.jpg';

// import './style.scss';

export const Card = () => {
  return (
    <div className='card'>
      <Image src={sushi} alt='sushi' className='card__img' />
      <div className='card__text'>
        <h1 className='card__text--header'>
          Salmon sushi <br />
          Matcha
        </h1>
        <p className='card__text--paragraph'>12 ingredients | 40 min</p>
      </div>
    </div>
  );
};
