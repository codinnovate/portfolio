import { motion } from "framer-motion";

import { styles } from "../styles";
import { StarsCanvas } from "./canvas";
import { resume } from '../assets';
import { ArrowDownwardOutlined, FileDownloadOutlined } from "@mui/icons-material";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div>
          <h1 className="text-white text-5xl md:text-8xl font-bold md:font-extrabold mt-2">
            Hi👋, I'm <span className='text-[#e91e63]'>Samuel Adeyemi</span>
          </h1>
          <h1 className='text-white font-medium mt-[1em] leading-[1.5em] text-xl  md:text-2xl '>
            "I am a dedicated and experienced full stack software developer, proficient in both front-end and back-end technologies.
            I thrive on crafting innovative solutions that bridge the gap between user-centric design and robust functionality,
            always eager to tackle new challenges and contribute to the ever-evolving world of software development."</h1>
        <div className="my-5">
            <button
              className="flex items-center rounded-full font-medium text-white bg-[#e91e63] transition  hover:text-[#e91e63] hover:bg-white  p-3 px-5">
              <a href={resume}>See my resume</a>
              <span>
                <FileDownloadOutlined className="ml-2"/>
              </span>
          </button>
        </div>
        </div>
      </div>


      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className=' flex flex-col justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='flex flex-col items-center mb-1'
            >
              <ArrowDownwardOutlined fontSize="large" className="mb-2 text-[#e91e63]" />
              <span className="font-thin">Click Me!!</span>
            </motion.div>
          </div>
        </a>
      </div>
      <StarsCanvas />
    </section>
  );
};

export default Hero;
