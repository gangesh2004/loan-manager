# Credit App

## Overview
Credit App is a web application designed to streamline the process of applying for and managing loans. It includes features for users to apply for loans, track their status, and for administrators to manage users and loans effectively.

### Features
- **User Features**:
  - Apply for loans by entering personal and financial information.
  - Track the status of loan applications.
  
- **Admin Features**:
  - Manage user accounts and loan applications.
  - View and delete verifiers.

- **Verifier Features**:
  - Review loan applications and update their statuses.

## Tech Stack
- **Frontend**:
  - React with TypeScript
  - CSS Modules for styling
  - React Router for navigation
  - Axios for API calls

- **Backend**:
  - Node.js with TypeScript
  - Express for server-side logic
  - MongoDB for database management
  - Mongoose for object data modeling (ODM)
  - JWT for user authentication
  - Joi for input validation


## Installation

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd loan-manager-frontend

```npm install```
```npm start```
```cd loan-manager-backend```
```npm install```
Create a .env file in root directory of frontend and backend
```ts-node src/server.ts```

Usage
Access the frontend application in your browser at http://localhost:3000.
Use the API endpoints defined in the backend to interact with the database.
API Endpoints
User Registration: POST /api/auth/register
User Login: POST /api/auth/login
Apply for Loan: POST /api/loans/apply
Get User Loans: GET /api/loans/user/:userId
Get Verifiers: GET /api/admin/verifiers
Delete Verifier: DELETE /api/admin/verifiers/:id


