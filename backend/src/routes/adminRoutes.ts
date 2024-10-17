import express from 'express';
import { getVerifiers, deleteVerifier } from '../controllers/admincontroller';

const router = express.Router();

// Route to get all verifiers
router.get('/verifiers', getVerifiers);

// Route to delete a verifier by ID
router.delete('/verifiers/:id', deleteVerifier);

// Add more admin-related routes as needed

export default router;
