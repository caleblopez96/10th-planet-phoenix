import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import Hero2 from "../Components/Hero/Hero2";
import eddieB from "../assets/HERO SM/20211025_200740.jpg";

export default function Privacy() {
  return (
    <>
      <Hero2 imageOne={eddieB} />
      <div id="privacy" className="max-w-[1200px] mx-auto px-4">
        <PrivacyPolicy />
      </div>
    </>
  );
}
