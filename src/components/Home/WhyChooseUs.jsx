import { FaUserGraduate, FaQuestionCircle, FaChartLine, FaClock } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserGraduate className="text-blue-600 text-4xl mb-4" />,
      title: "Personalized Study Plans",
      description: "Tailored guidance based on your strengths & weaknesses."
    },
    {
      icon: <FaQuestionCircle className="text-blue-600 text-4xl mb-4" />,
      title: "Doubt Solving with Experts",
      description: "Get instant answers from mentors."
    },
    {
      icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
      title: "Proven Strategies",
      description: "Learn techniques from IITians & top scorers."
    },
    {
      icon: <FaClock className="text-blue-600 text-4xl mb-4" />,
      title: "Time Management Tips",
      description: "Stay consistent & stress-free."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 testimonial-card">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
