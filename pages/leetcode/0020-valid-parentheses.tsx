import type { NextPage } from "next";
import Head from "next/head";

interface Props {
  code: string;
}

const ValidParentheses: NextPage<Props> = ({ code }) => {
  return (
    <>
      <Head>
        <title>LeetCode 20: Valid Parentheses</title>
        <meta name="description" content="LeetCode 20: Valid Parentheses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id="leetcode-0020-question">
        <div className="container py-7">
          <div className="prose">
            <h1 className="text-capitalize">Valid parentheses</h1>
            <p>
              Given a string <code className="language-typescipt">s</code>
              containing just the characters
              <code className="language-typescipt">( )</code>
              <code className="language-typescipt">
                {"{"} {"}"}
              </code>
              <code className="language-typescipt">[ ]</code>, determine if the
              input string is valid.
            </p>
            <p>An input string is valid if:</p>
            <ol>
              <li>
                Open brackets must be closed by the same type of brackets.
              </li>
              <li>Open brackets must be closed in the correct order.</li>
              <li>
                Every close bracket has a corresponding open bracket of the same
                type.
              </li>
            </ol>
          </div>
        </div>
      </header>
      <section id="leetcode-0020-solution" className="border-top">
        <div className="container py-7">
          <h2 className="mb-4">Solution</h2>
          <pre>
            <code
              className="language-typescript"
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </pre>
        </div>
      </section>
      <section id="leetcode-0020-results" className="border-top">
        <div className="container py-7">
          <h2>Results</h2>
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
    "/home/jtfeng/frontend/personal/jtfeng-algo-01/solutions/leetcode/0020-valid-parentheses.ts",
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
