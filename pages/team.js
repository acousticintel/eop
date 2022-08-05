import Image from "next/image";
//custom packages
import { motion } from "framer-motion";

const partners = [
  {
    name: "Enos Olik",
    position: "Creative Director",
    image: "/images/members/enos.jpg",
    desc: "Enos has worked as a creative director on major TV shows/projects for Kenya's top TV networks, (live and pre-packaged) and TVC productions ( with some of Kenya's leading brands), Feature Films (SupАmodo) and is also one of the region's top music video director, he has worked with top artists across the continent and has directed some of Kenya's top and classic music videos.",
  },
  {
    name: "Joseph Mwangi",
    position: "Head of Production",
    image: "/images/members/joseph.jpg",
    desc:"Joseph has experience as a producer and production manager having worked on all EOP films projects; live, pre-recorded, scripted and reality formats including major events and music video productions."
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
  {
    name: "Ben Kiilu",
    position: "Assistant Camera / Focus Puller",
    image: "/images/members/ben.jpg",
  },
  {
    name: "Isaac Awene",
    position: "Gaffer",
    image: "/images/members/isaac.png",
  },
  {
    name: "Riziki Ambrose",
    position: "Production Coordinator",
    image: "/images/members/simon.png",
  },
  {
    name: "Simon Kamau",
    position: "Graphic Designer",
    image: "/images/members/simon.png",
  },
  {
    name: "Bella Wairimu",
    position: "Make-up Artist",
    image: "/images/members/bella.png",
  },
];

const pageAni = {
  animate: {
    transition: {
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
    <motion.div
      variants={pageAni}
      initial="initial"
      animate="animate"
      className="container mx-auto pt-40 pb-20"
    >
      <motion.div variants={pageHeadContAni} className="w-full md:w-2/3">
        <motion.h6
          variants={pageHeadAni}
          className="text-blue-900 font-extrabold"
        >
          The Team
        </motion.h6>
        <motion.h4
          variants={pageHeadAni}
          className="text-5xl text-blue-700 font-bold w-2/3 mt-4"
        >
          Meet the team of experts
        </motion.h4>
        <motion.p
          variants={pageHeadAni}
          className="text-blue-800 font-medium mt-4"
        >
          To be a company our customers want us to be, it takes an eclectic
          group of passionate operators.Get to know the people leading the way
          at EOP Films
        </motion.p>
      </motion.div>
      <motion.div
        variants={listsAni}
        className="grid gap-20 md:grid-cols-2 mt-10"
      >
        {partners.map((p, i) => (
          <motion.div
            variants={listAni}
            key={i}
            className="member bg-white shadow pb-5 max-w-sm mx-auto rounded-2xl overflow-hidden"
          >
            <div className="relative h-60 w-full">
              <Image
                src={p.image}
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
            <h6 className="uppercase text-center text-xl font-extrabold mt-6 text-sky-400">
              {p.name}: {p.position}
            </h6>
            <p className="mt-3 text-blue-800 px-6">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={listsAni}
        className="grid gap-20 md:grid-cols-2 lg:grid-cols-3 mt-20"
      >
        {team.map((p, i) => (
          <motion.div
            variants={listAni}
            key={i}
            className="member bg-white shadow-lg pb-5 w-full max-w-sm mx-auto rounded-2xl overflow-hidden"
          >
            <div className="relative h-60 w-full">
              <Image
                src={p.image}
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
            <h6 className="uppercase text-center text-xl font-extrabold mt-6 text-sky-400">
              {p.name}
            </h6>
            <h6 className="capitalize text-center font-medium text-blue-900">
              {p.position}
            </h6>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
