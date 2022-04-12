import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Main } from '../src/layouts/main/Main';
import { RecipeSmall } from '../src/components/recipe/RecipeSmall';

function Home({ recipes }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peter Recipes</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main />

      <div className={styles.recipesWrap}>
        {recipes.results.map((recipe) => (
          <RecipeSmall key={recipe.title} recipe={recipe} />
        ))}
      </div>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=83c43f966d77412cad99cf8b9907e142'
  );
  const recipes = await res.json();

  return {
    props: {
      recipes,
    },
  };
}

export default Home;
