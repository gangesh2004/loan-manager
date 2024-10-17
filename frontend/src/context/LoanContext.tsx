import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Loan {
  loanId: string;
  loanAmount: number;
  tenure: number;
  status: string;
}

interface LoanContextType {
  loans: Loan[];
  applyLoan: (loan: Loan) => void;
  updateLoanStatus: (loanId: string, status: string) => void;
}

const LoanContext = createContext<LoanContextType | undefined>(undefined);

export const LoanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loans, setLoans] = useState<Loan[]>([]);

  const applyLoan = (loan: Loan) => {
    setLoans((prevLoans) => [...prevLoans, loan]);
  };

  const updateLoanStatus = (loanId: string, status: string) => {
    setLoans((prevLoans) =>
      prevLoans.map((loan) =>
        loan.loanId === loanId ? { ...loan, status } : loan
      )
    );
  };

  return (
    <LoanContext.Provider value={{ loans, applyLoan, updateLoanStatus }}>
      {children}
    </LoanContext.Provider>
  );
};

export const useLoan = (): LoanContextType => {
  const context = useContext(LoanContext);
  if (context === undefined) {
    throw new Error('useLoan must be used within a LoanProvider');
  }
  return context;
};
