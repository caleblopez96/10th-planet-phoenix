import ClassSchedule from "../Components/ClassSchedule/ClassSchedule";
import ClassesSection from "../Components/ClassesSection/ClassesSection";
import FAQ from "../Components/FAQ/FAQ";

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
      <ClassSchedule />
      <ClassesSection />
      <FAQ faqs={classesFAQs} />
    </>
  );
};

export default Classes;
