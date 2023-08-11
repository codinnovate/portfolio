import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='flex '
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white  flex justify-center items-center shadow-2xl rounded-full  w-[80px] h-[80px] '
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-cover '
        />
       
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionSubText}>Introduction</h2>
        <h2 className={styles.sectionHeadText}>BIO</h2>
      </motion.div>
      <motion.h1
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a coding virtuoso, and I orchestrate symphonies with Python, JavaScript, and C++. The digital realms are my canvas, and I craft elegant tapestries using frameworks like React,
        tailwindcss, django and the whole MERN stack Family.

In my world, learning is a superpower, and I wield it to conquer new challenges at lightning speed. I don't just work with clients; I join forces with them to engineer impeccable, scalable, and intuitive solutions that untangle real-world conundrums.
      </motion.h1>

      <div className='mt-20 grid grid-cols-4 md:grid-cols-6 gap-10'>
        {technologies.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <StarsCanvas />
    </>
  );
};

export default SectionWrapper(About, "about");
