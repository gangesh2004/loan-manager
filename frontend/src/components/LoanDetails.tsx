import React from 'react';

interface LoanDetailsProps {
  loanId: string;
  loanAmount: number;
  tenure: number;
  status: string;
  verifier: string;
}

const LoanDetails: React.FC<LoanDetailsProps> = ({ loanId, loanAmount, tenure, status, verifier }) => {
  return (
    <div className="loan-details">
      <h2>Loan Details</h2>
      <p><strong>Loan ID:</strong> {loanId}</p>
      <p><strong>Loan Amount:</strong> ${loanAmount}</p>
      <p><strong>Tenure:</strong> {tenure} months</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Verifier:</strong> {verifier}</p>
    </div>
  );
};

export default LoanDetails;
