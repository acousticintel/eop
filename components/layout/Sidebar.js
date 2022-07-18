import Link from "next/link";
import { useRouter } from "next/router";
//custom packages
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import Menu from "../elements/Menu";
import { useRecoilState } from "recoil";
import { sideBarAtom } from "../../context/sideBarAtom";
import { useEffect } from "react";

const sidebarAni = {
  hidden: {
    x: "100%",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.25,
    },
  },
  show: {
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.75,
      delay: 0.25,
    },
  },
};

export default function Sidebar() {
  const router = useRouter();

  const controls = useAnimation("hidden");
  const [open, setOpen] = useRecoilState(sideBarAtom);

  const scrollTarget = (target) =>
    scroller.scrollTo(target, { smooth: true, duration: 700 });

  const scrollToPage = async (target) => {
    if (router.pathname !== "/") {
      await router.push("/");
    }
    scrollTarget(target);
  };

  useEffect(() => {
    if (open) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [open]);

  const closeSide = () => {
    console.log("run");
    setOpen(false);
  };

  return (
    <motion.div
      variants={sidebarAni}
      initial="hidden"
      animate={controls}
      className="sidebar__cont"
    >
      <div className="menu__cont">
        <Menu />
      </div>
      <nav className="nav">
        <Link href="/">
          <div className="navItem" onClick={closeSide}>
            <span>Home</span>
          </div>
        </Link>
        <div
          className="navItem"
          onClick={() => {
            scrollToPage("about");
            closeSide();
          }}
        >
          <span>About</span>
        </div>
        <Link href="/team">
          <div className="navItem" onClick={closeSide}>
            <span>Our Team</span>
          </div>
        </Link>
        <div
          className="navItem"
          onClick={() => {
            scrollToPage("contact");
            closeSide();
          }}
        >
          <span>{`Let's work together`}</span>
        </div>
      </nav>
    </motion.div>
  );
}
