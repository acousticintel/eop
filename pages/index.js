import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

import Banner from "../components/layout/Banner";
import Header from "../components/layout/Header";
import Loader from "../components/layout/Loader";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Videos from "../components/Videos";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner loading={loading}/>
            <About />
            <Videos />
            <Contact />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
