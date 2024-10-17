import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/apply-loan">Apply for Loan</Link></li>
        <li><Link to="/loans">Track Loans</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/verifier">Verifier Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
