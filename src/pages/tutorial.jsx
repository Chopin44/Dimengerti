import React from 'react';
import Footer from '../Components/footer';
import video from "../assets/demo.mp4";
import Requirements from '../Components/requirement';
import FAQ from '../Components/faq';
import Navbar from '../Components/navbar';

const Tutorial = () => {
  // Video URL
  const videoUrl = `${video}`;

  const faqs = [
    {
        pertanyaan: ( <div className='font-IBM'> Kenapa aplikasi error atau akurasi tidak berubah sama sekali? </div> ),
        jawaban: (
            <span className='font-IBM'>
                Harap menon-aktifkan semua ekstensi yang berhubungan dengan download manager
                seperti Internet Download Manager (IDM).
                Dapat melihat tutorial dengan{' '}
                <a  className="text-blue-500 font-bold" href="https://lifestyle.pinhome.id/blog/cara-mematikan-idm/" target="_blank">
                    klik di sini
                </a>.
            </span>
        ),
    },
    {
      pertanyaan: ( <div className='font-IBM'> Saya sudah menirukan gambar isyarat dengan benar, tetapi kenapa tetap tidak muncul notifikasi berhasil? </div> ),
      jawaban: (
          <span className='font-IBM'>
              Anda bisa memuat ulang halaman anda atau mengaktifkan ulang izin kamera. Jika masih tetap tidak bisa, perlu diperhatikan bahwa aplikasi masih bisa dikembangkan lagi.
              Sehingga Aplikasi ini dengan tingkat akurasi 80% perlu ditingkatkan lagi akurasinya.
          </span>
      ),
    },
    // Tambahkan lebih banyak FAQ jika diperlukan
];

  return (
    <>
      <Navbar />

      <Requirements/>
      <div className="flex flex-col items-center justify-center my-14">
        <div className="2xl:text-[32px] iphoneP:text-[24px] font-IBM font-semibold mb-4">Tutorial Dimengerti App</div>
        <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
          <video className="w-full h-auto" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="font-IBM font-medium mt-4 2xl:text-[26px] iphoneP:text-[20px] iphoneP:text-center">
          video di atas tentang cara penggunaan aplikasi Dimengerti
        </p>
      </div>
      <FAQ faqs={faqs}/>

      <Footer/>
    </>
  );
};

export default Tutorial;
