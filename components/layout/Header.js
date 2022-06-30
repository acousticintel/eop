import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        <div className="logo">EOP</div>
        <nav className="nav">
          <Link className="navItem" to="about" smooth={true}>
            <a href="/about">About</a>
          </Link>
          <Link className="navItem" to="about" smooth={true}>
            <a href="/cases">Gallery</a>
          </Link>
          <Link className="navItem" to="about" smooth={true}>
            <a href="/why">Why work with us?</a>
          </Link>
        </nav>
        <Link className="contact" to="contact" smooth={true}>
          <a href="/contact">Let's work together</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;
