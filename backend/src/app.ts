import express from 'express';
import adminRoutes from './routes/adminRoutes';
import loanRoutes from './routes/loanRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies

// Use routes
app.use('/api/admin', adminRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/auth', userRoutes);

// Other app setup...
