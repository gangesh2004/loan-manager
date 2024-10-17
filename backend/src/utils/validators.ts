import Joi from 'joi';

// User registration validation
export const validateUserRegistration = (data: any) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('user', 'admin', 'verifier').default('user'),
  });
  return schema.validate(data);
};

// User login validation
export const validateUserLogin = (data: any) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

// Loan application validation
export const validateLoanApplication = (data: any) => {
  const schema = Joi.object({
    loanAmount: Joi.number().positive().required(),
    tenure: Joi.number().integer().positive().required(),
    employmentStatus: Joi.string().required(),
    reason: Joi.string().required(),
  });
  return schema.validate(data);
};
