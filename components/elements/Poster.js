import { useEffect, useState } from "react";
import Image from "next/image";
//custom packages
import { motion, useAnimation } from "framer-motion";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../context/modalAtom";

const headerAnim = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.15 * i,
    },
  }),
};

const posterAnim = {
  initial: {
    opacity: 0,
    transition: {
      delay: 1,
      ease: "easeInOut",
      duration: 1,
    },
  },
  hovered: {
    opacity: 0.75,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export default function Poster({
  selected,
  setSelected,
  data,
  index,
  controls,
}) {
  const hovControls = useAnimation("initial");
  const [hovered, setHovered] = useState(false);
  const [content, setContent] = useRecoilState(modalAtom);

  useEffect(() => {
    if (hovered) {
      hovControls.start("hovered");
    } else {
      hovControls.start("initial");
    }
  }, [hovControls, hovered]);

  const handleClick = (data) => {
    setContent(data);
  };

  return (
    <label
      htmlFor="my-modal"
      onClick={()=>handleClick(data)}
    >
      <motion.div
        custom={index}
        initial="initial"
        animate={controls}
        variants={headerAnim}
        onMouseDown={() => setHovered(true)}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className="relative w-full h-full min-h-[350px]"
      >
        <motion.div
          initial="initial"
          animate={hovControls}
          variants={posterAnim}
          className="absolute w-full h-full flex justify-center items-center abs-center bg-black z-10"
        />
        <div className="absolute w-full h-full flex justify-center items-center abs-center text-white uppercase z-20 px-4">
          <div className="text-center">
            <h1 className="text-xl font-semibold">{data.name}</h1>
            <h2 className="font font-medium mt-3">Directed By Enos Olik</h2>
          </div>
        </div>
        <Image
          alt={data?.name || ""}
          layout="fill"
          objectFit="cover"
          src={
            data.thumbnail
              ? data.thumbnail
              : `https://api.lorem.space/image/movie?hash=317${index}`
          }
        />
      </motion.div>
    </label>
  );
}
