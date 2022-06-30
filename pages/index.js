import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

import Banner from "../components/layout/Banner";
import Header from "../components/layout/Header";
import Loader from "../components/layout/Loader";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";

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
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={`/images/image-2.jpg`}
                  layout
                  layoutId="main-image-1"
                />
              </div>
            )}
            <About />
            <Contact />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
