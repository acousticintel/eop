import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
//custom packages
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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

  const handleChange = (e) => {
    setIndex(e);
  };

  useEffect(() => {
    //console.log(index);
  }, [index]);

  const videos = [
    {
      name: "Famous (TV Series)",
      file:"/videos/famous.mov"
    },
    {
      name: "FX Pesa (TVC)",
      file:"/videos/fxpesa.mov"
    },
    {
      name: "KCB Go Ahead (Docu)",
      file:"/videos/kcb.mov"
    },
    {
      name: "Kibo (TVC)",
      file:"/videos/kibo.mov"
    },
    {
      name: "Sasini (TVC)",
      file:"/videos/sasini.mov"
    },
    {
      name: "Sky Girls - PAA (TV Series)",
      file:"/videos/sky.mov"
    },
  ];

  return (
    <motion.div variants={heroAnim} initial="hidden" animate="show" className="w-full relative overflow-hidden">
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
              <label htmlFor="my-modal" className="video_link">
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
