import { Request, Response } from 'express';
import User from '../models/User';

// Example function to get all verifiers
export const getVerifiers = async (req: Request, res: Response) => {
  try {
    const verifiers = await User.find({ role: 'verifier' });
    res.status(200).json(verifiers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving verifiers', error });
  }
};

// Example function to delete a verifier
export const deleteVerifier = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'Verifier deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting verifier', error });
  }
};

// Add more admin-related functions as needed
