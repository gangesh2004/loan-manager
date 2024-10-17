import { Request, Response } from 'express';
import Loan from '../models/Loan';

// Apply for a new loan
export const applyForLoan = async (req: Request, res: Response) => {
  const { userId, loanAmount, tenure, employmentStatus, reason } = req.body;

  const newLoan = new Loan({
    userId,
    loanAmount,
    tenure,
    employmentStatus,
    reason,
    status: 'pending',
  });

  try {
    const savedLoan = await newLoan.save();
    res.status(201).json(savedLoan);
  } catch (error) {
    res.status(500).json({ message: 'Error applying for loan', error });
  }
};

// Get loans for a specific user
export const getUserLoans = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const loans = await Loan.find({ userId });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving loans', error });
  }
};

// Add more loan-related functions as needed
