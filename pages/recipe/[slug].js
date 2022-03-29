import { useRouter } from 'next/router';
import { Header } from '../../src/layouts/header/Header';

const Recipe = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <Header>
        <title>Peter Recipes</title>
        <link rel='icon' href='/favicon.ico' />
      </Header>
      <p>Recipe detail: {pid}</p>

      <footer>Footer</footer>
    </div>
  );
};

export default Recipe;
