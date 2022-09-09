import { useEffect, useState } from "react";
//custom packages
import { Element, scroller } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//custom
import Poster from "../components/elements/Poster";
import { content } from "../context/data";

export default function VideosPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  const videos = [
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
    {
      name: "movie 1",
    },
  ];

  return (
    <section className="videos_page" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full h-full mt-5">
        {content?.length > 0 &&
          content.map((v, i) => (
            <Poster key={i} index={i} data={v} controls={controls} />
          ))}
      </div>
    </section>
  );
}
