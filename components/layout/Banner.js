import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = ({ loading }) => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
    return () => { 
      window.clearInterval(timer);
    }
  }, []);

  return (
    <div className="relative">
      {!loading && (
        <div className="transition-image final">
          <motion.img
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            src={`/images/famous.png`}
            layout
            layoutId="main-image-1"
          />
        </div>
      )}
      <motion.div className="banner" variants={banner}>
        <BannerRowCenter playMarquee={playMarquee} />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 3,
          }}
          className="message-col"
        >
          <span className="row-message">
            Nyota is a talented rising star struggling with the harsh reality of
            the entertainment world;
            <br />
            <br />
            Nikita is star is fading after a series of scandals. Her producer,
            Magic, faces his own demons as he tries to keep Nikita at number
            one.
          </span>
        </motion.div>
        <BannerRowBottom />
      </motion.div>
    </div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, i) => (
      <motion.span
        key={i}
        className="row-letter"
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowBottom = () => {
  return (
    <Link to="about" smooth={true} className={"banner-row center"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className="scroll"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          down
        </motion.span>
      </motion.div>
    </Link>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className="marquee__inner"
      >
        <AnimatedLetters title={"whatever"} />
        <AnimatedLetters title={"it"} />
        <AnimatedLetters title={"takes"} />
        <AnimatedLetters title={"whatever"} />
        <AnimatedLetters title={"it"} />
        <AnimatedLetters title={"takes"} />
        <AnimatedLetters title={"whatever"} />
        <AnimatedLetters title={"it"} />
        <AnimatedLetters title={"takes"} />
        <AnimatedLetters title={"whatever"} />
        <AnimatedLetters title={"it"} />
        <AnimatedLetters title={"takes"} />
      </motion.div>
    </div>
  );
};

export default Banner;
