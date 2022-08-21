import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DS/Algo Study</title>
        <meta
          name="description"
          content="To showcase my data structure and algorithm solutions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container">
          <h1>Page title</h1>
        </div>
      </header>
      <section>
        <div className="container">
          <h2>Section title</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>The quick brown fox jumps over the lazy dog.</p>
        </div>
      </section>
    </>
  );
};

export default Home;
