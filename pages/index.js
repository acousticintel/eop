import { useEffect, useState } from "react";
//custom packages
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
//custom
import { loadingAtom } from "../context/loadingAtom";
import Banner from "../components/layout/Banner";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Videos from "../components/layout/Videos";
import Modal from "../components/elements/Modal";

export default function Home() {
  const loading = useRecoilValue(loadingAtom);
  const [hideHelper, setHideHelper] = useState(false);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setHideHelper(true);
    }, 1550);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <main className="max-w-screen overflow-x-hidden no-scroll">
      <div className="absolute top-4 left-3 lg:left-28 z-50 pointer-events-none">
        {!loading && !hideHelper && (
          <div className="h-full w-[45vw] sm:w-72">
            <motion.img
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
              src={`/images/logo.png`}
              layout
              layoutId="main-image-1"
            />
          </div>
        )}
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <Modal />
      <Banner />
      <About />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
}
