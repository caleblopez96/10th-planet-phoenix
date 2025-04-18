import ClassSchedule from "../Components/ClassSchedule/ClassSchedule";
import ClassesSection from "../Components/ClassesSection/ClassesSection";
import FAQ from "../Components/FAQ/FAQ";
import Hero2 from "../Components/Hero/Hero2";
import ClassDescription from "../Components/ClassDescription/ClassDescription";

// image imports
import classes1 from "../assets/classes/classes1.jpg";
import classes2 from "../assets/classes/classes2.jpg";

const classesFAQs = [
  {
    question: "What age can children start training",
    answer: "We recommend children start training at age 7.",
  },
  { question: "What should I bring with me?", answer: "" },
  { question: "What should I wear?", answer: "" },
  { question: "Are mouth pieces required?", answer: "" },
];

const Classes = () => {
  return (
    <>
      <Hero2 imageOne={classes1} imageTwo={classes2} content={"Classes"} />
      <div className="max-w-[1200px] mx-auto px-4">
        <ClassSchedule />
        <ClassesSection />
        <ClassDescription />
        <FAQ faqs={classesFAQs} />
      </div>
    </>
  );
};

export default Classes;
