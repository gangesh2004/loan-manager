import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have styles for this page

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Loan Manager</h1>
        <p>Manage your loans efficiently and hassle-free.</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Track Loans</h2>
          <p>Keep track of your loan applications and their current status.</p>
        </div>
        <div className="feature-card">
          <h2>Quick Loan Application</h2>
          <p>Apply for loans easily with our simple application process.</p>
        </div>
        <div className="feature-card">
          <h2>Secure and Reliable</h2>
          <p>We ensure that your data is secure and your loans are processed reliably.</p>
        </div>
      </section>

      <div className="cta-buttons">
        <Link to="/apply-loan" className="btn apply-btn">Apply for Loan</Link>
        <Link to="/login" className="btn login-btn">Login</Link>
      </div>
    </div>
  );
};

export default Home;
