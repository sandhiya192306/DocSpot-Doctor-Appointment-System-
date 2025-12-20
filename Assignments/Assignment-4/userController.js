 const User = require("../models/userSchema")

 const Signup = async (req, res) => {
     try {
         const {name,age,city,email,password } = req.body;
         const user = await User.findOne({ name: name });
         if (user) {
            return res.send({ msg: "user already existed" })
        }
        const newUser = await User.create({ name, age, city,email, password });
        res.send({ newUser, msg: "user added successfully" });
    }
    catch (error) {
        console.log(error);
        res.send({ msg: "Internal server error", error });
     }
 };

 const getUsers = async (req, res) => {
     try {
        const myUsers = await User.find();
          res.status(200).json({myUsers, msg:"data fetched successfully"})
     }
    catch (error) {
       res.status(500).json({msg:"Internal server error"})
        }
}

 const updateUser = async (req, res) => {
     try {
        const id = req.param.id;
         const {name,age}= req.body;

         const user = await User.findByIdAndUpdate(id,{name,age});
        res.status(200).json({myUsers, msg:"data fetched successfully",user})
    }
     catch (error) {
         res.status(500).json({msg:"Internal server error"})
          }
 }

 const deleteUser = async (req, res) => {
     try {
         const id = req.param.id;
         await User.findByIdAndDelete(id);
         res.status(200).json({myUsers, msg:"data fetched successfully"})
    }
    catch (error) {
        res.status(500).json({msg:"Internal server error"})
         }
 }


 const MyController = {Signup,getUsers,updateUser,deleteUser};
 module.exports = MyController;