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
        <h1>
          page title
        </h1>
      </header>
      <section>
        <h2>
          section 1 title
        </h2>
      </section>
    </>
  );
};

export default Home;
