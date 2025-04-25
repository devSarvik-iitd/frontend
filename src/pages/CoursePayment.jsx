import React, { useState, useEffect } from "react";

const CoursePayment = () => {
  const durations = [1, 3, 6, 12];
  const plans = [
    {
      tier: "SILVER",
      name: "Basic",
      prices: { 1: 1399, 3: 3999, 6: 7799, 12: 13999 },
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
      prices: { 1: 2499, 3: 7299, 6: 13999, 12: 24999 },
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
      prices: { 1: 4799, 3: 13999, 6: 24999, 12: 43999 },
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

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [finalAmount, setFinalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (selectedCourse) {
      const price = plans.find(plan => plan.name === selectedCourse).prices[selectedDuration];
      const discountAmount = price * discount;
      setFinalAmount(price - discountAmount);
    }
  }, [selectedCourse, selectedDuration, discount]);

  const handleCourseChange = (courseName) => {
    setSelectedCourse(courseName);
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const applyCoupon = async () => {
    // Call backend to verify the coupon
    const response = await fetch("http://localhost:8000/api/verify-coupon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ couponCode }),
    });
    const data = await response.json();
    if (data.success) {
      setDiscount(data.discount); // Assume it returns a discount percentage
    } else {
      alert("Invalid Coupon Code");
    }
  };

  const handlePayment = async () => {
    // Send order creation request to the backend
    const response = await fetch("http://localhost:8000/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseName: selectedCourse,
        duration: selectedDuration,
        amount: finalAmount,
      }),
    });
    const data = await response.json();

    if (data.order) {
      const options = {
        key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
        amount: data.amount * 100, // Amount in paise
        currency: "INR",
        name: "Course Enrollment",
        description: `Enroll for ${selectedCourse} - ${selectedDuration} months`,
        image: "logo_url",
        order_id: data.order.id,
        handler: function (response) {
          alert("Payment Successful!");
          // Handle successful payment here (e.g., store payment status in DB)
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
          contact: "1234567890",
        },
      };

      const razorpayCheckout = new window.Razorpay(options);
      razorpayCheckout.open();
    }
  };

  return (
    <div>
      <h1>Select Your Course</h1>
      <div>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-4 ${plan.bgColor} ${selectedCourse === plan.name ? "border-2 border-black" : ""}`}
            onClick={() => handleCourseChange(plan.name)}
          >
            <h2>{plan.name}</h2>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div>
              {durations.map((duration) => (
                <button
                  key={duration}
                  className={`mr-2 ${plan.btnColor}`}
                  onClick={() => handleDurationChange(duration)}
                >
                  {duration} Months - ₹{plan.prices[duration]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={couponCode}
          onChange={handleCouponChange}
        />
        <button onClick={applyCoupon}>Apply Coupon</button>
      </div>

      <div>
        <h3>Final Amount: ₹{finalAmount}</h3>
      </div>

      <button onClick={handlePayment} disabled={!selectedCourse || !selectedDuration}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default CoursePayment;
