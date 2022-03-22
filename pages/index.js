import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Main } from '../src/layouts/main/Main';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main />

      <footer className={styles.footer}></footer>
    </div>
  );
}
