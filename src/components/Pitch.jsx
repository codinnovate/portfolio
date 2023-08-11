import React from 'react'
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import TextShort from './TextShort';

const Pitch = () => {
    return (
        <div className='flex flex-col'>
            <motion.div
                // variants={textVariant()}
            >
        <p className={`${styles.sectionSubText} `}>PITCH</p>
        <h2 className={`${styles.sectionHeadText}`}>MY ELEVATOR PITCH</h2>
            </motion.div>
              
            {/* <h1>
                
                
                 
            </h1> */}

            <TextShort
                text1="Hello, I'm Samuel Adeyemi,
                a self-taught software engineer with
                a genuine passion for problem-solving.Throughout my academic journey, I actively
                participated in various tech-focused problem-solving further honing my skills and creativity.
                competitions.Over the past 5 years, I have immersed myself
                in learning multiple programming languages and
                technologies, and my experience in these competitions
                has provided me with invaluable practical knowledge."
                text2="
                 I have developed a strong ability to analyze complex challenges,
                  think innovatively, and work collaboratively with teams.
                As a problem-solving enthusiast, I find joy in overcoming obstacles and
                 finding efficient solutions. My top three skills include proficiency 
                 in diverse programming languages, strong analytical thinking,
                  and excellent communication and teamwork abilities.My commitment to continuous self-improvement and my passion 
                   for software engineering set me apart."
                text3="
                    I believe that every 
                   problem presents an opportunity for growth and learning.
                    By joining your team, I am confident that I can contribute significantly to the development of innovative and user-centric software solutions.
                     My experience in problem-solving competitions has taught me to approach projects with creativity and determination, ensuring successful outcomes. 
                I am excited about the chance to apply my skills and enthusiasm to your organization and contribute to meaningful projects. I kindly ask you to consider me for any software engineering roles or projects, where my problem-solving expertise and dedication will make a positive impact. Thank you for your time, and I am eager to be a valuable asset to your team!"
            />
        </div>
    )
}

export default SectionWrapper(Pitch, "pitch");
