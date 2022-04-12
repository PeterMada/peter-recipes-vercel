import { useRouter } from 'next/router';
import { Header } from '../../src/layouts/header/Header';

const Recipe = () => {
  const router = useRouter();

  return (
    <div>
      <Header>
        <title>Peter Recipes</title>
        <link rel='icon' href='/favicon.ico' />
      </Header>
      <p>Recipe detail</p>

      <footer>Footer</footer>
    </div>
  );
};

export default Recipe;
