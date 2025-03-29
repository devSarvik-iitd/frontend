import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logout} = useAuth();
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo (Always Visible) */}
        <div className="w-[15%] md:w-auto flex items-center">
          <h2 className="text-xl font-bold text-[#000000] transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer"><Link to="/">TheNexStep</Link></h2>
        </div>

        {/* Desktop Nav (Hidden on Small Screens) */}
        <div className="hidden md:flex w-[70%] justify-center space-x-6">
          <Link to="#" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110">Home</Link>
          <Link to="#" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110">About</Link>
          <Link to="#" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110">Services</Link>
          <Link to="#" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110">Contact</Link>
        </div>

        {/* Auth Buttons (Hidden on Small Screens) */}
        <div className="hidden md:flex w-[15%] justify-end space-x-4">{user?
          (<button onClick={logout} className="hover:underline transition-all hover:cursor-pointer duration-300 ease-in-out hover:scale-110">
            Logout
          </button>):(<Link to="/login" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110">Login</Link>)}
          <Link to="/register" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110">Signup</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav (Appears when toggled) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-center">
          <Link to="#" onClick={()=>setIsOpen(false)} className="hover:underline">Home</Link>
          <Link to="/dashboard" onClick={()=>setIsOpen(false)} className="hover:underline">About</Link>
          <Link to="#" onClick={()=>setIsOpen(false)} className="hover:underline">Services</Link>
          <Link to="#" onClick={()=>setIsOpen(false)} className="hover:underline">Contact</Link>
          <hr className="border-gray-700" />
          <Link to="/login" onClick={()=>setIsOpen(false)} className="hover:underline">Login</Link>
          <Link to="/register" onClick={()=>setIsOpen(false)} className="hover:underline">Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
