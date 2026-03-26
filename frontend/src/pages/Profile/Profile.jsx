import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

     
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get("http://localhost:3000/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(res.data);

      } catch (error) {
        console.log("ERROR:", error.response?.data || error.message);

        
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">

        <h2 className="text-2xl font-bold mb-6 text-red-600">
          👤 Profile
        </h2>

        <div className="mb-4">
          <p className="text-gray-500">Name</p>
          <p className="text-lg font-semibold">{user?.name}</p>
        </div>

        <div className="mb-6">
          <p className="text-gray-500">Email</p>
          <p className="text-lg font-semibold">{user?.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Profile;