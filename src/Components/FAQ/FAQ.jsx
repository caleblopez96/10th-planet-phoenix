import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl mb-2 bg-gray-200 overflow-hidden card faq-buttons">
      <button
        className="w-full flex justify-between items-center p-4 font-bold uppercase tracking-wide hover:bg-gray-400 transition duration-400 text-sm faq-button text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-lg font-bold">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-80 p-4" : "max-h-0"
        }`}
      >
        <p className="">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = ({ faqs }) => {
  return (
    <div className="mx-auto p-6 my-12 shadow-lg card rounded-lg">
      <h2 className="text-xl font-bold uppercase tracking-wide mb-4">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQ;
