import { DataTypes } from 'sequelize';
import { define } from '../config/db'; // Imported Sequelize instance

const ParkingSlot = define('ParkingSlot', {
  parkingSlotID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  parkingSlotStatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Other ParkingSlot fields as needed
});

export default ParkingSlot;
