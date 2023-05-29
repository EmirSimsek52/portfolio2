import styles from "./style";
import { Billing, Business,   Navbar, Stats,  Hero,Contact, Project } from "./components";
import { motion } from 'framer-motion';
import { animateX } from "./utils";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        
        <Business />
        <Project/>
        <Contact/>
       
      
     
      
       
      </div>
    </div>
  </div>
);

export default App;