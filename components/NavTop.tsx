const NavTop: React.FC<{}> = () => {
  return (
    <nav id="nav-top" 
         className="border-bottom">
      <div className="container py-5">
        <div className="row">
          <div className="col-4 col-md-1">
            <p>
              DS/Algo in TypeScipt
            </p>
          </div>
          <div className="col-4 col-md-3">
            (nav)
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavTop;
