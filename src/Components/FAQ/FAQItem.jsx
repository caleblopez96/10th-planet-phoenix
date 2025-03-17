import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-600 rounded-lg mb-2 bg-gray-700">
      <button
        className="w-full flex justify-between items-center p-4 text-left text-white font-bold uppercase tracking-wide hover:bg-gray-600 transition duration-300"
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
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
