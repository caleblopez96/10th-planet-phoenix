import eddie from "../Components/Information/eddie-bravo.jpg";
import eddieB from "../assets/HERO SM/20211025_200740.jpg";

import InstructorBio from "../Components/EliteInstructors/InstructorBio";
import Hero2 from "../Components/Hero/Hero2";

const Instructors = () => {
  return (
    <>
      <Hero2 imageOne={eddie} imageTwo={eddieB} content={"Instructors"} />
      <div className="max-w-[1200px] mx-auto px-4">
        <InstructorBio />
      </div>
    </>
  );
};

export default Instructors;
