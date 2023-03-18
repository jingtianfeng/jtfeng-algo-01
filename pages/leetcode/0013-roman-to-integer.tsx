import type { NextPage } from "next";
import Head from "next/head";
import Terminal from "../../components/Terminal";
import { useEffect } from "react";
import romanToInt from "../../solutions/leetcode/0013-roman-to-integer";
import SectionHeader from "../../components/SectionHeader";
import SectionSolution from "../../components/SectionSolution";
import SectionTesting from "../../components/SectionTesting";
import utilGetStaticProps from "../../utils/getStaticProps";

interface Props {
  code: string;
}

declare global {
  interface Window {
    romanToInt: (s: string) => number;
  }
}

const RomanToInteger: NextPage<Props> = ({ code }) => {
  useEffect(() => {
    window.romanToInt = romanToInt;
  }, []);
  return (
    <>
      <Head>
        <title>LeetCode 0013: Roman To Integer</title>
      </Head>
      <SectionHeader heading="Question">
        <p className="lead text-uppercase">0013 - roman to integer</p>
      </SectionHeader>
      <SectionSolution code={code} />
      <SectionTesting arrGlobal={["romanToInt"]} />
    </>
  );
};

export const getStaticProps = async () =>
  await utilGetStaticProps("leetcode/0013-roman-to-integer");

export default RomanToInteger;
