import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What is 10th Planet?",
    answer: `It is a unique style of no gi Brazilian Jiu Jitsu
        which was made to work both inside the cage and on the sporting mats.
        The intentionality behind the creation was to have an unorthodox style
        which could keep an opponent under constant control and in the threat of
        danger`,
  },
  {
    question: "Where are you located?",
    answer: "We are located in Phoenix, AZ, off N. Stapley and Baseline",
  },
  {
    question: "Do I need experience?",
    answer:
      "10th Planet Jiu-Jitsu caters to atheletes of all skill levels. We encourage new grapplers to come and try our innovative system",
  },
  {
    question: "How do I sign up?",
    answer: "Visit our website or give us a call to sign up!",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-lg mx-auto bg-gray-800 px-6 py-15 rounded-lg shadow-lg">
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
