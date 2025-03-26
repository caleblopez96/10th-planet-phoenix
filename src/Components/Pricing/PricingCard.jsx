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
  { membership: "$400 3 Months", description: "" },
  { membership: "Drop-in", description: "" },
  { membership: "Drop-in", description: "" },
];

const PricingCard = () => {
  return (
    <ul>
      {pricingCardInformation.map((membership, index) => (
        <li key={index}>
          <h2>{membership.membership}</h2>
          <p>{membership.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default PricingCard;
