import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Plant from '../models/plantModel.js';

// fetch all plants
// GET /api/plants
// public access
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const plants = await Plant.find({});
    res.json(plants);
  })
);

// fetch single plant
// GET /api/plants/:id
// public access
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const plant = await Plant.findById(req.params.id);
    if (plant) {
      res.json(plant);
    } else {
      res.status(404);
      throw new Error('Plant not found');
    }
  })
);

export default router;
