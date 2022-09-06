import type { NextPage } from "next";
import Head from "next/head";
import Terminal from "../../components/Terminal";

interface Props {
  code: string;
}

const ValidParentheses: NextPage<Props> = ({ code }) => {
  return (
    <>
      <Head>
        <title>LeetCode 0020: Valid Parentheses</title>
      </Head>
      <header id="leetcode-0020-question">
        <div className="container py-7">
          <div className="row g-4">
            <div className="col-4 col-md-1 d-none d-md-block">
              <h1>Question</h1>
            </div>
            <div className="col-4 col-md-3">
              <div className="prose">
                <p className="lead text-uppercase">0020 - valid parentheses</p>
                <p>
                  Given a string <code className="language-typescipt">s</code>
                  &nbsp;containing just the characters&nbsp;
                  <code className="language-typescipt">( )</code>&nbsp;
                  <code className="language-typescipt">
                    {"{"} {"}"}
                  </code>
                  &nbsp;
                  <code className="language-typescipt">[ ]</code>, determine if
                  the input string is valid.
                </p>
                <p>An input string is valid if:</p>
                <ol>
                  <li>
                    Open brackets must be closed by the same type of brackets.
                  </li>
                  <li>Open brackets must be closed in the correct order.</li>
                  <li>
                    Every closed bracket has a corresponding open bracket of the
                    same type.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="leetcode-0020-solution" className="border-top">
        <div className="container py-7">
          <div className="row g-4">
            <div className="col-4 col-md-1 d-none d-md-block">
              <h2>Solution</h2>
            </div>
            <div className="col-4 col-md-3">
              <pre>
                <code
                  className="language-typescript"
                  dangerouslySetInnerHTML={{ __html: code }}
                />
              </pre>
            </div>
          </div>
        </div>
      </section>
      <section id="leetcode-0020-testing" className="border-top">
        <div className="container py-7">
          <div className="row g-4">
            <div className="col-4 col-md-1 d-none d-md-block">
              <h2>Testing</h2>
            </div>
            <div className="col-4 col-md-3">
              <Terminal/>
            </div>
          </div>
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
  const fs = require("fs/promises");
  const code = await fs.readFile(
    "solutions/leetcode/0020-valid-parentheses.ts",
    { encoding: "utf-8" }
  );
  // -------------------------------------------------------------------------------
  return {
    props: {
      code: Prism.highlight(code, Prism.languages.typescript, "typescript"),
    },
  };
};

export default ValidParentheses;
