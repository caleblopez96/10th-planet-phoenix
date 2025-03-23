import ClassSchedule from "../Components/ClassSchedule/ClassSchedule";
import ClassesSection from "../Components/ClassesSection/ClassesSection";
import FAQ from "../Components/FAQ/FAQ";
import Hero2 from "../Components/Hero/Hero2";

// image imports
import classes1 from "../assets/classes/classes1.jpg";
import classes2 from "../assets/classes/classes2.jpg";

const classesFAQs = [
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
];

const Classes = () => {
  return (
    <>
      <Hero2
        imageOne={classes1}
        imageTwo={classes2}
        content={"Classes"}
        height={"75vh"}
      />
      <ClassSchedule />
      <ClassesSection />
      <FAQ faqs={classesFAQs} />
    </>
  );
};

export default Classes;
