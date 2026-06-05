import express from "express";

import {
  saveContact,
  getContact,
  deleteContact,
} from "../controller/contact.js";

import {
  registerUser,
  loginUser,
} from "../controller/adminController.js";

import {
  isAuthenticated,
  isAdmin
} from "../middleware/auth.js";

const router = express.Router();

// Auth
router.post("/register", registerUser);
router.post("/login", loginUser);

// User
router.post(
  "/submit",
  isAuthenticated,
  saveContact
);

// Admin
router.get(
  "/all",
  isAuthenticated,
  isAdmin,
  getContact
);

router.delete(
  "/:id",
  isAuthenticated,
  isAdmin,
  deleteContact
);

export default router;