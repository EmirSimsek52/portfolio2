import React, { useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import { FaTwitter,FaGithub,FaLinkedin } from "react-icons/fa";
import styles from "../style";
import emailjs from "@emailjs/browser";
import { animateX, animatereverseX } from "../utils";
import Reactdesign from "./Reactdesign";
import ReactModel from "./canvas/ReactModel";



function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [reload, setReload] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setReload(true);
    emailjs
      .sendForm(
        "service_kb3ilon",
        "template_qodn2af",
        ref.current,
        "_TEdz_PXCcoaA3XCj"
      )
      .then(

        (result) => {
          console.log(result.text);
          setSuccess(true);
          setReload(false);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div
      id="contact" className={`xl:mt-24 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        animate={animateX()}
        className=' flex-[0.75] blue-gradient p-8 rounded-2xl mb-10 bg-opacity-50'
      >
        <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={ref}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'

              placeholder="What's your name?"
              className='bg-color4 py-4 px-6  text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'

              placeholder="What's your mail address?"
              className='bg-color4 py-4 px-6  text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'

              placeholder='Your message?'
              className='bg-color4 py-4 px-6  text-white rounded-lg outline-none border-none font-medium' />
          </label>
          {success &&
            <span className="text-white">Your message has been sent. I'll get back to you soon :)</span>}
          <div className="flex flex-row">
            <button
              type='submit'
              className='bg-color4 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:opacity-50 duration-300'
            >
              {reload ? "Sending" : "Send"}

            </button>

            <div className="flex flex-row gap-10 ml-[20px] mt-[10px]">
              <ul className="flex flex- row-auto sm:gap-10 gap-4 text-white ">
                <li className="hover:opacity-50 duration-300">
                  <a href="https://github.com/EmirSimsek52"><FaGithub size={30} /></a>
                </li>
                <li className="hover:opacity-50 duration-300">
                  <a href="https://www.linkedin.com/in/emir-%C5%9Fim%C5%9Fek-575184253/"><FaLinkedin size={30} /></a>
                </li>
                <li className="hover:opacity-50 duration-300">
                  <a href="https://twitter.com/zlatannovicc"><FaTwitter size={30} /> </a>
                </li>
              </ul>
            </div>
          </div>

        </form>
      </motion.div>

      <motion.div
        animate={animatereverseX()}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ss:ml-3 ml-0 ss:mt-10 mt-0'
      >
        
            <ReactModel />
      </motion.div>
    </div>
  );
}
export default Contact;