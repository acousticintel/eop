import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
//custom packages
import { useRecoilState } from "recoil";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
//custom
import { loadingAtom } from "../../context/loadingAtom";
//dynamic
const Header = dynamic(() => import("./Header"));
const Loader = dynamic(() => import("./Loader"));

export default function Layout({ children, path }) {
  //console.log(router.route)
  const [loading, setLoading] = useRecoilState(loadingAtom);

  useEffect(() => {
    //console.log("path", path);
  }, [path]);


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
            {children}
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
