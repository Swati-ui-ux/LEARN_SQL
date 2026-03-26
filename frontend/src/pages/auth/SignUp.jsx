import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    user: "user",
    password: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.name || !formData.email) {
  return toast.error("Name and Email required");
}
      const res = await axios.post(
        "http://localhost:3000/users/signup",
        formData
      );

      console.log(res.data);
      await getAllUser()
      toast.success("User created successfully");

      
      setFormData({
        name: "",
        email: "",
        role: "user",
        password:""
      });

    } catch (error) {
      console.log(error.message)
       toast.error("Error adding user");
     
    }
  };

    return (
      <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Add User
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}        
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}       
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      
           <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}      
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
<select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add User
        </button>

        <ToastContainer />
          </form>
           
           </div> 
           
</>
  );
}

export default SignUp;