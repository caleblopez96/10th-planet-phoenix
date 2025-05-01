import Hero2 from "../Components/Hero/Hero2";
import ContactForm from "../Components/ContactForm/ContactForm";
import eddieB from "../Components/Information/eddie-bravo.jpg";
import test3 from "../assets/test3.png";

const Contact = () => {
  return (
    <div>
      <Hero2 imageOne={test3} imageTwo={eddieB} content={"Contact"} />
      <div className="max-w-[1200px] mx-auto px-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
