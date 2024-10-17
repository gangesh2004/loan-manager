import dotenv from 'dotenv';

dotenv.config();

const { DB_URI, JWT_SECRET, PORT } = process.env;

if (!DB_URI || !JWT_SECRET || !PORT) {
  throw new Error('Missing required environment variables.');
}

export { DB_URI, JWT_SECRET, PORT };
