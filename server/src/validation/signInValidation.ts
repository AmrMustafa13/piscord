import { ValidationChain, body } from "express-validator";

export function validateSignIn(): ValidationChain[] {
  return [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 5, max: 30 })
      .withMessage("Password must be between 5 and 30 characters long")
      .matches(/\d/)
      .withMessage("Password must contain a number"),
  ];
}
