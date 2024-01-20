import React, { useState } from 'react';


const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex items-center justify-between p-4 bg-gray-200 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="font-semibold">{faq.question}</div>
            <div className={`transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}>
              &#9660;
            </div>
          </div>
          {openIndex === index && <div className="p-4 bg-white">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
