// UserLoans.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Loan {
  _id: string;
  loanAmount: number;
  tenure: number;
  status: string;
  createdAt: string;
  reason: string;
}

const UserLoans: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch loans when component mounts
  useEffect(() => {
    fetchUserLoans();
  }, []);

  const fetchUserLoans = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/loans`);
      setLoans(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching loans:', error);
      setLoading(false);
    }
  };

  return (
    <div className="user-loans-container">
      <h2>Your Loan History</h2>
      {loading ? (
        <p>Loading loans...</p>
      ) : loans.length === 0 ? (
        <p>You haven't applied for any loans yet.</p>
      ) : (
        <table className="loan-history-table">
          <thead>
            <tr>
              <th>Loan Amount</th>
              <th>Tenure (Months)</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Applied On</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan._id}>
                <td>{loan.loanAmount}</td>
                <td>{loan.tenure}</td>
                <td>{loan.status}</td>
                <td>{loan.reason}</td>
                <td>{new Date(loan.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserLoans;
