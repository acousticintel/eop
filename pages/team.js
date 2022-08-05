import Image from "next/image";
//custom packages
import { motion } from "framer-motion";

const partners = [
  {
    name: "ENOS oLIK",
    position: "CREATIVE DIRECTOR",
    image: "/images/members/enos.jpg",
    desc: "Enos has worked as a creative director on major TV shows/projects for Kenya’s top TV networks, ( live and pre-packaged) and TVC productions ( with some of Kenya’s leading brands), Feature Films (SupAmodo) and is also one of the region’s top music video director, he has worked with top artists across the continent and has directed some of Kenya’s top and classic music videos.",
  },
  {
    name: "jOSEPH THIONG’O",
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
    desc:"Wanjiru comes from a communication background, which gives her an understanding of different aspects of the media industry. She serves as a line producer and admin so she makes sure all our projects stay within budget and schedule. She has worked on: Famous, Kipawa, The Search, Sasini TVC and more."
  },
  {
    name: "Bella Wairimu",
    position: "Make-up Artist",
    image: "/images/members/bella.png",
    desc:"Bella is a highly experienced and creative makeup artist. Her work ranges from all types of makeup and body painting to male grooming. Her areas of expertise include makeup for TV & film, celebrity makeup, special effects, high fashion and beauty, bridal and body art. She also works on all skin types. Chosen as the head makeup artist on Famous Series, The Yard Series, Lusala film, Just In Time film, Toilex TVC, Betika TVC, KCB TVC and more."
  },
  {
    name: "Fuad S. Mbigi",
    position: "Producer / AD / Floor Manager",
    image: "/images/members/fuad.jpg",
    desc:"Fuadi is a multi-hyphenate; a floor manager, producer and assistant director with over 9 years experience in the TV and film industry. He has had roles as a producer and AD in various films, Television and commercials such as Famous, Aladdin- world of brands commercial, Safaricom Mobi play, 2020 Visa Olympics."
  },
  {
    name: "RrANGO MSAU",
    position: "Editor Director",
    image: "/images/members/ramgo.jpg",
    desc:"Rango has quickly become a sought- after editor in both feature films and television and music videos. He is known for bringing an exceptional breadth of knowledge, craft and creativity to filmmaking across genres and for being a true collaborator and steady hand in the cutting room. He’s worked on projects ranging from: Famous, Crime and justice, Kinyozi, Concert nyumbani, Onstage, Kipawa and Engage."
  },
  {
    name: "Fred Warui",
    position: "Assistant Camera / Focus Puller",
    image: "/images/members/fred.jpg",
    desc:"Warui’s professional background includes experience as a camera assistant and Focus puller in documentary, episodic television, commercials and web content. He has a natural eye for composition and being able to create strong cinematic imagery in any environment. His work illustrates a wide range of shooting styles his projects are not limited to Famous, Supa Mod film, The Hype series, Coaches short film, Sasini TVC, KTB TVC, Dumu Zas"
  },
  {
    name: "Ben Kiilu",
    position: "Assistant Camera / Focus Puller",
    image: "/images/members/ben.jpg",
    desc:"Ben is focus puller/1st AC experienced in all mainstream digital cinema camera formats. He has focus pulled cameras on cranes, gimbal, steadicam & tracking vehicles. He has been involved in the making of numerous projects not limited to: Coaches, Napunyi, Sungura. Film and TV series: Famous, Crime and Justice, Majuto, Kookoo Inn. Feature Films: Mission To The Rescue, Uradi, Sincerely Daisy and countless TV commercials."
  },
  {
    name: "Isaac Awene",
    position: "Gaffer",
    image: "/images/members/isaac.png",
    desc:"Awene is an experienced gaffer and grips who is able to work in both studio and outdoor location settings with an understanding of lighting setup. He has worked as a key gaffer in Famous, Kipawa, HYPED EA, The Search, Baze Creators Garage and many more."
  },
  {
    name: "Simon Kamau",
    position: "Graphic Designer",
    image: "/images/members/simon.png",
    desc:"Simon is a prolific graphic designer having worked on big TV commercial campaigns such as safaricom, visa and Airtel. He also worked on TV shows such as Famous and PAA to name a few."
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
      className="container mx-auto pt-44 pb-20"
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
          className="text-gray-500 font-medium mt-4"
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
            className="member bg-white shadow pb-10 max-w-sm mx-auto rounded-2xl overflow-hidden"
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
            <h6 className="uppercase text-center font-bold text-sky-600">
              {p.position}
            </h6>
            <p className="mt-3 text-gray-500 px-6 lg:px-10">{p.desc}</p>
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
            className="member bg-white shadow-lg pb-10 w-full max-w-sm mx-auto rounded-2xl overflow-hidden"
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
            <h6 className="uppercase text-center font-bold text-sky-600">
              {p.position}
            </h6>
            <p className="mt-3 text-gray-500 px-6 lg:px-10">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
