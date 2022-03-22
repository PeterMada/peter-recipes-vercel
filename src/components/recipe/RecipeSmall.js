import React from 'react';
import { Rating } from '../rating/Rating';
import Image from 'next/image';
import Link from 'next/link';
import burger from '../../assets/images/burger.jpg';
//import './RecipeSmall.scss';

export const RecipeSmall = ({ rating, outOf }) => {
  return (
    <div className='recipe-small'>
      <div className='recipe-small__img-wrap'>
        <Image
          className='recipe-small__img-wrap--img'
          src={burger}
          alt='Burger'
        />
      </div>
      <div className='recipe-small__text'>
        <h2 className='recipe-small__text--heading'>
          <Link href='/'>Baked Chicken and Sausage Gumbo</Link>
        </h2>
        <p className='recipe-small__text--paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Rating rating={rating} outOf={outOf} />
        <p className='recipe-small__text--author'>
          By: <Link href='/'>Chef John</Link>
        </p>
      </div>
    </div>
  );
};
