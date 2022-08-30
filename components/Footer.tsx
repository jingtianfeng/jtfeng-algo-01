import Link from "next/link";

const Footer: React.FC<{}> = () => {
  return (
    <footer id="footer" className="border-top">
      <div className="container py-7">
        <h2 className="visually-hidden">Footer</h2>
        <h3 id="footer__sitemap" className="visually-hidden">
          Sitemap
        </h3>
        <div className="row">
          <div className="col-4">
            <h4 id="footer__sitemap__leetcode" className="mb-2">
              LeetCode
            </h4>
            <ul className="list-unstyled">
              <li>
                <Link href="/leetcode/0020-valid-parentheses">
                  <a>0020 - valid parentheses</a>
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
