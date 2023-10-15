// const express = require('express');
// const router = express.Router();
// const { signUp, login } = require('../controllers/authControllers');//authentication controllers //imported the auth controllers

// //APIs
// //registration route // callback functions
// router.post('/signUp', (req, res) => {
//   signUp(req, res);
// });
// //login route
// router.post('/login', (req, res) => {
//   login(req, res);
// });

// module.exports = router;




import { Router } from 'express';
const router = Router();
import { signUp, login } from '../controllers/authControllers';
import { authenticateToken } from '../middlewares/authM';//Imported the middleware

// Registration route (no authentication required) //callback function
router.post('/auth/register', signUp);

// Login route (no authentication required) //callback function
router.post('/login', login);

// Protected route: Example of a route that requires authentication
router.get('/profile', authenticateToken, (req, res) => {
  // Only authenticated users can access this route
  // You can access the authenticated user via req.user
  res.json({ message: 'This is a protected route for user profile.' });
});

// Other routes...

export default router;
