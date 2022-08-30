import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import isValid from "../solutions/leetcode/20-valid-parentheses";
import Link from "next/link";

interface Props {
  code: string;
}

const Home: NextPage<Props> = ({ code }) => {
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
      <header id="leetcode-20-question">
        <div className="container py-7">
          <Link href="/leetcode/20-valid-parentheses">
            <a>0020 - valid parentheses</a>
          </Link>
        </div>
      </header>
    </>
  );
};

export const getStaticProps = async () => {
  // -------------------------------------------------------------------------------
  const Prism = require("prismjs");
  const loadLanguages = require("prismjs/components/index");
  require("prismjs/components/prism-typescript");
  loadLanguages(["typescript"]);
  // -------------------------------------------------------------------------------
  const code = isValid.toString();
  // -------------------------------------------------------------------------------
  return {
    props: {
      code: Prism.highlight(code, Prism.languages.typescript, "typescript"),
    },
  };
};

export default Home;
