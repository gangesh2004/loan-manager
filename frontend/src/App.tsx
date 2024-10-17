import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LoanProvider } from './context/LoanContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import UserLoans from './pages/UserLoans';
import ApplyLoan from './pages/ApplyLoan';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import './styles/index.css';

function App() {
  return (
    <AuthProvider>
      <LoanProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Sidebar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/user-loans" element={<UserLoans />} />
                <Route path="/apply-loan" element={<ApplyLoan />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
              </Routes>
            </div>
          </div>
        </Router>
      </LoanProvider>
    </AuthProvider>
  );
}

export default App;
