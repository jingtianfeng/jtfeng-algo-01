import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

interface Props {
  code: string;
}

const Index: NextPage<Props> = ({ code }) => {
  return (
    <>
      <Head>
        <title>DS/Algo in TypeScript</title>
        <meta
          name="description"
          content="To showcase my data structure and algorithm solutions in TypeScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id="index-question">
        <div className="container py-7">
          <h2 className="border">(section title)</h2>
        </div>
      </header>
    </>
  );
};

export default Index;
