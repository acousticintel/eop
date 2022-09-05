import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
//custom packages
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { modalAtom } from "../../context/modalAtom";
//dynamic
const HiOutlinePlay = dynamic(
  async () => (await import("react-icons/hi")).HiOutlinePlay
);

const heroAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

export default function Banner() {
  const [index, setIndex] = useState();
  const [content, setContent] = useRecoilState(modalAtom);

  const handleChange = (e) => {
    setIndex(e);
  };

  useEffect(() => {
    //console.log(index);
  }, [index]);

  const videos = [
    {
      name: "Famous Tv Series - A Music Drama set in Nairobi Kenya",
      file: "/videos/famous.mov",
      link: "https://player.vimeo.com/video/671400778?h=046604dc66",
    },
    {
      name: "FX Pesa (TVC)",
      file: "/videos/fxpesa.mov",
      link: "https://player.vimeo.com/video/370802795?h=b4d5aa80a7",
    },
    {
      name: "KCB Go Ahead (Docu)",
      file: "/videos/kcb.mov",
      link: "https://player.vimeo.com/video/487769594?h=6bd6d91639",
    },
    {
      name: "Kibo K160 - The Champ",
      file: "/videos/kibo.mov",
      link: "https://player.vimeo.com/video/490607436?h=35e6f62e17",
    },
    {
      name: "Sasini (TVC)",
      file: "/videos/sasini.mov",
      link: "https://player.vimeo.com/video/566433798?h=864030eadb",
    },
    {
      name: "Sky Girls - PAA (TV Series)",
      file: "/videos/sky.mov",
      link: "https://player.vimeo.com/video/671400778?h=046604dc66",
    },
  ];

  const handleClick = (name) => {
    setContent(name);
  };

  return (
    <motion.div
      variants={heroAnim}
      initial="hidden"
      animate="show"
      className="w-full relative overflow-hidden"
    >
      <Carousel
        autoPlay
        autoFocus
        infiniteLoop
        interval="7500"
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        transitionTime="1500"
        onChange={handleChange}
      >
        {videos.map((v, i) => (
          <div className="!w-full h-screen" key={i}>
            <video
              autoPlay
              muted
              loop
              style={{ height: "100%", width: "100%", objectFit: "cover" }} //object-fit:cover
            >
              <source src={v.file} type="video/mp4" />
            </video>
            <div className="legend">
              <label
                htmlFor="my-modal"
                className="video_link"
                onClick={() => handleClick(v)}
              >
                <p>{v.name}</p>
                <a>
                  <HiOutlinePlay size="2em" />
                </a>
              </label>
            </div>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
}
