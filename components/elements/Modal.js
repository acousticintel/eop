import { useRecoilValue } from "recoil";
import ReactPlayer from "react-player/lazy";
import { modalAtom } from "../../context/modalAtom";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const playerAnim = {
  hide: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export default function Modal() {
  const controls = useAnimation();
  const content = useRecoilValue(modalAtom);
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setLoading(true);
    setPlay(false);
  }, [content]);

  useEffect(() => {
    if (loading) {
      controls.start("hide");
    } else {
      controls.start("show");
    }
  }, [loading]);

  const handleReady = () => {
    setPlay(true);
    setLoading(false);
  };

  const handleStopVideo = () => {
    setPlay(false);
  };

  return (
    <div className="modal">
      <div className="modal-box w-11/12 max-w-5xl bg-black">
        <label
          htmlFor="my-modal"
          onClick={handleStopVideo}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <div className="relative py-10 flex justify-center items-center">
          <div className="absolute abs-center">
            {loading && <progress className="progress w-56"></progress>}
          </div>
          <motion.div
            variants={playerAnim}
            animate={controls}
            className="w-full h-full"
          >
            {content?.link && content?.link?.length > 0 && (
              <ReactPlayer
                playing={play}
                onReady={handleReady}
                controls={true}
                width="100%"
                className="player"
                url={content?.link}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
