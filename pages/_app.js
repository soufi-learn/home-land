import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>this is header</header>
      <Component {...pageProps} />
      <footer>this is footer</footer>
    </>
  );
}
