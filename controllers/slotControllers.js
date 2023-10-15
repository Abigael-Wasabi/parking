// const ParkingSlot = require('../models/parkingSlot'); // Imported ParkingSlot model
// const Car = require('../models/car'); // Imported Car model

// // Function to enter parking details
// const enterParkingDetails = async (req, res) => {
//   try{
//     const{CarID, ParkingSlotID} = req.body;

//     //if car n slot exist in db
//     const car = await Car.findById(CarID);
//     const parkingSlot = await ParkingSlot.findById(ParkingSlotID);

//     if (!car || !parkingSlot){
//       return res.status(404).json({message: 'Car or Slot not found'});
//     }

//     //if slot already occupied
//     if (parkingSlot.ParkingSlotStatus === 'occupied'){
//       return res.status(400).json({message: 'Parking slot is already occupied'})
//     }

//     // Update the parking slot status to occupied
//     parkingSlot.ParkingSlotStatus = 'occupied';
//     parkingSlot.save();
 
//     res.status(200).json({ message: 'Parking details entered successfully' });
//     } catch (error) {
//     console.error('Error entering parking details:', error);
//     res.status(500).json({ message: 'Server error' });
//    }
//   };

//   // Function to allocate a random parking slot
//   const allocateRandomSlot = async (req, res) => {
//     try {
//       const { CarID } = req.body;

//       // Check if the car exists in the database
//       const car = await Car.findById(CarID);

//       if (!car) {
//         return res.status(404).json({ message: 'Car not found' });
//       }

//       // Check if the car already has an allocated parking slot
//       if (car.ParkingSlotID) {
//         return res.status(400).json({ message: 'Car already has a parking slot' });
//       }

//       // Find an available parking slot (you should implement this logic based on your database)
//       const availableSlot = await ParkingSlot.findOne({ ParkingSlotStatus: 'not occupied' });

//       if (!availableSlot) {
//         return res.status(400).json({ message: 'No available parking slots' });
//       }

//       // Update the car's parking slot ID and the parking slot's status
//       car.ParkingSlotID = availableSlot._id;
//       availableSlot.ParkingSlotStatus = 'occupied';

//       // Save the changes
//       car.save();
//       availableSlot.save();

//       res.status(200).json({ message: 'Parking slot allocated successfully' });
//     } catch (error) {
//       console.error('Error allocating parking slot:', error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };

// module.exports = {enterParkingDetails,allocateRandomSlot,};
