import Image from "next/image";
import { useEffect, forwardRef } from "react";
//custom
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  initial: { x: 400, opacity: 0 },
  animate: {
    x: 0,
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

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <Element name="about">
      <section className="about_sec" ref={ref}>
        <motion.div
          variants={images}
          initial="initial"
          animate={controls}
          className="relative bottom-0 md:bottom-60 w-3/4 mr-10 -z-10 hidden xs:block"
        >
          <div className="absolute w-[150px] md:w-[600px] h-[125px] md:h-[500px] right-10 md:abs-center rounded-2xl overflow-hidden">
            <motion.div
              variants={imageAni}
              className="relative w-full h-full z-10"
            >
              <Image
                src="/images/image-4.webp"
                layout="fill"
                className="object-cover"
                alt=""
              />
            </motion.div>
          </div>
          <div className="absolute w-[125px] md:w-[500px] h-[100px] md:h-[400px] right-0 -top-10 md:bottom-10 rounded-2xl overflow-hidden">
            <motion.div
              variants={imageAni}
              className="relative w-full h-full z-20"
            >
              <Image
                src="/images/paa.png"
                layout="fill"
                className="object-cover"
                alt=""
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="content">
          <div className="ml-6">
            <AnimatedLetters title={"About"} controls={controls} />
          </div>
          <motion.p variants={textAni} initial="initial" animate={controls}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu molestie sem. Etiam gravida ligula eu arcu gravida, et aliquam
            nisi aliquam. Pellentesque a sodales elit. Ut scelerisque diam erat,
            et dignissim orci laoreet ut. Donec tincidunt elit ac consequat
            euismod. Mauris at tellus neque. Duis pellentesque et mi sit.
          </motion.p>
        </div>
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
