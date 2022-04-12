import "../styles/globals.css";
import { Header } from "../src/layouts/header/Header";

// https://nextjs.org/docs/advanced-features/custom-app
// used for layout and placement of headers/menu/footer/UI stuff related to layout
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>
        <title>Peter Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Component {...pageProps} />
      <footer></footer>
    </>
  );
}

export default MyApp;
