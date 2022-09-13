import type { NextPage } from "next";
import Head from "next/head";
import Terminal from "../components/Terminal";
import SectionHeader from "../components/SectionHeader";

const Index: NextPage = () => {
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
      <SectionHeader heading="Status">
        <p className="lead text-uppercase">LeetCode</p>
        <p>
          Hi fellow grinders! I am currently working on the
          <em>Top Interview Questions</em> list:
        </p>
        <ul>
          <li>
            <s>0020 - Valid Parentheses</s>
          </li>
          <li>0013 - Roman to Integer</li>
          <li>0014 - Longest Common Prefix</li>
          <li>0028 - Implement strStr()</li>
        </ul>
        <p>Links to my solutions are in the footer section below!</p>
      </SectionHeader>
      <section id="index-playground" className="border-top">
        <div className="container py-7">
          <div className="row g-4">
            <div className="col-4 col-md-1 d-none d-md-block">
              <h2>Playground</h2>
            </div>
            <div className="col-4 col-md-3">
              <Terminal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
