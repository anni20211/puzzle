
// import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;
        if (!username || !email || !password || !confirmPassword) {
          return res.status(400).json({ message: 'Please fill all the  required fields' });
        }
        if (password !== confirmPassword) {
          return res.status(400).json({ message: 'Passwords do not match' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
          username,
          email,
          password: hashedPassword,
          confirmPassword,
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
      }
  };
  export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        });
          res.status(201).send({ message: 'Login successful' });
      } catch (error) {
        res.status(400).send({ message: 'Login failed' });
      }
  };
  export const logout=(req,res)=>{
    res.clearCookie('jwt');
    res.status(200).send({ message: 'Logout successful' });
  }