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
    <section id="pricing" className=" mx-auto px-4 mb-36">
      <div className="container mb-10">
        <p className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          Something for Everyone
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 relative z-10">
          Our Memberships
        </h2>
        <p className="text-sm md:text-base opacity-70 max-w-2xl">
          Simple, flexible options to fit your goals and lifestyle — whether
          you're here once, or every day.
        </p>
      </div>
      <PricingCard />
    </section>
  );
};

export const PricingCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pricingInformation.map((plan) => (
        <div
          key={plan.id}
          className={`p-6 rounded-lg border transition-all duration-300
            ${
              plan.featured
                ? "border-red-600 ring-1 ring-red-600"
                : "border-gray-300 dark:border-gray-700 hover:shadow"
            }
          `}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3">{plan.membership}</h3>
            <p className="">{plan.description}</p>
            {plan.featured && (
              <span className="inline-block mt-4 text-xs font-semibold text-red-600">
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
