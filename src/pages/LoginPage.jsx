import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import config from "../config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const navigate = useNavigate();
    const { user} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const res = await fetch(`${config.baseURL}/auth/login`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Login failed");
            }

            console.log("Login successful");
            await login();
            setLoginSuccess(true);
        } catch (err) {
            console.error("Error:", err.message);
            setError(err.message);
        }
    };

    useEffect(() => {
        let timer;

        if (loginSuccess || user) {
            timer = setTimeout(() => {
                navigate("/");
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [loginSuccess, user, navigate]);


    return loginSuccess ? (
        <div className="text-center my-8 text-xl"><p>Login Successful</p> <p>Redirecting to dashboard . . . </p></div>
    ) : user ? (
        <div className="text-center my-8 text-xl"><p>Hey, {user.firstName}</p><p>You are already logged in</p> <p>Redirecting to dashboard . . . </p></div>
    ) : (
        <div className="flex h-screen bg-gray-100">
            {/* Left Section - Illustration */}
            <div className="w-1/2 flex flex-col items-center justify-center p-10">
                <img src="/illustration.png" alt="Students studying" className="w-3/4" />
                <button className="mt-6 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded text-lg">
                    SIGN UP
                </button>
            </div>

            {/* Right Section - Login Form */}
            <div className="w-1/2 flex flex-col items-center justify-center">
                <div className="bg-white w-[75%] shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <h2 className="text-2xl font-bold text-left mb-4 text-purple-700">
                        Welcome to TheNexStep
                    </h2>
                    <h2 className=" font-bold text-left mb-4">
                        Login to dive into the journey of learning . . .
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:scale-110 transition-all duration-3s ease-in-out"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:scale-110 transition-all duration-3s ease-in-out"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                        <div className="flex justify-between items-center text-right mb-4">
                            <Link to="/reset-password" className="text-sm text-gray-600 hover:text-gray-800">Forgot Password?</Link>
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outline w-full hover:cursor-pointer rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account? <Link to="/register" className="text-purple-700 hover:text-purple-900">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
