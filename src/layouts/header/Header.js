import React from 'react';
import logo from '../../assets/images/peter-recipes-logo.jpg';
import Image from 'next/image';
import Link from 'next/link';
// import './styles.scss';

export const Header = () => {
  return (
    <header className='header'>
      <Link href='/' className='logo' passHref>
        <Image
          className='logo--img'
          src={logo}
          alt='Peter Recipes homepage'
        />
      </Link>
    </header>
  );
};
