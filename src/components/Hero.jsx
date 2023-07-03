import styles from "../style";
import { discount, emir } from "../assets";
import { motion } from 'framer-motion';
import { animateX, animatereverseX } from "../utils";

const Hero = () => {
  return (
    <section  id="about" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        
      <motion.div animate={animateX()} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
 

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Hi, I'm Emir<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Web and Mobile  </span>{" "}
          </h1>
   
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Developer
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       
        </p>
      </motion.div>

      <motion.div animate={animatereverseX()} className={`flex-1 flex ${styles.flexCenter}  md:my-0 my-10 relative`}>
        <img src={emir}  className="w-[80%] h-[100%] rounded-full border-[5px] border-[#345fbd]  relative z-[5] hover:opacity-80 duration-300 cursor-pointer" />

            
             {/* gradient start */}

             <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}

      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        
      </div>
    </section>
  );
};

export default Hero;