import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bg from "../../public/assets/bg.svg";

const LandingPage = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    rotate: { rotate: 360, transition: { duration: 2, repeat: Infinity } },
  };

  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotate((prevRotate) => !prevRotate);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="absolute w-full h-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="text-center font-IBM font-semibold 2xl:text-[65px] iphoneP:text-[35px] mb-4"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Dimengerti App
      </motion.div>
      <motion.div
        className="text-center font-IBM font-medium 2xl:text-[45px] iphoneP:text-[28px] mb-4"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Aplikasi Penerjemah Abjad
      </motion.div>
      <motion.div
        className="text-center font-IBM font-normal 2xl:text-[20px] iphoneP:text-[16px] mx-8 mb-8"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Dimengerti dapat membantu anda mengerti tentang bahasa isyarat abjad dengan bantuan AI
      </motion.div>
      <motion.div
        className="flex items-center justify-center m-2"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/home">
          <motion.button
            className="bg-gray-950 hover:bg-gray-800 text-warna1 text-2xl font-bold py-4 px-16 rounded-3xl"
            variants={buttonVariants}
            initial={false}
            animate={rotate ? "rotate" : "hidden"}
          >
            Jelajahi
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default LandingPage;
