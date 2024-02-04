import React from "react";
import { Link } from 'react-router-dom';
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import arrow from "../../public/assets/images/arrow.svg";
import "../../public/assets/CSS/arrow-1.css"


const tentang = () => {
    return (
        <>
        <Navbar/>
        <div className="absolute w-full h-[700px]">
            <div className="bg-warna2 shadow-lg w-full 2xl:pl-64 xl:pl-0 2xl:h-[646px] md:h-[500px] xl:h-[700px] iphoneP:h-[500px] smini:h-[500px]">
            <div className="relative">
                <p className="absolute text-center 2xl:w-[1055px] 2xl:h-[195px] 2xl:left-[192px] Mac:left-[200px] 2xl:top-[146px] 2xl:text-[40px] 
                  xl:w-[1055px] xl:h-[195px] xl:top-32 xl:left-32 xl:text-[40px]
                  iphoneP:w-[390px] iphoneP:h-[295px] iphoneP:top-32 iphoneP:-left-[0px] iphoneP:text-[18px]
                  iphoneMax::w-[405px] iphoneMax:h-[52px] iphoneMax:top-32 iphoneMax:left-4 iphoneMax:text-[18px]
                  leading-normal font-IBM font-semibold">
                  DIMENGERTI DIBANGUN DENGAN MACHINE LEARNING BERBASIS COMPUTER VISION
                </p>
                <p className="absolute 2xl:w-[945px] 2xl:h-[52px] 2xl:left-[282px] Mac:left-[250px] 2xl:top-[289px] 2xl:text-[20px]
                    xl:w-[945px] xl:[h-52px] xl:top-64 xl:left-44 xl:text-[20px]
                    iphoneP:w-[390px] iphoneP:h-[52px] iphoneP:top-48 iphoneP:left-0 iphoneP:text-[12px]
                    iphoneMax::w-[390px] iphoneMax:h-[52px] iphoneMax:top-48 iphoneMax:left-4 iphoneMax:text-[12px]
                    font-IBM font-medium text-black  text-center tracking-[0] leading-[normal]">
                  Computer vision adalah bidang AI yang mengizinkan komputer memproses, menginterpretasi, dan memahami
                  visual dunia
                </p>
              <Link to="https://machinelearningmastery.com/start-here/#getstarted">
                <div className="flex  h-[60px] items-center justify-center px-0 py-[15px] absolute 
                    2xl:w-[248px] 2xl:top-[411px] 2xl:left-[596px] Mac:left-[600px]
                    xl:w-[248px] xl:top-[411px] xl:left-[500px]
                    iphoneP:top-[268px] iphoneP:left-[120px] iphoneP:w-[150px]
                    iphoneMax:top-[268px] iphoneMax:left-[145px] iphoneMax:w-[150px]
                    from-gray-950 bg-gradient-to-tl to-gray-700 shadow-md shadow-black hover:scale-105 iphoneP:rounded-md"> 
                <div className="absolute w-fit font-semibold 2xl:text-base xl:text-base iphoneP:text-center iphoneP:text-[12px] text-warna1">
                    Belajar Fundamental -&gt;
                  </div>
                </div>
              </Link>
            </div>
            </div>
        </div>

    
        <div className="bg-warna1 w-full 2xl:left-[200px] 2xl:h-[1566px] 
                          xl:left-[200px] xl:h-[1566px]
                          iphoneP:left-[200px] iphoneP:h-[1966px]">
            <div className="relative w-[338px] h-[116px] top-[765px] left-[227px]
                            iphoneP:left-[50px]">
              <div className="relative 2xl:h-[116px] 2xl:left-[320px] 2xl:-top-px
                            xl:h-[116px] xl:-left-[30px] xl:-top-px
                            iphoneP:h-[116px] iphoneP:-left-[30px] iphoneP:-top-60 ">
                  <div className="absolute w-[280px] h-[65px] top-[51px] left-[58px] font-IBM font-semibold text-black 2xl:text-[40px] iphoneP:text-[30px] text-center tracking-[0] leading-[normal]">
                    DIMENGERTI
                  </div>
                  <div className="absolute w-[280px] h-[65px] top-0 left-0 font-IBM font-semibold text-black 2xl:text-[40px] iphoneP:text-[30px] text-center tracking-[0] leading-[normal]">
                    CARA KERJA
                  </div>
              </div>
              <p className="absolute 2xl:w-[868px] 2xl:top-0 2xl:left-[704px] 2xl:text-[18px] 
                xl:w-[768px] xl:left-[360px] xl:top-0 xl:text-[16px]
                iphoneP:w-[360px] iphoneP:-left-8 iphoneP:-top-24 iphoneP:text-[14px]
                font-IBM font-medium  text-black tracking-[0] leading-[normal]">
                Dimengerti menggunakan model learning mobilenet_v2. Mobilenet_v2 adalah 
                sebuah arsitektur jaringan saraf tiruan (neural network) 
                yang dikembangkan khusus untuk tugas deteksi objek dan 
                klasifikasi gambar pada perangkat bergerak (mobile devices) dengan sumber daya terbatas.
              </p>
              <Link to="https://huggingface.co/docs/transformers/model_doc/mobilenet_v2">
                <div className="flex 2xl:w-[248px] 2xl:h-[60px] 2xl:top-32 2xl:left-[704px]
                xl:w-[248px] xl:h-[60px] xl:top-32 xl:left-[360px]
                iphoneP:w-[155px] iphoneP:h-[60px] iphoneP:top-20 iphoneP:-left-[33px]
                items-center hover:scale-105 justify-center px-0 py-[15px] absolute from-gray-950 bg-gradient-to-tl to-gray-700 shadow-md shadow-black iphoneP:rounded-md">
                  <div className="relative w-fit font-semibold text-[#f5f7f8] 
                  2xl:text-[16px] 
                  xl:text-[16px] 
                  iphoneP:text-[12px] iphoneP:text 
                  tracking-[0] leading-[normal]">
                    Belajar Fundamental -&gt;
                  </div>
                </div>
              </Link>
              
                <div className="inline-flex items-start 2xl:flex-row iphoneP:flex-col 2xl:gap-[71px] iphoneP:gap-36 absolute 
                2xl:top-[454px] 2xl:left-[355px]
                xl:top-[454px] xl:-left-[0px] xl:flex-row xl:gap-[71px]
                iphoneP:top-[300px] iphoneP:-left-6">
                <div className="relative w-[353px] h-[196px]">
                  <div className="absolute w-[203px] h-[103px] top-0 left-0">
                    <div className="relative w-[338px] h-[102px]">
                      <div className="inline-flex flex-col items-center justify-center absolute -top-[100px] left-0">
                          <img src={arrow} alt=""/>
                          <span class="icon-[mdi--image-outline] top-0 mt-2 w-24 h-24" ></span>
                          <div className="relative w-[237px] h-[55px] font-IBM font-semibold text-black text-[40px] text-center tracking-[0] leading-[normal]">
                            Gambar
                          </div>
                      </div>
                      <p className="absolute w-[331px] top-[90px] left-[22px] font-IBM font-light text-black text-[16px] tracking-[0] leading-[normal]">
                        Gambar ditangkap dari kamera, berupa gerak tangan yaitu isyarat abjad
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-[338px] h-[102px] iphoneP:h-[200px]">
                  <div className="inline-flex flex-col items-center justify-center absolute -top-[100px] left-0">
                  <img src={arrow} alt=""/>
                  <span class="icon-[mdi--smoke-detector-alert] top-0 mt-2 w-24 h-24" ></span>
                    <div className="relative w-[237px] h-[55px] font-IBM font-semibold text-black text-[40px] text-center tracking-[0] leading-[normal]">
                      Deteksi
                    </div>
                  </div>
                  <p className="absolute w-[331px] top-[90px] left-[7px] font-IBM font-light text-black text-[16px] tracking-[0] leading-[normal]">
                    Klasifikasi gambar, preprocessing gambar sesuaikan dengan model yang telah dipelajari
                  </p>
                </div>
                <div className="relative w-[338px] h-[102px]">
                  <div className="inline-flex flex-col items-center justify-center absolute -top-[100px] left-0">
                    <img src={arrow} alt=""/>
                    <span class="icon-[mdi--hand-front-left-outline] top-0 mt-2 w-24 h-24" ></span>
                    <div className="relative w-[287px] h-[55px] font-IBM font-semibold text-black text-[40px] text-center tracking-[0] leading-[normal]">
                      Terjemahkan
                    </div>
                  </div>
                  <p className="absolute w-[331px] top-[90px] left-[9px] font-IBM font-light text-black text-[16px] tracking-[0] leading-[normal]">
                    Gambar yang sudah sesuai atau simmilar kemudian diterjemahkan
                  </p>
                </div>
                </div>
            </div>
        </div>
       
       <div className="bg-warna2 w-full 2xl:h-[700px]">

        <div className="bg-warna2 w-full 2xl:pl-64 xl:pl-0 2xl:h-[646px] md:h-[500px] xl:h-[700px] iphoneP:h-[700px] smini:h-[500px]">
          <div className="relative">
              <div className="absolute 2xl:w-[239px] 2xl:h-[51px] 2xl:top-[103px] 2xl:left-[118px] 
                  xl:w-[239px] xl:h-[51px] xl:top-[103px] xl:left-[118px]
                  iphoneP:w-[239px] iphoneP:h-[51px] iphoneP:top-[13px] iphoneP:left-[18px]
                  border-b-8 border-black font-IBM font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
                  Tentang Kita
                </div>
                <p className="absolute 
                    2xl:w-[972px] 2xl:h-[196px] 2xl:top-[196px] 2xl:left-[112px]                   
                    xl:w-[972px] xl:h-[196px] xl:top-[196px] xl:left-[112px]                    
                    iphoneP:w-[350px] iphoneP:text-left iphoneP:h-[196px] iphoneP:top-[96px] iphoneP:left-[12px]

                    font-IBM font-semibold text-black 2xl:text-[40px] xl:text-[40px] iphoneP:text-[22px] tracking-[0] leading-[normal]">
                    DIMENGERTI DIBANGUN UNTUK MEMBANTU ANAK-ANAK PENYANDANG TUNARUNGU DALAM BELAJAR ABJAD
                </p>
                <p className="absolute 
                  2xl:w-[945px] 2xl:top-[402px] 2xl:left-[112px] 2xl:text-[20px]
                  xl:w-[945px] xl:top-[402px] xl:left-[112px] xl:text-[20px]
                  iphoneP:w-[345px] iphoneP:top-[282px] iphoneP:left-[12px] iphoneP:text-[16px] iphoneP:text-left
                  font-IBM font-medium text-black  tracking-[0] leading-[normal]">
                  Dimengerti dapat digunakan sebagai alat bantu dalam pembelajaran inklusi khususnya di sekolah-sekolah luar
                  biasa sehingga dapat menjadi media bantu dalam belajar abjad dengan memanfaatkan teknologi aplikasi
                </p>
                <div className="flex 
                2xl:w-[278px] 2xl:h-[60px] 2xl:top-[599px] 2x;left-[112px]
                xl:w-[278px] xl:h-[60px] xl:top-[599px] xl:left-[112px]
                iphoneP:w-[278px] iphoneP:h-[60px] iphoneP:top-[599px] iphoneP:left-[50px]
                items-center justify-center px-0 py-[15px] absolute  bg-black shadow-[0px_4px_4px_#00000040]">
                  <p className="relative w-fit mt-[-7.00px] mb-[-5.00px] font-IBM font-semibold text-[#f5f7f8] text-[16px] text-center tracking-[0] leading-[normal]">
                    Supported By : <br />
                    SLB PRI KOTA PEKALONGAN
                  </p>
                </div>
          </div>
        </div>
        
       </div>  

      <Footer/>        
        
        </>
      );
    
}

export default tentang;