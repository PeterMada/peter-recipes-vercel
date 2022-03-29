import React from 'react';
import { Rating } from '../rating/Rating';
import Image from 'next/image';
import Link from 'next/link';
import burger from '../../assets/images/burger.jpg';
import styles from './RecipeSmall.module.css';

export const RecipeSmall = ({ recipe }) => {
  return (
    <div className={styles.recipeSmall}>
      <div className={styles.imgWrap}>
        <Image className={styles.imgWrapImg} src={burger} alt='Burger' />
      </div>
      <div className={styles.text}>
        <h2 className={styles.textHeading}>
          <Link href={recipe.linkToDetail}>{recipe.recipeTitle}</Link>
        </h2>
        <p className={styles.textParagraph}>{recipe.recipeSmallText}</p>
        <Rating rating={recipe.rating} outOf={recipe.outOf} />
        <p className={styles.textAuthor}>
          By: <Link href='/'>{recipe.recipeAuthor}</Link>
        </p>
      </div>
    </div>
  );
};
