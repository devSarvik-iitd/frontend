import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-gray-600 text-lg mb-6">
                        We are a team of IITians who have personally experienced the challenges of the JEE journey. Driven by a passion to support aspiring students, we are committed to bridging the gap in guidance through personalized support. Our focus is on providing tailored mentorship that suits the unique needs of every student, ensuring they stay on the right track throughout their preparation.
                        </p>
                        
                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="text-gray-600 text-lg mb-2">We believe in a holistic approach that combines:</p>
                        <ul className="list-disc pl-6 text-gray-600 mb-6 text-lg ">
                            <li>Empowering students with a structured approach to exam success</li>
                            <li>Offering a support system that keeps them focused and motivated</li>
                        </ul>
                    </div>
                    <div>
                        <img 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                            alt="Team of mentors" 
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
