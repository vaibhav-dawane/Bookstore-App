import User from "../model/user.model.js"
import bycryptjs from "bcryptjs"

export const signup = async(req, res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({message: "Email Already Exist"})
        }

        const hashedPassword = await bycryptjs.hash(password, 10)

        const newUser = await User.create({
            fullname,
            email,
            password: hashedPassword
        })

        return res.status(200).json({message: "User Created Successfully",
             user: {
                fullname: newUser.fullname,
                email: newUser.email,
                _id: newUser._id
        },})
    } catch (error) {
        console.log("Error Occured: ", error.message);
    }
}

export const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})

        // user.password is password in database
        // password is given by user in req body
        // it will compare the user entered password with the password in database
        const isMatch = await bycryptjs.compare(password, user.password)

        if(!user || !isMatch)
        {
            return res.status(400).json({message: "Invalid Credentials"})
        }
        return res.status(200).json({message: "Login Successful", 
            user: {
            _id: user._id,
            fullname: user.fullname,
            email: user.email
        },})
    } catch (error) {
        console.log("Error Occured: ", error.message);
    }
}