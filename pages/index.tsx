import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import isValid from "../solutions/leetcode/20-valid-parentheses";

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
      <header id="index-header">
        <div className="container py-7">
          <div className="prose">
            <h1 className="text-capitalize">
              20. Valid parentheses
            </h1>
            <p>
              Given a string <code className="language-typescipt">s</code> 
              containing just the characters 
              <code className="language-typescipt">( )</code>
              <code className="language-typescipt">{'{'} {'}'}</code>
              <code className="language-typescipt">[ ]</code>
              , determine if the input string is valid.
            </p>
            <p>
              An input string is valid if:
            </p>
            <ol>
              <li>Open brackets must be closed by the same type of brackets.</li>
              <li>Open brackets must be closed in the correct order.</li>
              <li>Every close bracket has a corresponding open bracket of the same type.</li>
            </ol>
          </div>
        </div>
      </header>
      <section id="index-solution" className="border-top">
        <div className="container py-7">
          <pre>
            <code
              className="language-typescript"
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </pre>
        </div>
      </section>
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
