import { stats } from "../constants";
import styles from "../style";
import { animateX } from "../utils";
import { motion } from 'framer-motion';
const Stats = () => (
  <motion.section animate={animateX()} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >

        <p className="font-poppins font-bold xs:text-[20.45px] text-[13px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3
        hover:opacity-50 duration-300 cursor-pointer">
          {stat.title}
        </p>
      </div>
    ))}
  </motion.section>
);

export default Stats;