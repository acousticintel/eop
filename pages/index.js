import { useEffect, useState } from "react";
//custom packages
import { useRecoilValue } from "recoil";
//custom
import { loadingAtom } from "../context/loadingAtom";
import Banner from "../components/layout/Banner";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Videos from "../components/layout/Videos";

export default function Home() {
  const loading = useRecoilValue(loadingAtom);
  return (
    <>
      <Banner loading={loading} />
      <About />
      <Videos />
      <Contact />
      <Footer />
    </>
  );
}
