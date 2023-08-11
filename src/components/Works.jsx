import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { CallMissedOutgoingOutlined, LanguageOutlined } from "@mui/icons-material";
import TextShort from "./TextShort";


const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {

  return (
    <>
      <motion.div
        // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
      <div
        className='bg-white p-5 select-none rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <a href={image}>
          <iframe
              src={image}
              allowfullscreen= "true"
            className='w-full h-full object-cover rounded-2xl'
          />
          </a>

          <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
             <div
              onClick={() => window.open(image, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <LanguageOutlined />
            </div>
          </div>

        

        </div>

        <div className='mt-5'>
          <h3 className='text-black font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-black text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2 bg-black p-2 px-5 rounded-full justify-between shadow-2xl'>
         
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-xl rounded-full ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      </motion.div>
          </>

  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Work.</p>
        <h2 className={`${styles.sectionHeadText}`}>Portfolio.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.h2
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-white text-xl max-w-3xl leading-[30px]'
        >
          <TextShort
            text1="Following projects showcases my skills and experience through
          real-world examples of my work."
            text2="Each project is briefly described with
          links to code repositories and live demos in it."
            text3="It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively."
          
          />
            
        </motion.h2>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="flex flex-col mt-20">
        <div className="flex flex-col ">
        <div className="flex flex-col">
           <motion.div >
            <p className={`${styles.sectionSubText} `}>ALX - GROUP 1197: THE NERD AVENGERS 🤓🥋</p>
            <h2 className={`${styles.sectionHeadText}`}>QUIZZAR</h2>
            </motion.div>
          <div className=" max-w-[400] md:max-w-[500] min-h-[660px]">
            <iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/MEN8KfYP9BQ"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; 
              encrypted-media; gyroscope;
            picture-in-picture; web-share" allowfullscreen>

              </iframe>
                 <motion.h1
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-5 text-white'
              >
                <TextShort
                text1="  In Nigeria's education system, examination malpractice poses a significant challenge with far-reaching consequences.
                Recent data from the West African Examinations Council (WAEC) reveals that out of 1,061,047 candidates who sat for the exam in 2022, the results of 365,564 candidates were withheld due to malpractice,
                indicating the widespread nature of the problem."
                text2=" This not only undermines the credibility of the education system but also results in substantial financial losses for parents and state governments.
                Moreover, the rising registration fees for examinations, reaching NGN 18,000 in 2021, place students and their families at a daunting financial risk,
                deterring many from investing in exams due to the high likelihood of failure and subsequent financial loss.
                "
                  text3=" This perpetuates a culture of malpractice as students resort to desperate measures to pass at any cost,
                hindering access to educational opportunities and compromising the integrity of the assessment process.
                To address this complex challenge, a comprehensive solution is required that alleviates the fear of failure and addresses the root causes of malpractice.
       "
                />
              
               </motion.h1>
            <button className="text-white bg-[#e91e63] hover:text-[#e91e63] p-4 mr-3 my-4 text-xl items-center rounded-full font-medium hover:bg-white max-w-[15em] transition ">
              <a _blank href=" https://docs.google.com/presentation/d/1XrOski7un5izDvxdseJUwVQOg6oRqeIbphZPgRHL78Y/edit?usp=sharing">Project Slide Deck Here</a>
              <CallMissedOutgoingOutlined fontSize="large"  className="ml-3 hover:text-[#e91e63]"/>
         </button>
          </div>
            
        </div>
        
        </div>
        


      </div>
    </>
  );
};

export default SectionWrapper(Works, "portfolio");
