import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import plants from './data/plants.js';
import User from './models/userModel.js';
import Plant from './models/plantModel.js';
import Collection from './models/collectionModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Collection.deleteMany();
    await Plant.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const samplePlants = plants.map((plant) => {
      return { ...plant, user: adminUser };
    });
    await Plant.insertMany(samplePlants);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Collection.deleteMany();
    await Plant.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// ie, ran "npm run data:destroy" else "npm run data:import"
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
