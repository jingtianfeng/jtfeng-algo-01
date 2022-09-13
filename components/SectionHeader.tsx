const SectionHeader = () => {
  return (
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
  );
};

export default SectionHeader;
