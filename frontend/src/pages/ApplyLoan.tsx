// ApplyLoan.tsx

import React, { useState } from 'react';
import axios from 'axios';

const ApplyLoan: React.FC = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    loanAmount: '',
    tenure: '',
    employmentStatus: '',
    reason: ''
  });

  // State for handling success and error messages
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Function to handle form data changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send data to the backend
      await axios.post(`${process.env.REACT_APP_API_URL}/loans`, formData);

      // On success, reset form and show success message
      setFormData({
        loanAmount: '',
        tenure: '',
        employmentStatus: '',
        reason: ''
      });
      setSuccessMessage('Loan application submitted successfully.');
      setErrorMessage(null);
    } catch (error) {
      // Show error message if request fails
      setErrorMessage('Failed to submit loan application. Please try again.');
      setSuccessMessage(null);
    }
  };

  return (
    <div className="apply-loan-container">
      <h2>Apply for a Loan</h2>
      
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
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

        <button type="submit" className="btn-submit">Submit Loan Application</button>
      </form>
    </div>
  );
};

export default ApplyLoan;
