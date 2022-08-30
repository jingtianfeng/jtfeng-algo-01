import Link from "next/link";

const Footer: React.FC<{}> = () => {
  return (
    <footer id="footer" className="border-top">
      <div className="container py-7">
        <h3 id="footer__sitemap" 
            className="mb-4">
          Sitemap
        </h3>
        <div className="row">
          <div className="col-4">
            <h4 id="footer__sitemap__leetcode" className="mb-2">
              LeetCode
            </h4>
            <ul className="list-unstyled">
              <li>
                <Link href="/leetcode/20-valid-parentheses">
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
