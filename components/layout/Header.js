import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//custom packages
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion } from "framer-motion";

const headerAnim = {
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.25,
    },
  },
};

const Header = () => {
  const router = useRouter();

  const scrollTarget = (target) =>
    scroller.scrollTo(target, { smooth: true, duration: 700 });

  const scrollToPage = async (target) => {
    if (router.pathname !== "/") {
      await router.push("/");
    }
    scrollTarget(target);
  };

  if (router.pathname === "/") {
    return (
      <motion.div
        id="about"
        variants={headerAnim}
        initial="hidden"
        animate="show"
        className="header"
      >
        <div className="header-inner">
          <Link href="/">
            <div className="relative h-20 w-52 min-w-[100px]">
              <Image
                src="/images/logo-w.png"
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
            <ScrollLink className="navItem" to="about" smooth={true}>
              <span>About</span>
            </ScrollLink>
            <ScrollLink className="navItem" to="videos" smooth={true}>
              <span>Our Works</span>
            </ScrollLink>
            <Link className="navItem" href="/team">
              <span>Our Team</span>
            </Link>
          </nav>
          <ScrollLink
            className="contact text-sm sm:text-lg ml-5 xs:ml-0"
            to="contact"
            smooth={true}
          >
            <span href="/contact">{`Let's work together`}</span>
          </ScrollLink>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        id="about"
        variants={headerAnim}
        initial="hidden"
        animate="show"
        className="header"
      >
        <div className="header-inner">
          <Link href="/">
            <div className="relative h-20 w-52 min-w-[100px]">
              <Image
                src="/images/logo-w.png"
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
            <Link className="navItem" href="/team">
              <span>Our Team</span>
            </Link>
          </nav>
          <ScrollLink
            className="contact text-sm sm:text-lg ml-5 xs:ml-0"
            to="contact"
            smooth={true}
          >
            <span href="/contact">{`Let's work together`}</span>
          </ScrollLink>
        </div>
      </motion.div>
    );
  }
};
export default Header;
