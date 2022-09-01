import type { NextPage } from "next";
import Head from "next/head";

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
      <header id="index-status">
        <div className="container py-7">
          <div className="row g-4">
            <div className="col-4 col-md-1">
              <h2>Status</h2>
            </div>
            <div className="col-4 col-md-3">
              <div className="prose">
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
                <p>Links to my solutions are down in the footer section!</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Index;
