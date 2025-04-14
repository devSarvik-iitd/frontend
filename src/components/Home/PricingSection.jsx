import { useState } from "react";

const PricingSection = () => {
  const [selectedDuration, setSelectedDuration] = useState(1);

  const durations = [1, 3, 6, 12];

  const plans = [
    {
      tier: "SILVER",
      name: "Basic",
      prices: {
        1: 1399,
        3: 3999,
        6: 7799,
        12: 13999,
      },
      features: [
        "1 session/week",
        "Weekly doubt solving",
        "Basic study materials",
      ],
      bgColor: "bg-gray-100",
      btnColor: "bg-gray-100 hover:bg-gray-200",
    },
    {
      tier: "GOLD",
      name: "Standard",
      prices: {
        1: 2499,
        3: 7299,
        6: 13999,
        12: 24999,
      },
      features: [
        "2 sessions/week",
        "Chat support",
        "Premium study materials",
        "Monthly mock tests",
      ],
      bgColor: "bg-yellow-100",
      btnColor: "bg-yellow-400 hover:bg-yellow-500",
      highlight: true,
    },
    {
      tier: "PLATINUM",
      name: "Premium",
      prices: {
        1: 4799,
        3: 13999,
        6: 24999,
        12: 43999,
      },
      features: [
        "4 sessions/week",
        "Chat support",
        "All study materials",
        "Weekly mock tests",
        "Personalized strategy",
      ],
      bgColor: "bg-purple-100",
      btnColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>

        {/* Duration Tabs */}
        <div className="flex justify-center mb-8 ">
          <div className="inline-flex bg-white rounded-lg shadow p-1">
            {durations.map((duration) => (
              <button
                key={duration}
                className={`px-4 py-2 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out rounded-md duration-tab ${
                  selectedDuration === duration ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => setSelectedDuration(duration)}
              >
                {duration} {duration === 1 ? "Month" : "Months"}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg border ${
                plan.highlight
                  ? "border-2 border-yellow-400 transform md:scale-105 relative"
                  : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="text-center mb-6">
                <span
                  className={`${plan.bgColor} text-gray-800 px-4 py-1 rounded-full text-sm font-semibold`}
                >
                  {plan.tier}
                </span>
                <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
                <div className="text-4xl font-bold my-4">
                  ₹{plan.prices[selectedDuration].toLocaleString()}
                  <span className="text-lg text-gray-500">
                    /{selectedDuration} {selectedDuration === 1 ? "mo" : "mos"}
                  </span>
                </div>
                <p className="text-gray-600">
                  {plan.tier === "SILVER"
                    ? "Perfect for getting started"
                    : plan.tier === "GOLD"
                    ? "Best for serious preparation"
                    : "For top-tier performance"}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i> {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-medium transition ${plan.btnColor}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8">
          * Longer commitments receive additional discounts. Prices shown are for total billing.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
