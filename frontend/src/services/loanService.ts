import axios from 'axios';

const API_URL = 'http://localhost:5000/api/loans'; // Adjust this URL based on your backend

export interface Loan {
  loanId: string;
  loanAmount: number;
  tenure: number;
  status: string;
}

export const applyLoan = async (loan: Loan): Promise<Loan> => {
  const response = await axios.post(`${API_URL}/apply`, loan);
  return response.data;
};

export const getUserLoans = async (userId: string): Promise<Loan[]> => {
  const response = await axios.get(`${API_URL}/user/${userId}`);
  return response.data;
};

export const updateLoanStatus = async (loanId: string, status: string): Promise<Loan> => {
  const response = await axios.put(`${API_URL}/status/${loanId}`, { status });
  return response.data;
};
