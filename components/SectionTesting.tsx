import Terminal from "./Terminal";

const SectionTesting = () => {
  return (
    <section id="section-testing" className="border-top">
      <div className="container py-7">
        <div className="row g-4">
          <div className="col-4 col-md-1 d-none d-md-block">
            <h2>Testing</h2>
          </div>
          <div className="col-4 col-md-3">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTesting;
