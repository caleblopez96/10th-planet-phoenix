import FAQItem from "./FAQItem";

const FAQ = ({ faqs }) => {
  return (
    <div className="mx-auto bg-gray-800 px-6 py-15 shadow-lg">
      <h2 className="text-white text-xl font-bold uppercase tracking-wide mb-4">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQ;
