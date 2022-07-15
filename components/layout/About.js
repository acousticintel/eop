import Image from "next/image";
import { useEffect } from "react";
//custom packages
import { Element, Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//custom
import Parallax from "../elements/Parallax";
import { BsFillCameraReelsFill } from "react-icons/bs";

const banner = {
  animate: {
    transition: {
      delay: 2,
      staggerChildren: 0.1,
    },
  },
};

const listsAni = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.5,
    },
  },
};

const listAni = {
  initial: { x: 200, opacity: 0, scale: 0.75 },
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
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

const lineAni = {
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

const iframeAni = {
  initial: { x: 200, opacity: 0, scale: 0.75 },
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
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
      ease: "easeInOut",
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
      delay: 3,
      duration: 2,
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
    console.log("inView",inView);
  }, [controls, inView]);

  return (
    <Element name="about">
      <section className="h-full container my-[20vh] mx-auto">
        <div className="about_sec" ref={ref}>
          <Parallax offset={150}>
            <motion.div
              initial="initial"
              animate={controls}
              variants={iframeAni}
              className="iframe_cont"
            >
              <iframe
                src="https://drive.google.com/file/d/1KaChbw_pKUV8VLpQCV78QVbY2cpyqw8U/preview"
                className="responsive-iframe"
                allow="autoplay"
              />
            </motion.div>
          </Parallax>
          <div className="content">
            <div className="ml-6">
              <Parallax offset={50}>
                <AnimatedLetters title={"About"} controls={controls} />
                <motion.div
                  variants={lineAni}
                  initial="initial"
                  animate={controls}
                  className="divider bg-orange-400 h-1.5"
                />
              </Parallax>
            </div>
            <Parallax offset={75}>
              <motion.p variants={textAni} initial="initial" animate={controls}>
                <span className="text-3xl font-semibold text-orange-400">
                  E.O.P Films
                </span>{" "}
                is a production company based in Nairobi Kenya. EOP is a fully
                fledged production house that collaborates with brands to
                produce high quality content from conceptualization to full
                production focused on innovative concepts with a fresh approach.
                The combined experience of the in-house team includes a vast
                body of work in:
              </motion.p>
            </Parallax>
            <Parallax offset={100}>
              <motion.ol
                initial="initial"
                animate={controls}
                variants={listsAni}
              >
                <motion.li variants={listAni}>
                  <BsFillCameraReelsFill size="1.5em" />{" "}
                  <span>
                    {" "}
                    TV Programs (reality, magazine & scriptedcontent: both
                    series and movies)
                  </span>{" "}
                </motion.li>
                <motion.li variants={listAni}>
                  <BsFillCameraReelsFill size="1.5em" />{" "}
                  <span>Music Videos (both Kenyan and international)</span>{" "}
                </motion.li>
                <motion.li variants={listAni}>
                  <BsFillCameraReelsFill size="1.5em" />{" "}
                  <span>
                    Documentaries, live event coverage (sports/concerts)
                  </span>{" "}
                </motion.li>
                <motion.li variants={listAni}>
                  <BsFillCameraReelsFill size="1.5em" />{" "}
                  <span>TV commercials</span>{" "}
                </motion.li>
              </motion.ol>
            </Parallax>
          </div>
        </div>
        <motion.div
          initial="initial"
          animate={controls}
          variants={buttonAni}
          className="flex justify-end px-0 sm:px-[10vw]"
        >
          <Link to="videos" smooth={true}>
            <Parallax offset={100}>
              <div className="fancy-button">Our Works</div>
            </Parallax>
          </Link>
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
