import User from './models/user'; // user model
import express, { json } from 'express';
const app = express();
import cors from 'cors';

//middleware for parsing JSON
app.use(json());
app.use(cors());//cors middleware


 

// other middleware and app setup ...
app.post('/auth/register', async (req, res) => {
  try {
    // Extract user registration data from the request body
    const { username, email, password } = req.body;

    // Prepare user registration data
    const userData = {
      username,
      email,
      password,
    };

    // Send a POST request to the registration endpoint
    const response = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    // Handle the response
    if (response.status === 201) {
      // User registered successfully
      const data = await response.json();
      // Handle the response data (e.g., store user token, redirect, etc.)
      console.log('User registered:', data);
      res.status(201).json(data); // Return the response from your API to the frontend
    } else {
      // Registration failed
      const errorData = await response.json();
      console.error('Registration error:', errorData.message);
      res.status(response.status).json(errorData); // Return the error response to the frontend
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' }); // Handle server errors
  }
});

//(other routes and server setup) ...

app.post('/auth/register', async (req, res) => {
  try {
    // Extract user registration data from the request body
    const { firstname,lastname,  email, password, confirmPassword } = req.body;

    // Check if all required fields are provided
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Assuming you have a User model defined
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });

    // User registered successfully
    console.log('User registered:', newUser);
    res.status(201).json(newUser); // Return the registered user data to the frontend
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' }); // Handle server errors
  }
});


// Start your server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 











// import express, { json } from 'express';
// const app = express();
// import cors from 'cors';
// import { sync } from './config/db'; // Imported database configuration
// import { create } from './models/user'; // Import your User model
// import { create as _create } from './models/parkingSlot';

// // Middleware for parsing JSON and enabling CORS
// app.use(json());
// app.use(cors());

// // Route handlers
// import authRoutes from './routes/authRoutes';
// import carSlotRoutes from './routes/carSlotRoutes';

// // Use the route handlers with their respective base URLs
// app.use('/auth', authRoutes);
// app.use('/carSlot', carSlotRoutes);

// // Db synchronization and error handling
// sync()
//   .then(() => {
//     console.log('Database connected');
//   })
//   .catch((err) => {
//     console.error('Database connection error:', err);
//   });

// // Route handler for user registration
// app.post('/auth/register', async (req, res) => {
//   try {
//     // Extract user registration data from the request body
//     const { username, email, password } = req.body;
//     //added this mine
//     const {parkingSlotID, parkingSlotStatus} = req.body;

//     // Here, you should write code to save the user data to your database.
//     // Assuming you have a User model, you can create a new user like this:
//     const newUser = await create({ username, email, password });
//     //added this mine
//     const newParkSlot = await _create({parkingSlotID, parkingSlotStatus,
//     parkingSlotStatus:'available'});
//     // You need to implement your User model and database connection accordingly.

//     // For now, simulate a successful registration response
//     const data = { message: 'User registered successfully' };
//     res.status(201).json(data);
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // ... (other routes and server setup) ...

// // Start your server
// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
