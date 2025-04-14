import React from 'react'

export default function ContactUs() {
    // const founders = [
    //     {
    //         name: "Neelesh",
    //         email: "neelesh.iitd23@gmail.com",
    //     },
    //     {
    //         name: "Sarvik",
    //         email: "sarvik.professional@gmail.com",
    //     },
    //     {
    //         name: "Aarav",
    //         email: "myself.aarav.jha@gmail.com",
    //     },
    // ];

    const socials = [
        {
            name: "Instagram",
            icon: (
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                    className="w-10 h-10 mx-auto"
                />
            ),
            url: "https://instagram.com/",
        },
        {
            name: "Telegram",
            icon: (
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                    alt="Telegram"
                    className="w-10 h-10 mx-auto"
                />
            ),
            url: "https://t.me/TheNexStep/",
        },
        {
            name: "WhatsApp",
            icon: (
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png"
                    alt="WhatsApp"
                    className="w-10 h-10 mx-auto"
                />
            ),
            url: "https://wa.me/7982416910",
        },
    ];


    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>

            {/* Flex container for large screens */}
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left section */}
                <div className="lg:w-1/2 flex flex-col gap-8">

                    {/* Contact Info */}
                    <div className="text-left">
                        <h2 className="text-2xl font-semibold mb-2">Contact Info</h2>
                        <p className="text-lg font-medium">📞 Phone: 7982416910</p>
                        <p className="text-lg font-medium">📍 Address: NG04, Girnar Hostel, IIT Delhi, 110016</p>
                    </div>

                    {/* Founders */}
                    {/* <div>
                        <h2 className="text-2xl font-semibold mb-4">Founders</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {founders.map((founder) => (
                                <div
                                    key={founder.name}
                                    className="bg-white rounded-lg hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out p-6 shadow-md text-center"
                                >
                                    <h3 className="text-xl font-semibold">{founder.name}</h3>
                                    <p className="text-sm text-gray-600">{founder.email}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Social Media */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Connect with us</h2>
                        <div className="flex flex-wrap gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out justify-center w-20 h-20 bg-white hover:bg-blue-100 rounded-lg shadow-md transition"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right section - Google Map */}
                <div className="lg:w-1/2 h-80 lg:h-auto">
                    <h2 className="text-2xl font-semibold mb-4">Find us here</h2>
                    <div className="w-full h-full">
                        <iframe
                            title="Google Map Location"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=28.547665,77.188494&z=15&output=embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
