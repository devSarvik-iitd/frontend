const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                            <span className="text-blue-600 text-3xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Fill the Form</h3>
                        <p className="text-gray-600">Tell us about your current preparation & struggles.</p>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                            <span className="text-blue-600 text-3xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
                        <p className="text-gray-600">We connect you with an IITian or expert mentor.</p>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4">
                            <span className="text-blue-600 text-3xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Book Your Session</h3>
                        <p className="text-gray-600">Discuss doubts, get strategies & improve.</p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                        Start Your Free Mentorship
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
