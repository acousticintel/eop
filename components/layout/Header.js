import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
//custom packages
import Menu from "../elements/Menu";
import { motion, useViewportScroll } from "framer-motion";
import { Link as ScrollLink, scroller } from "react-scroll";

const headerAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.25,
    },
  },
};

const Header = ({ loading }) => {
  const router = useRouter();
  const [solid, setSolid] = useState(false);

  const scrollTarget = (target) =>
    scroller.scrollTo(target, { smooth: true, duration: 700, offset: -250 });

  const scrollToPage = async (target) => {
    if (router.pathname !== "/") {
      await router.push("/");
    }
    scrollTarget(target);
  };

  const { scrollY } = useViewportScroll();

  scrollY.onChange((y) => {
    let limit = window.innerHeight - 50;
    if (y > limit || router.pathname !== "/") {
      setSolid(true);
    } else {
      setSolid(false);
    }
    //console.log('y ', y)
    //console.log(window.innerHeight)
  });

  return (
    <motion.div
      id="about"
      variants={headerAnim}
      initial="hidden"
      animate="show"
      className={`header ${solid ? "solid" : ""}`}
    >
      <div className="header-inner">
        <Link href="/">
          <div className="relative h-full w-72 min-w-[200px]">
            <Image
              src="/images/logo.png"
              layout="fill"
              className="object-contain"
              alt=""
            />
          </div>
        </Link>
        <nav className="nav">
          <Link className="navItem" href="/">
            <span>Home</span>
          </Link>
          <div
            className="navItem"
            onClick={() => {
              scrollToPage("about");
            }}
          >
            <span>About</span>
          </div>
          {router.pathname !== "/videos" && (
            <div
              className="navItem"
              onClick={() => {
                scrollToPage("videos");
              }}
            >
              <span>Our Work</span>
            </div>
          )}
          <Link href="/team">
            <div className="navItem">
              <span>Our Team</span>
            </div>
          </Link>
          <div
            className="navItem cont"
            onClick={() => {
              scrollToPage("contact");
            }}
          >
            <span>{`Let's work together`}</span>
          </div>
        </nav>
        <ScrollLink
          className="contact text-sm sm:text-lg ml-5 xs:ml-0"
          to="contact"
          smooth={true}
        >
          <span href="/contact">{`Let's work together`}</span>
        </ScrollLink>
        <div className="menu__cont">
          <Menu />
        </div>
      </div>
    </motion.div>
  );
};
export default Header;
