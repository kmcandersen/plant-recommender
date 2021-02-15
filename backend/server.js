import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import plants from './data/plants.js';

dotenv.config();

connectDB();

const app = express();

app.get('/api/plants', (req, res) => {
  res.json(plants);
});

app.get('/api/plants/:id', (req, res) => {
  const plant = plants.find((p) => p._id === req.params.id);
  res.json(plant);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
      .bold
  )
);
