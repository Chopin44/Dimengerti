import React from 'react';
import video from "../assets/demo.mp4";
import FAQ from '../Components/faq';
import Navbar from '../Components/navbar';

const Tutorial = () => {
  // Video URL
  const videoUrl = `${video}`;

  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How to install Tailwind CSS?',
      answer: 'You can install Tailwind CSS using npm or yarn.',
    },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Navbar />
      <FAQ faqs={faqs}/>
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
