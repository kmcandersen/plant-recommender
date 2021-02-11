const express = require('express');
const plants = require('./data/plants');

const app = express();

app.get('/api/plants', (req, res) => {
  res.json(plants);
});

app.get('/api/plants/:id', (req, res) => {
  const plant = plants.find((p) => p._id === req.params.id);
  res.json(plant);
});

app.listen(5000, console.log('server running on port 5000'));
