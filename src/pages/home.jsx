import React, {useState, useEffect} from "react";
import Footer from '../Components/footer'
import Navbar from "../Components/navbar";



export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="absolut">
        <div className="bg-warna2 w-full 2xl:pl-64 xl:pl-0 2xl:h-[700px] md:h-[500px] xl:h-[700px] mini:h-[700px] smini:h-[500px]">
          <div className="relative bg-[#f4ce14]">
            <div className="xl:w-[320px] xl:h-[59px] xl:top-[211px] xl:left-[131px] md:w-base md:h-base md:top-base md:left-base mini:top-[85px] mini:left-[19px] smini:top-[70px] smini:left-[20px] font-IBM font-semibold text-[32px] mini:text-[28px] smini:text-[24px] absolute text-black tracking-[0] leading-[normal]">
                Dimengerti Apps
            </div>
            <div className="absolute xl:w-[365px] xl:h-[28px] xl:top-[254px] xl:left-[131px] md:w-base md-left-base md:top-base mini:top-[130px] mini:left-[19px] smini:top-[100px] smini:left-[20px] font-IBM font-semibold text-black text-[32px]  mini:text-[28px] smini:text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
              Menjadilah Mengerti
            </div>
            <p className="xl:w-[384px] xl:h-[200px]  md:w-base md:left-base md:top-48 mini:h-[500px] mini:w-[360px] mini:text-sm xl:text-base xl:top-[334px] xl:left-[134px] mini:top-[200px] mini:left-[19px] smini:top-[160px] smini:left-[20px] absolute md:text-base mini:text-md smini:text-sm  font-IBM font-light text-black text-[16px] tracking-[0] leading-[normal]">
              Aplikasi penerjemah bahasa isyarat abjad
              <br />
              dengan AI
            </p>
            <div className="absolute hover:scale-105 hover:cursor-pointer w-[166px] h-[51px] xl:top-[421px] xl:left-[131px] md:top-80 mini:top-[275px] mini:left-[19px] smini:top-[230px] smini:left-[30px]">
              <div className="relative w-[164px] h-[51px] bg-gray-800 rounded-[45px] shadow-md shadow-black">
                <div className="absolute top-[16px] left-[20px] font-IBM font-semibold text-warna1 text-[16px] tracking-[0] leading-[normal]">
                  Coba sekarang
                </div>
              </div>
            </div>
              <img
                className="absolute xl:w-[707px] xl:h-[406px] md:w-[400px] md:left-[390px] md:top-[80px] mini:w-[360px] xl:top-[149px] xl:left-[550px] mini:top-[400px] mini:left-[19px] smini:w-[235px] smini:left-12 smini:top-[320px] object-cover"
                alt="Desktop"
                src="src/assets/images/dekstop.png"
              />
          </div>
        </div>
        
        <div className="bg-warna1 w-full 2xl:pl-80 2xl:py-32 xl:pl-32 xl:py-32 mini:pl-40 2xl:h-[700px] xl:h-[700px] md:h-[500px] mini:h-[800px] smini:h-[600px]">
        <div className="bg-warna1 relative ">
          <div className="absolute xl:w-[707px] mini:w-[360px] smini:w-[235px] xl:h-[406px] xl:top-0 xl:left-0 md:w-[400px] md:left-[240px] md:top-12 mini:top-[400px] mini:-left-36 smini:top-96 smini:left-12 object-cover">
              <img className="w-full h-full" alt="Desktop" src="src/assets/images/dekstop3.png" />
          </div>
            <p className="absolute xl:w-[446px] xl:h-[67px] xl:top-[53px] md:w-base md:left-base md:top-50 mini:top-[50px]  mini:w-[326px] mini:h-[200px] xl:left-[690px] mini:left-[-130px] smini:top-8 smini:left-[20px] font-IBM font-semibold text-black text-[32px] mini:text-[28px] smini:text-[24px] tracking-[0] leading-[normal]">
              Belajar Abjad Isyarat Lebih Mudah
            </p>
            <p className="xl:w-[377px] xl:top-[164px] xl:left-[696px] md:w-base md:left-base md:top-50 mini:w-[300px] mini:top-[160px] smini:top-32 mini:left-[-130px] smini:left-[20px] absolute font-IBM font-light text-black text-[16px] md:text-base mini:text-md smini:text-sm tracking-[0] leading-[normal]">
              Aplikasi Dimengerti dilengkapi gambar dan video sehingga mudah untuk dipelajari
            </p>
            <div className="absolute hover:scale-105 hover:cursor-pointer  xl:w-[166px] xl:h-[51px] xl:top-[280px] xl:left-[696px] md:w-base md:left-base md:top-[300px] mini:top-[260px] mini:left-[-130px] smini:top-64 smini:left-[20px]">
              <div className="relative w-[164px] h-[51px] bg-warna2 rounded-[45px] shadow-md shadow-black">
                <div className="absolute top-[16px] left-[20px] font-IBM font-semibold text-black text-[16px] tracking-[0] leading-[normal]">
                  Coba sekarang
                </div>
              </div>
            </div>
        </div>
        </div>
        
        <div className="bg-warna2 w-full 2xl:pl-20 2xl:py-32 xl:pl-0 xl:py-32 2xl:h-[700px] xl:h-[700px] mini:h-[700px] smini:h-[700px] ">
        <div className="relative bg-warna2 ">
          <div className="absolute xl:top-16 xl:left-[37vw] md:top-8 mini:top-16 mini:left-[5vw] smini:top-4 smini:left-3 font-IBM font-semibold text-black text-[32px] mini:text-[28px] smini:text-[24px]  tracking-[0] leading-[normal]">
            Tersedia Versi Mobile
          </div>
          <p className="absolute xl:w-[380px] xl:top-28 xl:left-[37vw] md:top-32 mini:top-36 mini:left-[5vw] smini:top-24 smini:left-4 font-IBM font-light md:text-base text-[32px] mini:text-md smini:text-sm  text-black tracking-[0] leading-[normal]">
            Dimengerti terdapat versi mobile sehingga dapat digunakan kapanpun dan dimanapun
          </p>
          <div className="absolute hover:scale-105 hover:cursor-pointer xl:left-[37vw] xl:top-56 mini:top-60 md:left-10 mini:left-[14px] smini:top-52 smini:left-4">
            <div className="relative w-[237px] h-[51px]">
              <div className="w-[211px] h-[51px] top-0 rounded-[45px] shadow-md shadow-black  absolute left-0 bg-gray-800" />
              <div className="absolute w-[211px] top-[16px] left-[26px] font-IBM font-semibold  text-warna1 text-[16px] tracking-[0] leading-[normal]">
                Download Sekarang
              </div>
            </div>
          </div>
          <img
            className="absolute 2xl:top-32 2xl:left-[58vw] 2xl:w-[20vh] xl:top-32 xl:left-[69vw] xl:w-[20vh] md:w-[12vh] md:top-[25vw] md:left-[60vw] mini:w-[16vh] mini:top-[44vh] mini:left-[60vw] smini:w-[40vw] smini:left-6 smini:top-80 object-cover"
            alt="Mobile"
            src="src/assets/images/mobile1.png"
          />
          <img
            className="absolute 2xl:top-0 2xl:left-[25vw] 2xl:w-[20vh] xl:top-0 xl:left-[20vw] xl:w-[20vh] md:w-[12vh] md:top-[25vw] md:left-[35vw] mini:w-[16vh] mini:top-[44vh] mini:left-[15vw] smini:w-[40vw] smini:left-44 smini:top-80 object-cover"
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