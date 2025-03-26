import Pricing from "./Pricing";

const pricingCardInformation = [
  { membership: "$25 Drop-in", description: "$200 10 Use Punch Pass" },
  {
    membership: "$150 Monthly",
    description: "12 month agreement with registration fee",
  },
  {
    membership: "$180 Monthly",
    description: "No agreement with registraton fee",
  },
  {
    membership: "$400 3 Months",
    description: "Paid in full with registration fee",
  },
  {
    membership: "$775 6 Months",
    description: "Paid in full, no registration fee",
  },
  {
    membership: "$1500 12 Months",
    description: "Paid in full, no registration fee",
  },
];

const PricingCard = () => {
  return (
    <section className="py-8 px-4">
      <Pricing />
      <ul>
        {pricingCardInformation.map((membership, index) => (
          <li key={index} className="my-4">
            <h2 className="py-2">{membership.membership}</h2>
            <p>{membership.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PricingCard;
