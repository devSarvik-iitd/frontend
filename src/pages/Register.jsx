import { React, useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import config from '../config';

export default function Register() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [otp, setOtp] = useState("");
    const [tempToken, setTempToken] = useState("");

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [registered, setRegistered] = useState(false);

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        }
    }, [user, navigate]);

    // Step 1: Generate OTP
    const handleGenerateOTP = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch(`${config.baseURL}/auth/request-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (!res.ok) {
                setError(data.message);
                throw new Error(data.message || "Failed to send OTP");
            }

            setOtpSent(true);
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Verify OTP
    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch(`${config.baseURL}/auth/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp }),
            });

            const data = await res.json();
            if (!res.ok) {
                setError(data.message);
                throw new Error(data.message || "OTP verification failed");
            }

            setOtpVerified(true);
            setTempToken(data.tempToken);
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Step 3: Register User
    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await fetch(`${config.baseURL}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tempToken, username, firstName, lastName, phone, email, password, gender }),
            });

            const data = await res.json();
            if (!res.ok) {
                setError(data.message);
                throw new Error(data.message || "Registration failed");
            }

            console.log("Registration successful");
            setRegistered(true);

        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        let timer;

        if (registered) {
            timer = setTimeout(() => {
                navigate("/login");
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [registered, otpSent]);

    return user ? (
        <div className="text-center my-8 text-xl">
            <p>You are already logged in</p>
            <p>Redirecting to dashboard . . .</p>
        </div>
    ) : (
        <div className="md:w-[50%] flex flex-col items-center justify-center container mx-auto my-4">
            {registered  ? "Registered successfully. Please login":""} 
            {otpSent && !otpVerified && !registered ? `OTP sent succesfully`:""} 
            {otpSent && otpVerified && !registered ? `OTP verified succesfully`:""} 
            <div className="bg-white w-[75%] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold text-left mb-4 text-blue-700">Welcome to TheNexStep</h2>
                <h2 className="font-bold text-left mb-4">Start your journey . . .</h2>

                {/* Step 1: Email Input for OTP */}
                {!otpSent && (
                    <form onSubmit={handleGenerateOTP}>
                        <div className="mb-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 w-full rounded-md hover:scale-105 transition-all hover:cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? "Sending OTP..." : "Send OTP"}
                        </button>
                    </form>
                )}

                {/* Step 2: OTP Verification */}
                {otpSent && !otpVerified && (
                    <form onSubmit={handleVerifyOTP}>
                        <div className="my-4">
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                placeholder="Enter your OTP"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                        <button
                            type="submit"
                            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 w-full rounded-md hover:scale-105 transition-all hover:cursor-pointer"
                            disabled={loading}
                        >
                            {loading ? "Verifying..." : "Verify OTP"}
                        </button>
                    </form>
                )}

                {/* Step 3: Registration Form (Shown only after OTP verification) */}
                {otpVerified && (
                    <form onSubmit={handleRegister}>
                        <input type="text" className="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2 hover:scale-110 transition-all duration-300 ease-in-out" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                        <input type="text" className="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2 hover:scale-110 transition-all duration-300 ease-in-out" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
                        <input type="text" className="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2 hover:scale-110 transition-all duration-300 ease-in-out" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                        <input type="text" className="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2 hover:scale-110 transition-all duration-300 ease-in-out" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" required />
                        <select value={gender} className="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2 hover:scale-110 transition-all duration-300 ease-in-out hover:cursor-pointer" onChange={(e) => setGender(e.target.value)} required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input type="password" className="shadow border rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline my-2 hover:scale-110 transition-all duration-300 ease-in-out" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        {error && <p className="text-red-500">{error}</p>}
                        <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 w-full rounded-md hover:scale-105 transition-all hover:cursor-pointer">
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
