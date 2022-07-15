import Layout from "../components/layout";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <RecoilRoot>
      <Layout path={router.route}>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
