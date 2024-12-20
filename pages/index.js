import HomesList from "@/components/homes/HomesList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Land | Soufi learn</title>
        <meta name="description" content="HomeLand Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <h1>Welcome To Home Page</h1>
      <HomesList />
    </>
  );
}
