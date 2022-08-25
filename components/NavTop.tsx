import Link from "next/link";

const NavTop: React.FC<{}> = () => {
  return (
    <nav id="nav-top" className="border-bottom">
      <div className="container py-4">
        <div className="row gy-2">
          <div className="col-4 col-md-1">
            <Link href="/">
              <a>DS/Algo in TypeScript</a>
            </Link>
          </div>
          <div className="col-4 col-md-3">
            <div className="border">(nav)</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavTop;
