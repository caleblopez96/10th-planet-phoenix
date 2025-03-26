// UI Component imports
import Hero2 from "../Components/Hero/Hero2";
import Information from "../Components/Information/Information";
import GymEtiquette from "../Components/GymEtiquette/GymEtiquette";

// image imports
import aboutLg from "../assets/about/lineage10p.png";
import aboutSm from "../assets/about/JohnLineageImg.jpg";
import Facility from "../Components/Facility/Facility";

const About = () => {
  return (
    <div>
      <section>
        <Hero2 imageOne={aboutLg} imageTwo={aboutSm} content={"About"} />
        <Information />
        <GymEtiquette />
        <Facility />
      </section>
    </div>
  );
};

export default About;
