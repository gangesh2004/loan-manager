import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Loan {
  _id: string;
  loanAmount: number;
  tenure: number;
  status: string;
}

const Dashboard: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const [formData, setFormData] = useState({
    loanAmount: '',
    tenure: '',
    employmentStatus: '',
    reason: ''
  });

  // Fetch loans when component mounts
  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/loans`);
      setLoans(response.data);
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/loans`, formData);
      fetchLoans(); // Refresh the loan list after submission
    } catch (error) {
      console.error('Error applying for loan:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Loan Application</h2>
      <form onSubmit={handleSubmit} className="loan-application-form">
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tenure">Tenure (in months)</label>
          <input
            type="number"
            id="tenure"
            name="tenure"
            value={formData.tenure}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="employmentStatus">Employment Status</label>
          <select
            id="employmentStatus"
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Self-Employed">Self-Employed</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Loan</label>
          <input
            type="text"
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Apply for Loan</button>
      </form>

      <h2>Your Loan Applications</h2>
      <div className="loan-tracker">
        {loans.length === 0 ? (
          <p>No loans found. Apply for a loan!</p>
        ) : (
          <table className="loan-table">
            <thead>
              <tr>
                <th>Loan Amount</th>
                <th>Tenure</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan._id}>
                  <td>{loan.loanAmount}</td>
                  <td>{loan.tenure} months</td>
                  <td>{loan.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
