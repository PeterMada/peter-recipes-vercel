import React from 'react';
import { Rating } from '../rating/Rating';
import Image from 'next/image';
import Link from 'next/link';
import burger from '../../assets/images/burger.jpg';
import styles from './RecipeSmall.module.css';

export const RecipeSmall = ({ recipe }) => {
  const randomValue = Math.floor(Math.random() * 5);
  console.log(randomValue);
  console.log(recipe);

  return (
    <div className={styles.recipeSmall}>
      <div className={styles.imgWrap}>
        <Image
          className={styles.imgWrapImg}
          src={recipe.image}
          alt={recipe.title}
          layout='responsive'
          width={1400}
          height={1400}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.textHeading}>
          <Link href={`recipe/${encodeURIComponent(recipe.title)}`}>
            {recipe.title}
          </Link>
        </h2>
        <p className={styles.textParagraph}>{recipe.title}</p>
        <Rating rating={randomValue} outOf={5} />
        <p className={styles.textAuthor}>
          By: <Link href='/'>TEST NAME</Link>
        </p>
      </div>
    </div>
  );
};
