import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FaBusAlt } from "react-icons/fa";
const Navbar = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };
  return (
    <nav className="bg-red-600 text-white shadow-md">
      
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
              <span>
                  <FaBusAlt size={22} />
                  
              </span>
       

        {/* Links */}
        <div className="space-x-6">
          <Link 
            to="/" 
            className="hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>
 <Link 
            to="/profile" 
            className="hover:text-yellow-300 transition duration-200"
          >
            Profile
          </Link>
          <Link 
            to="/about" 
            className="hover:text-yellow-300 transition duration-200"
          >
            About
          </Link>

          <Link 
            to="/buses" 
            className="hover:text-yellow-300 transition duration-200"
          >
            Buses
          </Link>

        <button
      onClick={handleLogout}
      className="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-gray-200 transition"
    >
      Logout
    </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar