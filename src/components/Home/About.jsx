import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">About TheNexStep</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="text-gray-600 mb-6">
                            At TheNexStep, we're revolutionizing exam preparation by connecting students with top mentors from IITs and other premier institutions. Our mission is to make personalized guidance accessible to every student.
                        </p>
                        
                        <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
                        <p className="text-gray-600 mb-6">We believe in a holistic approach that combines:</p>
                        <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                            <li>Personalized study strategies</li>
                            <li>Conceptual clarity</li>
                            <li>Exam-specific techniques</li>
                            <li>Confidence building</li>
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
