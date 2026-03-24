

// const express = require('express');
const db = require("../utils/connection_db")
const Users = require("../model/users")    

const sendData = async (req, res) => {
    try {
        const { email, name, age } = req.body;

        const user = await Users.create({ email, name, age });

        return res.status(201).json({
            message: "User created successfully",
            user
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
};

const editUserData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;

        const user = await Users.findByPk(id);
console.log("User",user)
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // await user.update({ name, email, age });
        user.name = name
        user.email = email
        user.age = age
        await user.save()

        res.status(200).json({
            message: "User updated successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error updating user",
            error: error.message
        });
    }
};



const deleteUserDataWithId = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Users.destroy({
            where: { id }
        });

        if (!deleted) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        return res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error deleting user",
            error: error.message
        });
    }
};


const showUserData = async (req, res) => {
    try {
        const users = await Users.findAll({});
        if (users.length === 0) {
             res.status(404).json({
                message: "No users found"
            });
        }

         res.status(200).json(users);

    } catch (error) {
     res.status(500).json({
            message: "Error fetching users",
            error: error.message
        });
    }
};

const getUserWithId = async (req, res) => {
    try {
        const {id} = req.params
       const user = await Users.findAll({
           where: {
           id
           }
       })
       console.log(user)
       if (!user) {
       return res.status(404).send("User not found")
       }
       res.status(200).json({message:"user with id",user})
   } catch (error) {
    res.status(500).send("Error when get user with id")
   }
}
module.exports={sendData,editUserData,deleteUserDataWithId,showUserData,getUserWithId}