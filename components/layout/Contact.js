import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.1,
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

const riseVar = {
  hide: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

const formVariant = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
};

const formChildrenVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

export default function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (status.info.error) {
      let message = status.info.msg;
      swal("Failed", message, "error");
    }
    if (status.submitted && !status.info.error && status.info.msg) {
      let message = status.info.msg;
      swal("Sent!", message, "success");
    }
  }, [status]);

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xlezzogg",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response?.data.error);
      });
  };
  return (
    <Element name="contact" className="bg-slate-900">
      <section id="contact" className="contact_sec" ref={ref}>
        <div className="w-full">
          <AnimatedLetters title={"Contact Us"} controls={controls} />
        </div>
        <div className="cont">
          <motion.form
            onSubmit={handleOnSubmit}
            variants={formVariant}
            initial="hidden"
            animate={controls}
          >
            <div className="">
              <div class="relative mt-12">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="peer"
                  placeholder="john@doe.com"
                />
                <label
                  for="email"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-8 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Email address
                </label>
              </div>
              <div class="relative mt-12">
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  className="peer"
                  placeholder="Type your message here"
                />
                <label
                  for="message"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-8 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Message
                </label>
              </div>
            </div>
            <div className="flex mt-10">
              <motion.button
                className={`btn-primary mx-auto
            ${!status.submitting ? (!status.submitted ? "" : "") : "loading"}`}
                type="submit"
                disabled={status.submitting}
                variants={formChildrenVariant}
              >
                {!status.submitting
                  ? !status.submitted
                    ? "Submit"
                    : "Submitted"
                  : "Submitting..."}
              </motion.button>
            </div>
          </motion.form>
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
