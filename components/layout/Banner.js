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
      name: "movie 1",
      file:"/images/test.mp4"
    },
    {
      name: "movie 2",
      file:"/images/test1.mp4"
    },
    {
      name: "movie 3",
      file:"/images/test2.mp4"
    },
    {
      name: "movie 4",
      file:"/images/test3.mp4"
    },
  ];

  return (
    <motion.div variants={heroAnim} initial="hidden" animate="show" className="w-full relative overflow-hidden">
      <Carousel
        autoPlay
        autoFocus
        infiniteLoop
        interval="5000"
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
              <div className="video_link">
                <p>{v.name}</p>
                <a>
                  <HiOutlinePlay size="2em" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
}
