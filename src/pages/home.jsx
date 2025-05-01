// In src/pages/home.jsx
import Hero from "../Components/Hero/Hero";
import EliteInstructors from "../Components/EliteInstructors/EliteInstructors";
import ClassesSection from "../Components/ClassesSection/ClassesSection";
import CTABanner from "../Components/CTABanner/CTABanner";
import Information from "../Components/Information/Information";
import FAQ from "../Components/FAQ/FAQ";

const homeFAQs = [
  {
    question: "What is 10th Planet?",
    answer:
      "It is a unique style of no gi Brazilian Jiu Jitsu which was made to work both inside the cage and on the sporting mats. The intentionality behind the creation was to have an unorthodox style which could keep an opponent under constant control and in the threat of danger",
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
    answer:
      "Fill out our contact form or give us a call and let us know you're interested. We'll send you a special sign up link based on the offer selected!",
  },
];

function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-[1200px] mx-auto px-4">
        <Information />
        <EliteInstructors />
        <ClassesSection />
        <CTABanner />
        <FAQ faqs={homeFAQs} />
      </div>
    </>
  );
}

export default Home;
