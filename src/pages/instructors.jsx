import eddie from "../Components/Information/eddie-bravo.jpg";
import johnKeith from "../assets/HERO SM/IMG_20210703_121346.jpg";

import EliteInstructors from "../Components/EliteInstructors/EliteInstructors";
import InstructorBio from "../Components/EliteInstructors/InstructorBio";
import Hero2 from "../Components/Hero/Hero2";

const Instructors = () => {
  return (
    <>
      <Hero2
        imageOne={eddie}
        imageTwo={johnKeith}
        content={"Instructors"}
        height="75vh"
      />
      <EliteInstructors />
      <InstructorBio />
    </>
  );
};

export default Instructors;
