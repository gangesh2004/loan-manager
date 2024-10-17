import React, { useState } from 'react';
import styles from '../styles/LoanForm.module.css';

const LoanForm: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call an API or handle form submission
    console.log({ loanAmount, tenure, employmentStatus, reason });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Apply for a Loan</h2>
      <div className={styles.inputField}>
        <label htmlFor="loanAmount">Loan Amount</label>
        <input
          id="loanAmount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputField}>
        <label htmlFor="tenure">Tenure (Months)</label>
        <input
          id="tenure"
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputField}>
        <label htmlFor="employmentStatus">Employment Status</label>
        <input
          id="employmentStatus"
          type="text"
          value={employmentStatus}
          onChange={(e) => setEmploymentStatus(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputField}>
        <label htmlFor="reason">Reason for Loan</label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </div>
      <div className={styles.submitButton}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default LoanForm;
