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
        <p className="mb-4">
          Roman numerals are represented by seven different symbols:
          <br />
          <code className="language-typescript">I</code>&nbsp;&nbsp;
          <code className="language-typescript">V</code>&nbsp;&nbsp;
          <code className="language-typescript">X</code>&nbsp;&nbsp;
          <code className="language-typescript">L</code>&nbsp;&nbsp;
          <code className="language-typescript">C</code>&nbsp;&nbsp;
          <code className="language-typescript">D</code>&nbsp;&nbsp;
          <code className="language-typescript">M</code>
        </p>
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>I</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>V</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>X</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col col-md-2">
            <div className="py-1 px-2">
              <pre className="mb-4">
                input: s = "III"
                <br />
                Output: 3
                <br />
                Expl: III = 3
              </pre>
              <pre className="mb-4">
                input: s = "LVIII"
                <br />
                Output: 58
                <br />
                Expl: L = 50, V = 5, III = 3
              </pre>
              <pre>
                input: s = "MCMXCIV"
                <br />
                Output: 1994
                <br />
                Expl: M = 1000, CM = 900, XC = 90, IV = 4
              </pre>
            </div>
          </div>
        </div>
        <ul>
          <li>I can be placed before V (5) and X (10) to make 4 and 9.</li>
          <li>X can be placed before L (50) and C (100) to make 40 and 90.</li>
          <li>
            C can be placed before D (500) and M (1000) to make 400 and 900.
          </li>
        </ul>
      </SectionHeader>
      <SectionSolution code={code} />
      <SectionTesting arrGlobal={["romanToInt"]} />
    </>
  );
};

export const getStaticProps = async () =>
  await utilGetStaticProps("leetcode/0013-roman-to-integer");

export default RomanToInteger;
