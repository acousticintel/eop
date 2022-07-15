import { useEffect, useState } from "react";
import Image from "next/image";
//custom packages
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import YouTube from "react-youtube";

const posterAnim = {
  initial: {
    scale: 0.8,
    opacity: 0,
    transition: {
      delay: 1,
      ease: "easeInOut",
      duration: 1,
    },
  },
  norm: {
    scale: 0.8,
    opacity: 0.75,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  selected: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.25,
    },
  },
};

const overlayAnim = {
  norm: {
    opacity: 0.75,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  selected: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  hovered: {
    opacity: 0.5,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const buttonsContAnim = {
  hovered: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const buttonAnim = {
  selected: {
    x: 1000,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  hovered: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

export default function Poster({ selected, setSelected, data, index }) {
  const controls = useAnimation("norm");
  const hovControls = useAnimation("selected");
  const [ref, inView] = useInView();
  const [eventLis, setEventLis] = useState(null);
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (selected === data.name && inView) {
      controls.start("selected");
      hovControls.start("selected");
    } else {
      controls.start("norm");
      hovControls.start("norm");
    }
  }, [controls, hovControls, inView, selected, data]);

  useEffect(() => {
    if (hovered && inView) {
      hovControls.start("hovered");
    } else {
      hovControls.start("selected");
    }
  }, [controls, hovControls, inView, hovered]);

  useEffect(() => {
    if (!hovered && eventLis !== null) {
      eventLis?.pauseVideo && eventLis.pauseVideo();
    }
  }, [hovered]);

  useEffect(() => {
    //console.log(index);
  }, [index]);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      color: "white",
      autoplay: 1,
      enablejsapi: 1,
      modestbranding: 1,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    setEventLis(event.target);
  };

  return (
    <motion.div
      ref={ref}
      variants={posterAnim}
      initial="initial"
      animate={controls}
      onMouseDown={() => setHovered(true)}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="relative h-[40vh] lg:h-[60vh] w-[80vw] lg:w-full"
    >
      <motion.div
        initial="selected"
        animate={hovControls}
        variants={buttonsContAnim}
        className="absolute rounded-full bottom-10 right-10 z-50 grid justify-center"
      >
        <motion.div variants={buttonAnim} className="mx-auto">
          <div className="flex items-center w-full">
            <div className="image z-50 relative w-40 h-40 rounded-3xl overflow-hidden">
              {error ? (
                <Image
                  src={data.image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt=""
                />
              ) : (
                <YouTube
                  videoId={data.trailer}
                  opts={opts}
                  onReady={onReady}
                  onError={() => setError(true)}
                />
              )}
            </div>
            <h6 className="font-bold text-white z-50 ml-4">
              Watch
              <br />
              Trailer
            </h6>
          </div>
        </motion.div>
        <motion.div variants={buttonAnim} className="mx-auto mt-6">
          <div className="flex items-center w-full">
            <div className="image z-50 relative w-20 h-20 rounded-3xl overflow-hidden">
              <Image
                src={data.image}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt=""
              />
            </div>
            <h6 className="font-bold text-white text-lg z-50 ml-4">
              Watch on <br />
              <span className="text-2xl">Service</span>
            </h6>
          </div>
        </motion.div>
      </motion.div>
      <Image
        src={data.image}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        alt=""
      />
      <motion.div
        onClick={() => setSelected(data.name)}
        variants={overlayAnim}
        animate={hovControls}
        className="absolute w-full h-full bg-black bg-opacity-70 "
      />
      <motion.div
        onMouseDown={() => {
          setSelected(data.name);
          setHovered(true);
        }}
        onMouseOver={() => {
          setSelected(data.name);
          setHovered(true);
        }}
        className="absolute abs-center w-full h-[60%] z-40"
      />
    </motion.div>
  );
}
