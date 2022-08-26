import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

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
          <div className="row gy-5">
            <div className="col-4 col-lg-2 vstack gap-4">
              <h1 className="border p-5">
                The quick brown fox jumps over the lazy dog.
              </h1>
              <h2 className="border p-5">
                The quick brown fox jumps over the lazy dog.
              </h2>
            </div>
            <div className="col-4 col-lg-2 vstack gap-4">
              <h3 className="border p-4">
                The quick brown fox jumps over the lazy dog.
              </h3>
              <h4 className="border p-4">
                The quick brown fox jumps over the lazy dog.
              </h4>
              <h5 className="border p-4">
                The quick brown fox jumps over the lazy dog.
              </h5>
              <h6 className="border p-4">
                The quick brown fox jumps over the lazy dog.
              </h6>
              <p className="border p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </header>
      <section id="index-section1">
        <div className="container py-7">
          <div className="row gy-5">
            <div className="col-4 col-lg-2 vstack gap-4">
              <figure className="border p-4">
                <blockquote className="blockquote">
                  <p>A well-know quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Someone famous in
                  <cite title="Source title">Source title</cite>
                </figcaption>
              </figure>
              <div className="border p-4">
                <p>
                  You can use the mark tag to <mark>highlight</mark> text.
                </p>
                <p>
                  <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                  <em>This line rendered as italicized text.</em>
                </p>
                <p>
                  <s>This line is meant to be treated as no longer accurate.</s>
                </p>
              </div>
            </div>
            <div className="col-4 col-lg-2 vstack gap-4">
              <p className="lead border p-4">
                This is a lead paragraph. It stands out from regular paragraphs.
              </p>
              <ul className="list-unstyled border p-4">
                <li>This is a list.</li>
                <li>It appears completely unstyled.</li>
                <li>Structurally, it is still a list.</li>
                <li>This style only applies to immediate child elements.</li>
                <li>
                  Nested lists:
                  <ul>
                    <li>are unaffected by this style</li>
                    <li>will still show a bullet</li>
                    <li>and have appropriate left margin</li>
                  </ul>
                </li>
                <li>This may still come in handy in some situations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="index-section2">
        <div className="container py-7">
          <div className="row gy-5">
            <div className="col-4 col-lg-2 vstack gap-4">
              <div className="border p-4">
                <dl className="row gy-2">
                  <dt className="col-4 col-md-1">D.L.</dt>
                  <dd className="col-4 col-md-3">
                    A description list is perfect for defining terms.
                  </dd>
                  <dt className="col-4 col-md-1">D.T.</dt>
                  <dd className="col-4 col-md-3">
                    <p>Definition for the term.</p>
                    <p>And some more placeholder definition text.</p>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="col-4 col-lg-2 vstack gap-4">
              <div className="border p-4">
                <pre>
                  <code
                    className="language-typescript"
                    dangerouslySetInnerHTML={{ __html: code }}
                  />
                </pre>
              </div>
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
  const code = `
    const data = 1;
  `;
  // -------------------------------------------------------------------------------
  return {
    props: {
      code: Prism.highlight(code, Prism.languages.typescript, "typescript"),
    },
  };
};

export default Home;
