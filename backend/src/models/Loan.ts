import mongoose, { Document, Schema } from 'mongoose';

interface ILoan extends Document {
  userId: string;          // Reference to the User who applied for the loan
  loanAmount: number;      // Amount of the loan
  tenure: number;          // Tenure in months
  employmentStatus: string; // Employment status of the user
  reason: string;          // Reason for the loan
  status: string;          // Current status of the loan (e.g., pending, approved, rejected)
  createdAt: Date;         // Date when the loan was created
}

const loanSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Reference to User model
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  tenure: {
    type: Number,
    required: true,
  },
  employmentStatus: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Loan = mongoose.model<ILoan>('Loan', loanSchema);
export default Loan;
