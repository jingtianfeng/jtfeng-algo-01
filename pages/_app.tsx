import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "xterm/css/xterm.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
