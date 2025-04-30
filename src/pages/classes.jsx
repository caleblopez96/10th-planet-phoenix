import ClassSchedule from "../Components/ClassSchedule/ClassSchedule";

import FAQ from "../Components/FAQ/FAQ";
import Hero2 from "../Components/Hero/Hero2";
import ClassDescription from "../Components/ClassDescription/ClassDescription";

// image imports
import classes1 from "../assets/classes/classes1.jpg";
import classes2 from "../assets/classes/classes2.jpg";

const classesFAQs = [
  {
    question: "When can children start training?",
    answer: "We recommend children start training at age 7.",
  },
  {
    question: "What should I bring with me?",
    answer:
      "Bring a water bottle, a towel, and be ready to train hard! If it’s your first class, we’ll handle the rest.",
  },
  {
    question: "What should I wear?",
    answer:
      "Wear a rash guard or athletic shirt and shorts with no pockets, zippers, or metal. No loose clothing.",
  },
  {
    question: "Are mouth pieces required?",
    answer:
      "Mouth pieces aren’t required for beginner classes, but we strongly recommend them for sparring and live drills.",
  },
];

const Classes = () => {
  return (
    <>
      <Hero2 imageOne={classes1} imageTwo={classes2} content={"Classes"} />
      <div className="max-w-[1200px] mx-auto px-4">
        <ClassSchedule />
        <ClassDescription />
        <FAQ faqs={classesFAQs} />
      </div>
    </>
  );
};

export default Classes;
