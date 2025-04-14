import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  }
  const navigateToRegister = () => {
    navigate('/register');
  }
  const navigateToHome = () => {
    navigate('/');
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="home" onClick={navigateToHome} smooth duration={500} className="text-2xl font-bold text-blue-600 cursor-pointer">
          TheNexStep
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 focus:outline-none">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="home" smooth duration={500} className="text-gray-800 hover:text-blue-600 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth duration={500} className="text-gray-800 hover:text-blue-600 cursor-pointer">
            About
          </Link>
          <Link to="how-it-works" smooth duration={500} className="text-gray-800 hover:text-blue-600 cursor-pointer">
            How It Works
          </Link>
          <Link to="pricing" smooth duration={500} className="text-gray-800 hover:text-blue-600 cursor-pointer">
            Pricing
          </Link>
          <Link to="contact" smooth duration={500} className="text-gray-800 hover:text-blue-600 cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Login & Signup Buttons */}
        {!user && (
          <div className="hidden md:flex space-x-4">
            <button onClick={navigateToLogin} className="bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 hover:scale-110">
              Login / Signup
            </button>
          </div>
        )}

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6">
          <Link to="home" smooth duration={500} className="block py-2 text-gray-800 hover:text-blue-600 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="about" smooth duration={500} className="block py-2 text-gray-800 hover:text-blue-600 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="how-it-works" smooth duration={500} className="block py-2 text-gray-800 hover:text-blue-600 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            How It Works
          </Link>
          <Link to="pricing" smooth duration={500} className="block py-2 text-gray-800 hover:text-blue-600 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="contact" smooth duration={500} className="block py-2 text-gray-800 hover:text-blue-600 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          {/* Mobile Login & Signup Buttons */}
         {!user &&( <div className="mt-4 flex flex-col space-y-2">
            <button onClick={navigateToLogin} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">
              Login / Signup
            </button>
        
          </div>)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
