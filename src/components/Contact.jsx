import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ArrowDownwardOutlined, FacebookOutlined, FavoriteOutlined, Instagram, LinkedIn,  Twitter } from "@mui/icons-material";

const Contact = () => {

  const Social = ({ icon, link }) => {
    return (
      <motion.div
      >
        <span className="m-3 animate-bounce">
          <ArrowDownwardOutlined fontSize="large" className="text-white animate-bounce"/>
        </span>
      <span className="flex flex-col items-center justify-center rounded-full">
        <a href={link}>{icon}</a>
        </span>
    </motion.div>
      
    )
  }
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='  p-8 flex flex-col justify-between min-w-[20em]  h-[20em] rounded-2xl'
      >
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className='text-[#e91e63]  font-bold text-5xl'>You Can Reach Me On...</h3>
        <div className="flex justify-start items-center my-5">
        <Social icon={<Instagram fontSize="large" className="text-pink-500 mr-2 my-2"/>} link="https://www.instagram.com/ohboycody/"/>
        <Social icon={<FacebookOutlined fontSize="large" className="text-blue-500 m-2"/>} link="https://www.facebook.com/ohboycody/"/>
        <Social icon={<Twitter fontSize="large" className="text-blue-400 m-2"/>} link="https://twitter.com/ohboycody"/>
        <Social icon={<LinkedIn fontSize="large" className="text-blue-500 m-2" />} link="https://www.linkedin.com/in/kidscantech/" />
          
        </div>
          <button
            type='submit'
            className='bg-[#e91e63] mt-5 max-w-[15em]  py-3 px-8 rounded-full outline-none  text-white font-bold  shadow-primary'
        >
          <a href="mailto:kidscantech1@gmail.com">Email me</a>
          </button>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
