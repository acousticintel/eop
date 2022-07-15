import { useEffect, useState } from "react";
//custom packages
import { motion } from "framer-motion";
import { Element, scroller } from "react-scroll";
import { useRecoilValue } from "recoil";
//custom
import Poster from "../components/elements/Poster";
import { loadingAtom } from "../context/loadingAtom";

let projects = [
  {
    name: "Famous",
    trailer: "oPHHndqUsws",
    image: "/images/famous.png",
  },
  {
    name: "Paa",
    trailer: "e-gVjh6nS3M",
    image: "/images/paa.png",
  },
  {
    name: "Project1",
    trailer: "oPHHndqUsws",
    image: "https://api.lorem.space/image/movie?hash=96782",
  },
  {
    name: "Project2",
    trailer: "e-gVjh6nS3M",
    image: "https://api.lorem.space/image/movie?hash=84634",
  },
];

const listsAni = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const listAni = {
  initial: { x: 10, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const postersAni = {
  animate: {
    transition: {
      delayChildren: 5,
      staggerChildren: 0.5,
    },
  },
};

const posterAni = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function VideosPage() {
  const loading = useRecoilValue(loadingAtom);
  const [point, setPoint] = useState(false);
  const [project, setProject] = useState(
    projects?.length > 0 ? projects[0]?.name : ""
  );

  async function scrollToImage() {
    if (window.innerWidth <= 1024) {
      let spacer = (window.innerWidth * 10) / 100;
      scroller.scrollTo(project, {
        duration: 1500,
        smooth: true,
        horizontal: true,
        containerId: "content",
        smooth: "easeInOutQuint",
        offset: -spacer, // Scrolls to element + 50 pixels down the page
      });
    } else {
      let spacer = (window.innerHeight * 10) / 100;
      scroller.scrollTo(project, {
        duration: 1500,
        smooth: true,
        containerId: "content",
        smooth: "easeInOutQuint",
        offset: -spacer, // Scrolls to element + 50 pixels down the page
      });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setPoint(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (window && project !== "") {
      scrollToImage();
    }
  }, [project]);

  return (
    <section className="videos_page">
      <div className="grid lg:grid-cols-2">
        <motion.div
          variants={listsAni}
          initial="initial"
          animate="animate"
          className="projects"
        >
          {projects.map((p, i) => (
            <motion.div variants={listAni} className="p-6 lg:w-full" key={i}>
              <li
                className={`${p.name === project ? "selected" : ""} ${
                  point ? "pointer-events-auto" : "pointer-events-none"
                }`}
                onMouseOver={() => setProject(p.name)}
              >
                {p.name}
              </li>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute w-[80vw] lg:w-[40vw] h-[40vh] lg:h-[59vh] bottom-[9vh] lg:top-[17vh] left-0 lg:left-[52vw] z-50 pointer-events-none">
          {!loading && (
            <motion.img
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
              src={`/images/famous.png`}
              layout
              layoutId="main-image-1"
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <motion.div
          variants={postersAni}
          id="content"
          className="content no-scroll"
        >
          {!loading &&
            projects.map((p, i) => (
              <Element name={p.name} id={p.name} key={i}>
                <motion.div variants={posterAni}>
                  <Poster
                    selected={project}
                    setSelected={setProject}
                    data={p}
                    index={i}
                  />
                </motion.div>
              </Element>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
