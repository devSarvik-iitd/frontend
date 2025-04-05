import React from "react";

const testimonials = [
  {
    name: "Aman, JEE Aspirant",
    //image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Thanks to this mentorship, I improved my JEE rank from 20,000 to under 5,000! Highly recommend!",
  },
  {
    name: "Neha, Class 12 Student",
    //image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "My confidence in Physics improved a lot after just 3 sessions with my mentor.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                {/* <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                /> */}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
