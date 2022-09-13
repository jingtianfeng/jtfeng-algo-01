const getStaticProps = async (
  pathRelSolutions: string
): Promise<{ props: { code: string } }> => {
  // -------------------------------------------------------------------------------
  const Prism = require("prismjs");
  const loadLanguages = require("prismjs/components/index");
  require("prismjs/components/prism-typescript");
  loadLanguages(["typescript"]);
  // -------------------------------------------------------------------------------
  const fs = require("fs/promises");
  const code = await fs.readFile("solutions/" + pathRelSolutions + ".ts", {
    encoding: "utf-8",
  });
  // -------------------------------------------------------------------------------
  return {
    props: {
      code: Prism.highlight(code, Prism.languages.typescript, "typescript"),
    },
  };
};

export default getStaticProps;
