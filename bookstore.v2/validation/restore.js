const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRestoreInput(data) {
  const errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.newPassword = !isEmpty(data.newPassword) ? data.newPassword : '';
  
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  if (Validator.isEmpty(data.newPassword)) {
    errors.newPassword = 'Password field is required';
  }
  if (!Validator.isLength(data.newPassword, { min: 6, max: 30 })) {
    errors.newPassword = 'Password must be at least 6 characters';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
