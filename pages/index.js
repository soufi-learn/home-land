import Head from "next/head";
import EstateList from "./estate-list";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Land | Soufi learn</title>
        <meta name="description" content="HomeLand Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <EstateList />
    </>
  );
}
