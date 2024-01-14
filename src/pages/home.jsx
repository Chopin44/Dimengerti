import React, {useState, useEffect} from "react";
import Footer from '../Components/footer'
import Navbar from "../Components/navbar";



export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full bg-warna2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center bg-warna2 p-8">
      <div className="text-left md:ml-8">
          <h1 className="text-3xl text-[32px] mini:text-[28px] smini:text-[24px] font-IBM font-semibold mb-2">Dimengerti App </h1>
          <h1 className="text-3xl text-[32px] mini:text-[28px] smini:text-[24px] font-IBM font-semibold mb-4">Menjadilah Mengerti</h1>
          <p className="font-IBM w-80 text-base mb-4">Aplikasi penerjemah bahasa isyarat abjad dengan AI</p>
          <button className="bg-gray-800 rounded-[45px] shadow-md shadow-black font-bold text-white py-2 px-4 mt-4 mb-4">Coba Sekarang</button>
        </div>
        <div>
          <img className="xl:w-[635px] xl:h-[406px] md:w-[506px] md:h-[300px]" src="src/assets/images/dekstop.png" alt="Gambar" />
        </div>
      </div>
    </div>

    <div className="w-full bg-warna1">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center bg-warna1 p-8">
        <div>
          <img className="xl:w-[635px] xl:h-[406px] md:w-[506px] md:h-[300px]  mb-4" src="src/assets/images/dekstop3.png" alt="Gambar" />
        </div>
        <div className="text-left md:ml-8">
          <h1 className="text-3xl text-[32px] mini:text-[28px] smini:text-[24px] font-IBM font-semibold mb-2">Belajar Abjad Isyarat </h1>
          <h1 className="text-3xl text-[32px] mini:text-[28px] smini:text-[24px] font-IBM font-semibold mb-4">Lebih Mudah</h1>
          <p className="font-IBM w-80 text-base mb-4">Aplikasi Dimengerti dilengkapi gambar dan video sehingga mudah untuk dipelajari</p>
          <button className="bg-warna2 rounded-[45px] shadow-md shadow-black font-bold text-gray-950 py-2 px-4 mt-4 mb-4">Coba Sekarang</button>
        </div>
      </div>
    </div>

    <div className="w-full bg-warna2">
      <div className="container mx-auto flex items-center justify-center bg-warna2 p-8">
        
        <div className="">
        <img
            className="md:w-56 object-cover"
            alt="Mobile"
            src="src/assets/images/mobile1.png"
          />
        </div>
    
        <div className="text-left ">
          <h1 className="text-3xl font-IBM font-semibold mb-2 px-8">Tersedia Versi Mobile</h1>
          <p className="font-IBM text-base mb-4 w-96 px-8">Dimengerti terdapat versi mobile sehingga dapat digunakan kapanpun dan dimanapun</p>
          <button className="bg-gray-800 rounded-[45px] shadow-md shadow-black font-bold text-white py-2 px-4 mx-8 mt-4">Download Sekarang</button>
        </div>
        
        <div className="">
              <img
                  className="md:mt-56 mx-4 md:w-56 object-cover"
                  alt="Mobile"
                  src="src/assets/images/mobile2.png"
                />
        </div>
           
        
      </div>
    </div>
       
   
    <Footer />
    
    </>
  );
};

export default Home; 