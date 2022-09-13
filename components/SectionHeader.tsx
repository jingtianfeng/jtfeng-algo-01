const SectionHeader = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <header id={"section-" + heading.toLowerCase()}>
      <div className="container py-7">
        <div className="row g-4">
          <div className="col-4 col-md-1 d-none d-md-block">
            <h1>{heading}</h1>
          </div>
          <div className="col-4 col-md-3">
            <div className="prose">{children}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
