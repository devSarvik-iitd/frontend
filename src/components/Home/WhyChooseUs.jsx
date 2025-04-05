import { FaUserGraduate, FaRegCalendarAlt, FaLayerGroup, FaClipboardList } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserGraduate className="text-blue-600 text-4xl mb-4" />,
      title: "Mentor from IIT",
      description: "1-On-1 guidance from someone who already cracked JEE."
    },
    {
      icon: <FaRegCalendarAlt className="text-blue-600 text-4xl mb-4" />,
      title: "Personalized Schedule",
      description: "Study plans tailored to your pace, syllabus & strengths."
    },
    {
      icon: <FaLayerGroup className="text-blue-600 text-4xl mb-4" />,
      title: "Curated Resources",
      description: "Handpicked notes, PYQs & material to avoid overwhelm."
    },
    {
      icon: <FaClipboardList className="text-blue-600 text-4xl mb-4" />,
      title: "Mock Exams",
      description: "Real exam feel with detailed performance breakdown."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">What We Provide</h2>
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
