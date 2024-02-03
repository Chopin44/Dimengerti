import React from 'react';
import video from "../assets/demo.mp4";
import Navbar from '../Components/navbar';

const Tutorial = () => {
  // Video URL
  const videoUrl = `${video}`;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
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
    </>
  );
};

export default Tutorial;
