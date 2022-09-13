import type { NextPage } from "next";
import Head from "next/head";
import Terminal from "../../components/Terminal";
import { useEffect } from "react";
import isValid from "../../solutions/leetcode/0020-valid-parentheses";
import SectionHeader from "../../components/SectionHeader";
import SectionSolution from "../../components/SectionSolution";
import SectionTesting from "../../components/SectionTesting";
import utilGetStaticProps from "../../utils/getStaticProps";

interface Props {
  code: string;
}

declare global {
  interface Window {
    isValid: (s: string) => boolean;
  }
}

const ValidParentheses: NextPage<Props> = ({ code }) => {
  useEffect(() => {
    window.isValid = isValid;
  }, []);
  return (
    <>
      <Head>
        <title>LeetCode 0020: Valid Parentheses</title>
      </Head>
      <SectionHeader heading="Question">
        <p className="lead text-uppercase">0020 - valid parentheses</p>
        <p>
          Given a string <code className="language-typescipt">s</code>
          &nbsp;containing just the characters&nbsp;
          <code className="language-typescipt">( )</code>&nbsp;
          <code className="language-typescipt">
            {"{"} {"}"}
          </code>
          &nbsp;
          <code className="language-typescipt">[ ]</code>, determine if the
          input string is valid.
        </p>
        <p>An input string is valid if:</p>
        <ol>
          <li>Open brackets must be closed by the same type of brackets.</li>
          <li>Open brackets must be closed in the correct order.</li>
          <li>
            Every closed bracket has a corresponding open bracket of the same
            type.
          </li>
        </ol>
      </SectionHeader>
      <SectionSolution code={code} />
      <SectionTesting />
    </>
  );
};

export const getStaticProps = async () =>
  await utilGetStaticProps("leetcode/0020-valid-parentheses");

export default ValidParentheses;
