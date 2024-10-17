import express from 'express';
import connectDB from './config/db';
import errorMiddleware from './middleware/errorMiddleware';
import adminRoutes from './routes/adminRoutes';
import loanRoutes from './routes/loanRoutes';
import userRoutes from './routes/userRoutes';
import { PORT } from './config/environment';

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/api/admin', adminRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/auth', userRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
