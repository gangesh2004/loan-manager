import express from 'express';
import { registerUser, loginUser } from '../controllers/usercontroller';

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to login a user
router.post('/login', loginUser);

// Add more user-related routes as needed

export default router;
