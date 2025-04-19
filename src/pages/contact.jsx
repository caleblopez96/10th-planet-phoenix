import Hero2 from "../Components/Hero/Hero2";
import ContactForm from "../Components/ContactForm/ContactForm";
import eddieB from "../Components/Information/eddie-bravo.jpg";

const Contact = () => {
  return (
    <div>
      <Hero2 imageOne={eddieB} imageTwo={eddieB} content={"Contact"} />
      <div className="max-w-[1200px] mx-auto px-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
