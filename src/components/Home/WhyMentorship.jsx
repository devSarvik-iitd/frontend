import { FaBookOpen, FaFrown, FaHourglassHalf, FaUserAltSlash, FaUserSecret } from "react-icons/fa";

const WhyMentorship = () => {
  const features = [
    {
      icon: <FaBookOpen className="text-blue-600 text-4xl mb-4" />,
      title: "Overwhelmed by Study Material",
      description: "Too many resources, too little clarity—don't know what to follow."
    },
    {
      icon: <FaHourglassHalf className="text-blue-600 text-4xl mb-4" />,
      title: "Procrastination & Backlogs",
      description: "Struggle to stay on track, leading to piled-up chapters and guilt."
    },
    {
      icon: <FaFrown className="text-blue-600 text-4xl mb-4" />,
      title: "Stress & Lack of Motivation",
      description: "Anxiety before tests and lack of drive affect daily consistency."
    },
    {
      icon: <FaUserAltSlash className="text-blue-600 text-4xl mb-4" />,
      title: "Can't Discuss Problems Freely",
      description: "Feel hesitant to open up about doubts with teachers or parents."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Mentorship!!!</h2>
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

export default WhyMentorship;
