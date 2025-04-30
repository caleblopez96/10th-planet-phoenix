const FAQItem = ({ question, answer }) => {
  return (
    <details className="rounded-xl mb-2 bg-gray-200 overflow-hidden card faq-buttons group">
      <summary className="w-full flex justify-between items-center p-4 font-bold uppercase tracking-wide hover:bg-gray-400 transition duration-400 text-sm faq-button text-left cursor-pointer">
        {question}
        <span className="text-2xl font-bold transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="p-4">
        <p>{answer}</p>
      </div>
    </details>
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
