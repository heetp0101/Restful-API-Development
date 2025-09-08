// utils/validateInput.js

function validateShipInput(data, isUpdate = false) {
    const errors = [];
  
    // For update, fields are optional, but if provided, they must be valid
    if (!isUpdate || data.name !== undefined) {
      if (!data.name || typeof data.name !== "string" || data.name.trim() === "") {
        errors.push("Name is required and must be a non-empty string.");
      }
    }
  
    if (!isUpdate || data.email !== undefined) {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!data.email || !emailRegex.test(data.email)) {
        errors.push("A valid email is required.");
      }
    }
  
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  
  module.exports = validateShipInput;
  