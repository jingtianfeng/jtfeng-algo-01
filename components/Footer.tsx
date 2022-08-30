import Link from "next/link";

const Footer: React.FC<{}> = () => {
  return (
    <footer id="footer" className="border-top">
      <div className="container py-7">
        <h2 className="border">
          (section title)
        </h2>
        <div className="row">
          <div className="col-4">
            <h3 id="footer__sitemap__leetcode" className="mb-2">
              LeetCode
            </h3>
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
