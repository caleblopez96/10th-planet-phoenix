import PricingCard from "./PricingCard"; // linting says this import is wrong, but it is indeed correct and I verified by publishing on github pages where the error first occured. if it doesnt fix itself in 24 hours address it
const PricingSection = () => {
  return (
    <div className="pricing-container">
      <header className="pricing-header my-6 px-4 lg:my-12">
        <h2 className="text-2xl font-bold lg:text-3xl">Pricing</h2>
        <p className="text-lg text-gray-600">
          Unlimited Classes and Access to the Facility
        </p>
      </header>
      <PricingCard />
    </div>
  );
};

export default PricingSection;
