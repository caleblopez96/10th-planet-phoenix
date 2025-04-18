const pricingInformation = [
  {
    id: 1,
    membership: "$25 Drop-in",
    description: "$200 10 Use Punch Pass",
    featured: false,
  },
  {
    id: 2,
    membership: "$150 Monthly",
    description: "12 month agreement with registration fee",
    featured: false,
  },
  {
    id: 3,
    membership: "$180 Monthly",
    description: "No agreement with registration fee",
    featured: true,
  },
  {
    id: 4,
    membership: "$400 3 Months",
    description: "Paid in full with registration fee",
    featured: false,
  },
  {
    id: 5,
    membership: "$775 6 Months",
    description: "Paid in full, no registration fee",
    featured: false,
  },
  {
    id: 6,
    membership: "$1500 12 Months",
    description: "Paid in full, no registration fee",
    featured: false,
  },
];

export const PricingSection = () => {
  return (
    <div className="pricing-container max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Unlimited Classes and Access to the Facility
        </p>
      </header>
      <PricingCard />
    </div>
  );
};

export const PricingCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pricingInformation.map((plan) => (
        <div
          key={plan.id}
          className={`
            p-6 rounded-lg shadow-md transition-all duration-300
            ${
              plan.featured
                ? "bg-red-50 border-2 border-red-700 scale-105"
                : "bg-white border border-gray-200 hover:shadow-lg"
            }
          `}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {plan.membership}
            </h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            {plan.featured && (
              <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingSection;
