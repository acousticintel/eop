import { useEffect } from "react";
import Image from "next/image";
//custom packages
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Parallax from "../elements/Parallax";
import Link from "next/link";
import Poster from "../elements/Poster";
import { content } from "../../context/data";

const banner = {
  animate: {
    transition: {
      delay: 2,
      staggerChildren: 0.1,
    },
  },
};

const letterAnim = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const lineAnim = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "30%",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const buttonAnim = {
  initial: { x: 200, opacity: 0, scale: 0.75 },
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export default function Videos1() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  return (
    <Element name="videos">
      <div ref={ref}>
        <div className="ml-5 my-20 max-w-fit">
          <AnimatedLetters title={"Our Works"} controls={controls} />
          <motion.div
            variants={lineAnim}
            initial="initial"
            animate={controls}
            className="divider bg-orange-400 h-1.5 -mt-5"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full mt-5">
          {content?.length > 0 &&
            content
              .slice(0, 12)
              .map((v, i) => (
                <Poster key={i} index={i} data={v} controls={controls} />
              ))}
        </div>
        <motion.div
          initial="initial"
          animate={controls}
          variants={buttonAnim}
          className="flex justify-center sm:justify-end px-0 xs:px-[10vw] mb-[25vh]"
        >
          <Parallax offset={100}>
            <Link href="/videos">
              <div className="fancy-button">See more Works</div>
            </Link>
          </Parallax>
        </motion.div>
      </div>
    </Element>
  );
}

const AnimatedLetters = ({ title, controls }) => (
  <motion.span
    className="row-title"
    variants={banner}
    initial="initial"
    animate={controls}
  >
    {[...title].map((letter, i) => (
      <motion.span key={i} className="row-letter" variants={letterAnim}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);
