import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import Hero2 from "../Components/Hero/Hero2";
import eddieB from "../assets/HERO SM/20211025_200740.jpg";
import test3 from "../assets/test3.png";

export default function Privacy() {
  return (
    <>
      <Hero2 imageOne={test3} imageTwo={eddieB} content={"Privacy Policy"} />
      <div id="privacy" className="max-w-[1200px] mx-auto px-4">
        <PrivacyPolicy />
      </div>
    </>
  );
}
