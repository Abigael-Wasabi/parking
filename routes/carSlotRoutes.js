import { Router } from 'express';
const router = Router();
import { enterParkingDetails, allocateRandomSlot, cancelReservation, checkAvailableSlots } from '../controllers/carSlotControllers'; //Imported the car controller

// Route to enter parking details
router.post('/enterParkingDetails', enterParkingDetails);

// Route to allocate a random parking slot
router.get('/allocateRandomSlot', allocateRandomSlot);

// Route to cancel a reservation
router.post('/cancelReservation', cancelReservation);

// Route to check available slots
router.get('/checkAvailableSlots', checkAvailableSlots);

export default router;







// const express = require('express');
// const router = express.Router();
// const {enterParkingDetails,allocateRandomSlot,cancelReservation,checkAvailableSlots,} = require('../controllers/carSlotControllers');
// const { authenticateToken } = require('../middlewares/authM'); //Imported the middleware

// // Route to enter parking details (no authentication required)
// router.post('/enterParkingDetails', enterParkingDetails);

// // Route to allocate a random parking slot (no authentication required)
// router.get('/allocateRandomSlot', allocateRandomSlot);

// // Route to cancel a reservation (no authentication required)
// router.post('/cancelReservation', cancelReservation);

// // Protected route: Example of a route that requires authentication
// router.get('/userDashboard', authenticateToken, (req, res) => {
//   // Only authenticated users can access this route
//   // You can access the authenticated user via req.user
//   res.json({ message: 'This is a protected route for user dashboard.' });
// });

// // Route to check available slots (no authentication required)
// router.get('/checkAvailableSlots', checkAvailableSlots);

// // Other routes...

// module.exports = router;
