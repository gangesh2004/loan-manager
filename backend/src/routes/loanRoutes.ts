import express from 'express';
import { applyForLoan, getUserLoans } from '../controllers/loancontroller';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// Route to apply for a loan (requires authentication)
router.post('/apply', authMiddleware, applyForLoan);

// Route to get loans for a specific user (requires authentication)
router.get('/user/:userId', authMiddleware, getUserLoans);

// Add more loan-related routes as needed

export default router;
