import Image from "next/image";
import { motion } from "framer-motion";

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            layout
            layoutId="main-image-1"
            src={`/images/famous.png`}
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id }) => {
  return (
    <motion.div
      variants={variants}
      className={`relative image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      {id === "image-1" ? (
        <Image
          src={`/images/paa.png`}
          fallback={`/images/paa.png`}
          objectFit="cover"
          layout="fill"
          alt={id}
        />
      ) : (
        <Image
          src={`https://api.lorem.space/image/movie?hash=317${id}`}
          fallback={`/images/${id}.jpg`}
          objectFit="cover"
          layout="fill"
          alt={id}
        />
      )}
    </motion.div>
  );
};
export default Loader;
