import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";

const Home = () => {
  const buttonVariants = {
    hover: {
      scale: 1.10,
      transition: {
        duration: 0.05,
      },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar />
      
      <motion.div
        className="w-full bg-warna2"
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="container mx-auto flex flex-col md:flex-row items-center justify-center bg-warna2 p-8"
          variants={imageVariants}
        >
          <div className="text-left md:ml-8">
            <h1 className="text-3xl text-[32px] mini:text-[28px] smini:text-[24px] font-IBM font-semibold mb-2">Dimengerti App </h1>
            <h1 className="text-3xl text-[32px] mini:text-[28px] smini:text-[24px] font-IBM font-semibold mb-4">Menjadilah Mengerti</h1>
            <p className="font-IBM w-80 text-base mb-4">Aplikasi penerjemah bahasa isyarat abjad dengan AI</p>
            <Link to="https://dimengerti-app.vercel.app">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="bg-gray-800 rounded-[45px] shadow-md shadow-black font-bold text-white py-2 px-4 mt-4 mb-4 transition-transform"
              >
                Coba Sekarang
              </motion.button>
            </Link>
          </div>
          <div>
            <img className="xl:w-[635px] xl:h-[406px] md:w-[506px] md:h-[300px]" src="/assets/images/dekstop.png" alt="Gambar" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full bg-warna1"
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="container mx-auto flex flex-col md:flex-row items-center justify-center bg-warna1 p-8"
          variants={imageVariants}
        >
          <div>
            <img className="xl:w-[635px] xl:h-[406px] md:w-[506px] md:h-[300px]  mb-4" src="/assets/images/dekstop3.png" alt="Gambar" />
          </div>
          <div className="text-left md:ml-8">
            <h1 className="text-3xl text-[32px] mini:text-[28px] smini:text-[24px] font-IBM font-semibold mb-2">Belajar Abjad Isyarat </h1>
            <h1 className="text-3xl text-[32px] mini:text-[28px] smini:text-[24px] font-IBM font-semibold mb-4">Lebih Mudah</h1>
            <p className="font-IBM w-80 text-base mb-4">Aplikasi Dimengerti dilengkapi gambar dan video sehingga mudah untuk dipelajari</p>
            <Link to="https://dimengerti-app.vercel.app">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="bg-warna2 rounded-[45px] shadow-md shadow-black font-bold text-gray-950 py-2 px-4 mt-4 mb-4 transition-transform"
              >
                Coba Sekarang
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full bg-warna2"
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="container mx-auto flex items-center justify-center bg-warna2 p-8"
          variants={imageVariants}
        >

          <div className="">
            <img
              className="md:w-56 object-cover"
              alt="Mobile"
              src="/assets/images/mobile1.png"
            />
          </div>

          <div className="text-left ">
            <h1 className="text-3xl font-IBM font-semibold mb-2 px-8">Tersedia Versi Mobile</h1>
            <p className="font-IBM text-base mb-4 w-96 px-8">Dimengerti terdapat versi mobile sehingga dapat digunakan kapanpun dan dimanapun</p>
              <Link to="https://dimengerti-app.vercel.app">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-gray-800 rounded-[45px] shadow-md shadow-black font-bold text-white py-2 px-4 mx-8 mt-4 transition-transform"
                >
                  Download Sekarang
                </motion.button>
              </Link>
          </div>

          <div className="">
            <img
              className="md:mt-56 mx-4 md:w-56 object-cover"
              alt="Mobile"
              src="/assets/images/mobile2.png"
            />
          </div>

        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Home;
