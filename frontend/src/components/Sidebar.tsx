import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/verifier">Verifier Dashboard</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
