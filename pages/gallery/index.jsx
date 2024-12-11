import Head from "next/head";
import React from "react";

function Gallery() {
  return (
    <>
      <Head>
        <title>Home Land | Gallery</title>
        <meta name="description" content="Gallery Images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <div>
        <h2>This is Gallery</h2>
      </div>
    </>
  );
}

export default Gallery;
