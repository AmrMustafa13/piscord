import { ValidationChain, body } from "express-validator";

export function validateSignUp(): ValidationChain[] {
  return [
    body("userName")
      .isLength({ min: 1, max: 50 })
      .withMessage("Username must be between 1 and 50 characters long")
      .matches(/^[A-Za-z0-9_]+$/)
      .withMessage("Username must be alphanumeric only")
      .trim()
      .escape(),

    body("nickName")
      .isLength({ min: 1, max: 50 })
      .withMessage("Nickname must be between 1 and 50 characters long")
      .matches(/^[A-Za-z0-9_]+$/)
      .withMessage("Nickname must be alphanumeric only")
      .trim()
      .escape(),

    body("email").isEmail().withMessage("Invalid email format"),

    body("password")
      .isLength({ min: 5, max: 30 })
      .withMessage("Password must be between 5 and 30 characters long")
      .matches(/\d/)
      .withMessage("Password must contain a number"),

    body("dateOfBirth").isISO8601().withMessage("Invalid date format"),
  ];
}
