import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import styles, { layout } from "../style";
import { giticon,live } from "../assets";
import { FaTwitter,FaGithub,FaLinkedin } from "react-icons/fa";
import { projects } from "../constants";
import { fadeIn } from "../utils";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link
}) => {
  return (
    <motion.div id="project" variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
      
        className='bg-[#0B2447] p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
              onClick={() => window.open(live_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-50 duration-300'
            >
              <img
                src={live}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-50 duration-300'
            >
           <FaGithub size={25} className="text-white" />
            </div>
          </div>
          
        </div>

        <div className='mt-5'>
          <h3 className='text-gradient font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-dimWhite text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <>
      <motion.div >
       
        <h2 className={styles.heading2} >Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-dimWhite text-[17px] max-w-3xl leading-[30px]'
        >
         You can see what  projects I've done below. You can reach github repos with github logo on card.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};
export default Project;