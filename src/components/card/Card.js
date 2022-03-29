import React from 'react';
import Image from 'next/image';
import sushi from '../../assets/images/sushi.jpg';
import styles from './Card.module.css';

// import './style.scss';

export const Card = () => {
  return (
    <div className={styles.card}>
      <Image src={sushi} alt='sushi' className={styles.cardImg} />
      <div className={styles.cardText}>
        <h1 className={styles.cardTextHeader}>
          Salmon sushi <br />
          Matcha
        </h1>
        <p className={styles.cardTextParagraph}>12 ingredients | 40 min</p>
      </div>
    </div>
  );
};
