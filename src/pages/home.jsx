// In src/pages/home.jsx
import Hero from "../Components/Hero/Hero";
import EliteInstructors from "../Components/EliteInstructors/EliteInstructors";
import ClassesSection from "../Components/ClassesSection/ClassesSection";
import CTABanner from "../Components/CTABanner/CTABanner";
import Information from "../Components/Information/Information";
import FAQ from "../Components/FAQ/FAQ";

function Home() {
  return (
    <>
      <Information />
      <EliteInstructors />
      <ClassesSection />
      <CTABanner />
      <FAQ />
    </>
  );
}

export default Home;
