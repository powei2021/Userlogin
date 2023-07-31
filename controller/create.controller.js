const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const tokenSecretKey = require('crypto').randomBytes(32).toString('hex');
module.exports = {
    register: async (req, res)=>{
        try{
           const {
               firstname, lastname, dateOfBirth, gender, phone, email, address, password
            } = req.body;
           //hash password and salt
            const salt = await bcrypt.genSalt(20);
            const hashedPassword = await bcrypt.hash(password, salt);

            //console.log({ tokenSecretKey }); 
            //create a new user
            const user = await new User({
                firstname,
                lastname,
                dateOfBirth,
                gender,
                phone,
                email,
                address,
                password: hashedPassword,
            })
            // token secret key
            const tokenSecretKey = process.env.JWT_SECRET;
            //data to be
            const data = { _id: user._id };
            console.log(data)
            //token expiration time
            const tokenExpirationTime = process.env.JWT_EXPIRATION_TIME;
            console.log(tokenExpirationTime);

            //create a token
            const token = jwt.sign(data, tokenSecretKey, {
                expiresIn: tokenExpirationTime
            })
            console.log(token);
            //await user.save();
            if(!user) return res.status(400).json({result: "User not created" });
            return res.status(200).json({result: user});
        } catch (err){
           return res.status(400).json({
                message: err.message,
            });
        }
    },
    login: async (req,res) => {
        try { 
           const { email, password } = req.body;
           const user = await User.findOne({email});
           if(!user) return res.status(404).send("Email Not Found, pls register");

           const isValid = await bcrypt.compare(password, user.password);
           if (!isValid) return res.status(400).json({result: "wrong password"});
           return res.status(200).json({result: user})
        } catch(err) {
        res.status(400).json({message: err.message})
        }
     },
}