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
    console.log(content.link)
  }, [content?.link]);

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

  const handleCloseModal = () => {
    setPlay(false);
    document.getElementById("my-modal").checked = false;
  };

  const handleBuffer = () => {
    setPlay(false);
  };

  const handleBufferEnd = () => {
    let open = document.getElementById("my-modal").checked;
    console.log("open ", open);
    open ? setPlay(true) : setPlay(false);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-black">
          <div
            onClick={handleCloseModal}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </div>
          <div className="relative p-10 px-6 flex justify-center items-center">
            <div className="absolute abs-center z-50">
              {loading && <progress className="progress w-56"></progress>}
            </div>
            <motion.div
              variants={playerAnim}
              animate={controls}
              className="w-full h-full"
            >
              <ReactPlayer
                playing={play}
                onReady={handleReady}
                onBuffer={handleBuffer}
                onBufferEnd={handleBufferEnd}
                onError={() => console.log("Error")}
                controls={true}
                width="100%"
                className="player"
                url={content?.link}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
