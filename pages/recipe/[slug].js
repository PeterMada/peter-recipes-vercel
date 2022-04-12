import { useRouter } from "next/router";
import { Header } from "../../src/layouts/header/Header";

const Recipe = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <p>Recipe detail: {slug}</p>
    </div>
  );
};

export default Recipe;
