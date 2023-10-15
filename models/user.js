import { DataTypes } from 'sequelize';
import { define } from '../config/db.js'; // Imported Sequelize instance

const User = define('User', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;











/*User Database (UserDetails)

Entities:
User
Attributes:
UserID (auto-generated, auto-increment)
Username
Email
Password

Entities:
ParkingSlot
Attributes:
ParkingSlotID (auto-generated, auto-increment)
ParkingSlotStatus (occupied, not occupied)

Car
Attributes:
CarID/carsID (auto-generated, auto-increment)
ArrivalTime
DepartureTime
CarType
NumberOfVehicles
RegistrationNumber*/

