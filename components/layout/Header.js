import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//custom packages
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion } from "framer-motion";
import Menu from "../elements/Menu";
import { useEffect } from "react";

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

  useEffect(() => {
    console.log(router.pathname);
  }, []);

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
