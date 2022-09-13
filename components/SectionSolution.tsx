const SectionSolution = () => {
  return (
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
  );
};

export default SectionSolution;
