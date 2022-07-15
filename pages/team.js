import Image from "next/image";
//custom packages 
import { motion } from "framer-motion";


const partners = [
  {
    name: "Enos Olik",
    position: "Creative Director",
    image: "/images/members/enos.jpg",
  },
  {
    name: "Joseph Mwangi",
    position: "Head of Production",
    image: "/images/members/joseph.jpg",
  },
];

const team = [
  {
    name: "Wanjiru Kahugu",
    position: "Line Producer / Admin",
    image: "/images/members/wanjiru.jpg",
  },
  {
    name: "Fuad S. Mbigi",
    position: "Producer / AD / Floor Manager",
    image: "/images/members/fuad.jpg",
  },
  {
    name: "Ramgo Musau",
    position: "Editor Director",
    image: "/images/members/ramgo.jpg",
  },
  {
    name: "Fred Warui",
    position: "Assistant Camera / Focus Puller",
    image: "/images/members/fred.jpg",
  },
];

const pageAni = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const pageHeadContAni = {
  animate: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const pageHeadAni = {
  initial: { x: 10, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const listsAni = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.5,
    },
  },
};

const listAni = {
  initial: { x: 10, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function TeamPage() {
  return (
    <motion.div variants={pageAni} initial="initial" animate="animate" className="container mx-auto pb-20">
      <motion.div  variants={pageHeadContAni} className="w-full md:w-2/3">
        <motion.h6 variants={pageHeadAni} className="text-gray-400 font-extrabold">The Team</motion.h6>
        <motion.h4  variants={pageHeadAni} className="text-5xl text-gray-200 font-bold w-2/3 mt-4">
          Meet the team of experts in profession and profession
        </motion.h4>
        <motion.p  variants={pageHeadAni} className="text-gray-300 font-medium mt-4">
          To be a company our customers want us to be, it takes an eclectic
          group of passionate operators.Get to know the people leading the way
          at EOP Films
        </motion.p>
      </motion.div>
      <motion.div variants={listsAni} className="grid gap-20 md:grid-cols-2 mt-10">
        {partners.map((p, i) => (
          <motion.div variants={listAni} key={i} className="member bg-white bg-opacity-10 pb-5 max-w-sm mx-auto rounded-2xl overflow-hidden">
            <div className="relative h-60 w-full">
              <Image src={p.image} alt="" layout="fill" objectFit="cover" objectPosition="top"/>
            </div>
            <h6 className="uppercase text-center text-xl font-extrabold mt-6 text-sky-400">
              {p.name}: {p.position}
            </h6>
            <p className="mt-3 text-gray-300 px-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae neque quae nisi harum consequuntur distinctio
              consequatur eos dolorem. Et voluptate blanditiis ut porro modi,
              excepturi magnam eum vitae error tempore!
            </p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={listsAni} className="grid gap-20 md:grid-cols-2 lg:grid-cols-3 mt-20">
      {team.map((p, i) => (
          <motion.div variants={listAni} key={i} className="member bg-white bg-opacity-10 pb-5 w-full max-w-sm mx-auto rounded-2xl overflow-hidden">
            <div className="relative h-60 w-full">
              <Image src={p.image} alt="" layout="fill" objectFit="cover" objectPosition="top"/>
            </div>
            <h6 className="uppercase text-center text-xl font-extrabold mt-6 text-sky-400">
              {p.name}
            </h6>
            <h6 className="capitalize text-center font-medium text-gray-400">
              {p.position}
            </h6>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
