import React from 'react';
import logo from '../../assets/images/peter-recipes-logo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
// import './styles.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo} passHref>
        <Image
          className={styles.logoImg}
          src={logo}
          alt='Peter Recipes homepage'
        />
      </Link>
    </header>
  );
};
