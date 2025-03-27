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

const PricingCards = () => {
  return (
    <section className="px-4 mt-6 mb-20">
      <ul className="space-y-4">
        {" "}
        {pricingCardInformation.map((membership, index) => (
          <li
            key={index}
            className="bg-gray-50 p-3 rounded-md border-l-4 border-red-700 pl-4 space-y-4"
          >
            {" "}
            <h2 className="text-lg mb-1">{membership.membership}</h2>
            <p className="text-gray-600">{membership.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PricingCards;
