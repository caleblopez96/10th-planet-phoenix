import eddie from "../Components/Information/eddie-bravo.jpg";
import eddieB from "../assets/HERO SM/20211025_200740.jpg";

import InstructorBio from "../Components/EliteInstructors/InstructorBio";
import Hero2 from "../Components/Hero/Hero2";
import FAQ from "../Components/FAQ/FAQ";

const instructorFAQs = [
  {
    question: "Who is John Botello?",
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

const Instructors = () => {
  return (
    <>
      <Hero2 imageOne={eddie} imageTwo={eddieB} content={"Instructors"} />
      <div className="max-w-[1200px] mx-auto px-4">
        <InstructorBio />
        <FAQ faqs={instructorFAQs} />
      </div>
    </>
  );
};

export default Instructors;
