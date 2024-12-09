import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGithub,faLinkedin,faXTwitter,faMailchimp } from '@fortawesome/free-brands-svg-icons'
import{faEnvelope}from '@fortawesome/free-regular-svg-icons'

const Tech = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      
      

      </div>
      <br />
      <br />
      <a href='https://drive.google.com/file/d/1aadBiJg-fUz2cPZ7Lq4WgROA8PYP8d8q/view?usp=sharing'  className=" mt-10 text-white cursor-pointer text-[20px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2">
              View Resume
      </a>
      <br />
      <br />
      <p className={`${styles.heroSubText} text-center `}>Connect</p>
      <div className='flex flex-row cursor-pointer  flex-wrap justify-center ' >
              <a href="https://www.github.com/kanishk-kr"><FontAwesomeIcon icon={faGithub} className='mt-10 text-white  text-[40px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              <a href="https://www.linkedin.com/in/kanishk-raghav"><FontAwesomeIcon icon={faLinkedin} className='mt-10 text-white  text-[40px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              <a href="mailto:raghavkanishk2138@gmail.com" ><FontAwesomeIcon icon={faEnvelope} className='mt-10 text-white text-[40px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              
              <a href="https://x.com/Kanishk10475"><FontAwesomeIcon icon={faXTwitter} className='mt-10 text-white  text-[40px] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full  px-2.5 py-2 text-center me-2 mb-2'/></a>
              

      </div>


    </div>
    
  );
};

export default SectionWrapper(Tech, "");