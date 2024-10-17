import { Request, Response } from 'express';
import User from '../models/User';
import generateToken from '../utils/generateToken'; // Import your token generation utility

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  const { username, password, role } = req.body;

  const newUser = new User({ username, password, role });

  try {
    const savedUser = await newUser.save();
    const token = generateToken(savedUser._id);
    res.status(201).json({ user: savedUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login user
export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

// Add more user-related functions as needed
