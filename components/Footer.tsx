import Link from "next/link";

const Footer: React.FC<{}> = () => {
  return (
    <footer id="footer" className="border-top">
      <div className="container py-7">
        <h2 className="visually-hidden">Footer</h2>
        <h3 id="footer__sitemap" className="visually-hidden">
          Sitemap
        </h3>
        <div className="row g-4">
          <div className="col-4 col-md-1 d-none d-md-block">
            <h4 id="footer__sitemap__leetcode">LeetCode</h4>
          </div>
          <div className="col-4 col-md-3">
            <ul className="list-unstyled">
              <li>
                <Link href="/leetcode/0020-valid-parentheses">
                  <a>0020 - valid parentheses</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-4 col-md-1 d-none d-md-block">
            <h4 id="footer__sitemap__misc">Misc</h4>
          </div>
          <div className="col-4 col-md-3">
            <ul className="list-unstyled">
              <li>
                <Link href="/">
                  <a>back to home</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
