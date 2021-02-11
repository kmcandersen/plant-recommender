const express = require('express');
const dotenv = require('dotenv');
const plants = require('./data/plants');

dotenv.config();

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
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${5000}`)
);
