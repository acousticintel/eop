import { useEffect, useState } from "react";
//custom packages
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import ReactPlayer from "react-player/lazy";
//custom
import { loadingAtom } from "../context/loadingAtom";
import Banner from "../components/layout/Banner";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Videos from "../components/layout/Videos";

export default function Home() {
  const loading = useRecoilValue(loadingAtom);
  const [hideHelper, setHideHelper] = useState(false);

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
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-black">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="py-10 flex justify-center items-center">
            <ReactPlayer controls={true} width="100%" className="player" url="https://www.youtube.com/watch?v=oPHHndqUsws&t=1s" />
          </div>
        </div>
      </div>
      <Banner />
      <About />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
}
