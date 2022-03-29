import React from 'react';
import { Rating } from '../rating/Rating';
import Image from 'next/image';
import Link from 'next/link';
import burger from '../../assets/images/burger.jpg';
import styles from './RecipeSmall.module.css';

export const RecipeSmall = ({ rating, outOf }) => {
  return (
    <div className={styles.recipeSmall}>
      <div className={styles.imgWrap}>
        <Image className={styles.imgWrapImg} src={burger} alt='Burger' />
      </div>
      <div className={styles.text}>
        <h2 className={styles.textHeading}>
          <Link href='/'>Baked Chicken and Sausage Gumbo</Link>
        </h2>
        <p className={styles.textParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Rating rating={rating} outOf={outOf} />
        <p className={styles.textAuthor}>
          By: <Link href='/'>Chef John</Link>
        </p>
      </div>
    </div>
  );
};
