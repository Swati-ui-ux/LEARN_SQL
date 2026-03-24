import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: ""
  });
const [userData,setUserData]= useState([])
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    let getAllUser =async () => {
        try {
            const res = await axios.get("http://localhost:3000/users")
            setUserData(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    } 
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/users/add",
        formData
      );

      console.log(res.data);
      toast.success("User sign up successfully");

      
      setFormData({
        name: "",
        email: "",
        age: "",
        phone: ""
      });

    } catch (error) {
      console.log(error.message);
      alert("Error adding user");
    }
  };

    return (
      <>
    {/* <div className="min-h-screen flex items-center justify-center bg-gray-100"> */}
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
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}       
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={formData.phone}      
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add User
        </button>

        <ToastContainer />
          </form>
    {/* </div> */}
            <button onClick={getAllUser}>Get All User</button>
            <ul>
                {userData.map((el) => {
                    return <li key={el.id} className="border p-2 m-2">{el.name} {el.email} {el.phone}
                        <button className="bg-green-400 px-4 m-2">Edit</button>
                        <button className="bg-red-400 px-4 m-2">Delete</button>
                    </li>
                
                })}
            </ul>
</>
  );
}

export default SignUp;