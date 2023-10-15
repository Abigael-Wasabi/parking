import { DataTypes } from 'sequelize';
import { define } from '../config/db'; // Imported Sequelize instance

const Car = define('Car', {
  carID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  arrivalTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  departureTime: {
    type: DataTypes.DATE,
  },
  carType: {
    type: DataTypes.STRING,
  },
  numberOfVehicles: {
    type: DataTypes.INTEGER,
  },
  registrationNumber: {
    type: DataTypes.STRING,
  },
  // Other Car fields as needed
});

export default Car;
