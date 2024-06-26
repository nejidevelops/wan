import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { heroData } from '../data';

function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      controls.start({
        opacity: scrollTop > 100 ? 0 : 1,
        y: scrollTop > 100 ? -50 : 0,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const { image, title, description, buttonText } = heroData; // Destructure hero data

  return (
    <motion.section
      initial={{ opacity: 1, y: 0 }}
      // animate={controls}
      transition={{ duration: 0.5 }}
      className="flex justify-end h-[90vh] bg-cover pr-48"
      style={{ backgroundImage: `url(${image})` }}
      >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col items-center md:items-start justify-center text-center text-black gap-[29px]"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[40px] font-poly font-normal"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[20px] font-roboto font-light w-screen/2 md:w-4/5 text-center md:text-start"
        >
          {description}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, delay: 0.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-[#B3550A] font-roboto text-white px-2 py-4 md:px-10"
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
