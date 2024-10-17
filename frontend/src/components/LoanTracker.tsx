import React from 'react';

interface Loan {
  loanId: string;
  loanAmount: number;
  tenure: number;
  status: string;
}

const LoanTracker: React.FC<{ loans: Loan[] }> = ({ loans }) => {
  return (
    <div className="loan-tracker">
      <h2>Your Loan Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>Loan Amount</th>
            <th>Tenure</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.loanId}>
              <td>{loan.loanId}</td>
              <td>${loan.loanAmount}</td>
              <td>{loan.tenure} months</td>
              <td>{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanTracker;
