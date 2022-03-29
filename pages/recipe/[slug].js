import { useRouter } from 'next/router';

const Recipe = () => {
  const router = useRouter();
  const { pid } = router.query;
  return <p>Recipe detail: {pid}</p>;
};

export default Recipe;
