const jwt = require("jsonwebtoken")
const Users = require("../models/users")


const authMiddleware = (req,res,next) => {
try {
    const authHeader = req.headers.authorization
    console.log("HEADER:", authHeader);
    const token = authHeader.split(" ")[1]
    
    console.log(token)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
} catch (error) {
   console.log("JWT ERROR:", error.message);
    return res.status(401).json({ message: "Invalid token" });
}


}

const getMe = async (req, res) => {  
  try {
    const user = await Users.findByPk(req.user.id, {
      attributes: ["id", "name", "email"]
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {authMiddleware,getMe}