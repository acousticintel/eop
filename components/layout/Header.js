import Image from "next/image";
import Link from "next/link";
//custom packages
import { Link as ScrollLink } from "react-scroll";
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
};

export default Header;
