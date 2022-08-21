import { ReactNode } from "react";
import NavTop from "./NavTop";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavTop />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
