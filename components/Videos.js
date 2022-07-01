import Image from "next/image";
import { useEffect } from "react";
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
      <section className="videos_sec" ref={ref}>
        <div className="content">
          <div className="ml-6">
            <AnimatedLetters title={"Gallery"} controls={controls} />
          </div>
          <motion.p variants={textAni} initial="initial" animate={controls}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            eu molestie sem. Etiam gravida ligula eu arcu gravida, et aliquam
            nisi aliquam. Pellentesque a sodales elit. Ut scelerisque diam erat,
            et dignissim orci laoreet ut. Donec tincidunt elit ac consequat
            euismod. Mauris at tellus neque. Duis pellentesque et mi sit.
          </motion.p>
        </div>
        <motion.div
          variants={images}
          initial="initial"
          animate={controls}
          className="relative -top-16 -right-10 w-[1000px] h-[700px] mr-10 -z-10 hidden md:block"
        >
          <div className="absolute w-[300px] h-[250px] center-hor top-0 rounded-2xl overflow-hidden">
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
          <div className="absolute w-[300px] h-[350px] center-ver right-0 rounded-2xl overflow-hidden">
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
          <div className="absolute w-[350px] h-[250px] center-hor bottom-0 rounded-2xl overflow-hidden">
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
          <div className="absolute w-[300px] h-[300px] center-ver left-0 mx-auto rounded-2xl overflow-hidden">
            <motion.div
              variants={imageAni}
              className="relative w-full h-full z-20"
            >
              <Image
                src="/images/image-1.webp"
                layout="fill"
                className="object-cover"
                alt=""
              />
            </motion.div>
          </div>
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
