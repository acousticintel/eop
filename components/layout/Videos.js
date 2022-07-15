import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
//custom
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Parallax from "../elements/Parallax";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const images = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const imageAni = {
  initial: { x: 50, opacity: 0, scale: 0.75 },
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const textAni = {
  initial: { y: -40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const lineAni = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "30%",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

const buttonAni = {
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

export default function Videos() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <Element name="videos">
      <section className="h-full container my-[20vh] mx-auto" ref={ref}>
        <div className="videos_sec">
          <div className="content order-2 xl:order-1">
            <Parallax offset={50}>
              <AnimatedLetters title={"Works"} controls={controls} />
              <motion.div
                variants={lineAni}
                initial="initial"
                animate={controls}
                className="divider bg-orange-400 h-1.5"
              />
            </Parallax>
            <Parallax offset={75}>
              <motion.p variants={textAni} initial="initial" animate={controls}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eu molestie sem. Etiam gravida ligula eu arcu
                gravida, et aliquam nisi aliquam. Pellentesque a sodales elit.
                Ut scelerisque diam erat, et dignissim orci laoreet ut. Donec
                tincidunt elit ac consequat euismod. Mauris at tellus neque.
                Duis pellentesque et mi sit.
              </motion.p>
            </Parallax>
          </div>
          <motion.div
            variants={images}
            initial="initial"
            animate={controls}
            className="relative bottom-0 mr-10 -z-10 order-1 xl:order-2 row-span-2"
          >
            <Parallax offset={25}>
              <div className="absolute w-[30vw] h-[10vh] xl:h-[30vh] right-[12.5vw] xl:left-[12.5vw] bottom-0 rounded-2xl overflow-hidden z-20">
                <motion.div
                  variants={imageAni}
                  className="relative w-full h-full z-10"
                >
                  <Image
                    src="https://api.lorem.space/image/face?hash=3174"
                    layout="fill"
                    className="object-cover"
                    alt=""
                  />
                </motion.div>
              </div>
            </Parallax>
            <Parallax offset={100}>
              <div className="absolute w-[25vw] h-[10vh] xl:h-[25vh] center-ver right-[20vw] xl:left-[20vw] rounded-2xl overflow-hidden z-30">
                <motion.div
                  variants={imageAni}
                  className="relative w-full h-full z-10"
                >
                  <Image
                    src="https://api.lorem.space/image/face?hash=3175"
                    layout="fill"
                    className="object-cover"
                    alt=""
                  />
                </motion.div>
              </div>
            </Parallax>
            <Parallax offset={75}>
              <div className="absolute w-[25vw] h-[15vh] xl:h-[35vh] right-[12vw] xl:left-[12vw] rounded-2xl overflow-hidden z-40">
                <motion.div
                  variants={imageAni}
                  className="relative w-full h-full z-10"
                >
                  <Image
                    src="https://api.lorem.space/image/face?hash=3176"
                    layout="fill"
                    className="object-cover"
                    alt=""
                  />
                </motion.div>
              </div>
            </Parallax>
            <Parallax offset={100}>
              <div className="absolute w-[30vw] h-[25vh] xl:h-[35vh] center-ver right-[0] xl:left-0 mx-auto rounded-2xl overflow-hidden z-40">
                <motion.div
                  variants={imageAni}
                  className="relative w-full h-full z-20"
                >
                  <Image
                    src="/images/famous.png"
                    layout="fill"
                    className="object-cover"
                    alt=""
                    la
                  />
                </motion.div>
              </div>
            </Parallax>
          </motion.div>
        </div>
        <motion.div
          initial="initial"
          animate={controls}
          variants={buttonAni}
          className="flex justify-end px-0 xs:px-[10vw] mb-[25vh]"
        >
          <Parallax offset={100}>
            <Link href="/videos">
              <div className="fancy-button">See Our Works</div>
            </Link>
          </Parallax>
        </motion.div>
      </section>
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
      <motion.span key={i} className="row-letter" variants={letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);
