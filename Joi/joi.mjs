// import Joi from 'joi';

// // Define a schema for a user object
// const userSchema = Joi.object({
//   username: Joi.string().alphanum().min(3).max(30).required(),
//   email: Joi.string().email().required(),
//   birthYear: Joi.number().integer().min(1900).max(new Date().getFullYear()),
//   password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
//   confirmPassword: Joi.ref('password')
// });

// // Validate data against the schema
// const userData = {
//   username: 'johndoe',
//   email: 'john@example.com',
//   birthYear: 1990,
//   password: 'password123',
//   confirmPassword: 'password123'
// };

// const validationResult = userSchema.validate(userData);

// // The validation result contains either an error or the validated value
// if (validationResult.error) {
//   console.error('Validation error:', validationResult.error.message);
// } else {
//   console.log('Valid data:', validationResult.value);
// }

import joi from "joi"


const sch = joi.object({
  name: joi.string().alphanum().max(10).min(6).required(),
  age : joi.number().integer().min(18).max(25).required(),
  pass : joi.string().alphanum().min(8).max(16).required(),
  conf_pass : joi.ref("pass")
})

const mysch = {
  name : "A12345",
  age : 21,
  pass : "A12sdwedse",
  conf_pass : "A12sdwedse"
}

console.log(sch.validate(mysch))