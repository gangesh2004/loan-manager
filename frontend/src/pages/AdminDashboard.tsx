// AdminDashboard.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Loan {
  _id: string;
  loanAmount: number;
  tenure: number;
  status: string;
  user: string;  // User who applied for the loan
}

interface Verifier {
  _id: string;
  name: string;
  email: string;
}

const AdminDashboard: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [verifiers, setVerifiers] = useState<Verifier[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch loans and verifiers when the component loads
  useEffect(() => {
    fetchLoans();
    fetchVerifiers();
  }, []);

  // Fetch loans data
  const fetchLoans = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/loans`);
      setLoans(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch loans');
      setLoading(false);
    }
  };

  // Fetch verifiers data
  const fetchVerifiers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/verifiers`);
      setVerifiers(response.data);
    } catch (error) {
      setError('Failed to fetch verifiers');
    }
  };

  // Function to delete a verifier
  const handleDeleteVerifier = async (id: string) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/admin/verifiers/${id}`);
      fetchVerifiers();  // Refresh the verifiers list
    } catch (error) {
      setError('Failed to delete verifier');
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Display Error */}
      {error && <p className="error-message">{error}</p>}

      {/* Loan Section */}
      <section>
        <h3>Loan Applications</h3>
        {loading ? (
          <p>Loading loan applications...</p>
        ) : loans.length === 0 ? (
          <p>No loans available.</p>
        ) : (
          <table className="loan-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Loan Amount</th>
                <th>Tenure (Months)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan._id}>
                  <td>{loan.user}</td>
                  <td>{loan.loanAmount}</td>
                  <td>{loan.tenure}</td>
                  <td>{loan.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Verifier Management Section */}
      <section>
        <h3>Manage Verifiers</h3>
        {verifiers.length === 0 ? (
          <p>No verifiers available. Add new verifiers.</p>
        ) : (
          <table className="verifier-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {verifiers.map((verifier) => (
                <tr key={verifier._id}>
                  <td>{verifier.name}</td>
                  <td>{verifier.email}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteVerifier(verifier._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
